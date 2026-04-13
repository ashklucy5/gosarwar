// lib/db.ts
import { getDB } from './mongodb';
import type { SectionDoc, CarouselDoc } from '@/models/types';

// 📄 SECTIONS (Hero, About, Contact)
export async function getSection(slug: string): Promise<SectionDoc | null> {
  const db = await getDB();
  const doc = await db.collection('content').findOne({ slug, type: 'section' });
  return doc ? (doc as SectionDoc) : null;
}

export async function updateSection(slug: string, data: { [key: string]: any }): Promise<void> {
  const db = await getDB();
  await db.collection('content').updateOne(
    { slug, type: 'section' },
    { $set: { data, updatedAt: new Date() } },
    { upsert: true }
  );
}

// 🎠 CAROUSEL (Works & Team)
export async function getCarouselItems(category: 'work' | 'team'): Promise<CarouselDoc[]> {
  const db = await getDB();
  const docs = await db.collection('content')
    .find({ type: 'carousel', category })
    .sort({ 'data.sortOrder': 1 })
    .toArray();
  
  // Safe cast using map to satisfy strict TS overlap checks
  return docs.map(doc => doc as CarouselDoc);
}

export async function addCarouselItem(category: 'work' | 'team', data: { [key: string]: any }): Promise<void> {
  const db = await getDB();

  const last = await db.collection('content')
    .findOne({ type: 'carousel', category }, { sort: { 'data.sortOrder': -1 } });

  const nextOrder = last?.data?.sortOrder ? last.data.sortOrder + 1 : 0;
  const slug = `${category}_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;

  // ⚠️ DO NOT pass _id here. Let MongoDB auto-generate ObjectId.
  // This fixes the "Type 'string' is not assignable to type 'ObjectId'" error.
  const newDoc = {
    slug,
    type: 'carousel',
    category,
    data: { ...data, sortOrder: nextOrder },
    createdAt: new Date(),
    updatedAt: new Date()
  };

  await db.collection('content').insertOne(newDoc);
}

export async function deleteCarouselItem(slug: string): Promise<void> {
  const db = await getDB();
  await db.collection('content').deleteOne({ slug });
}