import { MongoClient, ObjectId, Db } from 'mongodb';

const uri = process.env.MONGODB_URI!;
if (!uri) throw new Error('MONGODB_URI is not defined');

// Workers reuse global state across invocations
const globalWithMongo = global as typeof globalThis & { 
  _mongoClient?: MongoClient;
  _db?: Db;
  _connected?: boolean;
};

export async function getDB(): Promise<Db> {
  // Return cached DB if already connected
  if (globalWithMongo._db && globalWithMongo._connected) {
    return globalWithMongo._db;
  }
  
  // Initialize client if needed
  if (!globalWithMongo._mongoClient) {
    globalWithMongo._mongoClient = new MongoClient(uri, {
      maxPoolSize: 2, // Workers have memory limits
      minPoolSize: 0,
      connectTimeoutMS: 5000,
      serverSelectionTimeoutMS: 5000,
    });
  }
  
  // Connect (safe to call multiple times in mongodb@7.x)
  if (!globalWithMongo._connected) {
    try {
      await globalWithMongo._mongoClient.connect();
      globalWithMongo._connected = true;
    } catch (error) {
      console.error('MongoDB connection error:', error);
      throw error;
    }
  }
  
  // Cache and return DB
  globalWithMongo._db = globalWithMongo._mongoClient.db('gosarwar');
  return globalWithMongo._db;
}

// Alias for backward compatibility
export const connectDB = getDB;

// Export ObjectId for filter typing in actions.ts
export { ObjectId };