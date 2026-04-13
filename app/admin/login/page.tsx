import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { login } from "./actions";

export default async function LoginPage({ searchParams }: { searchParams: { error?: string } }) {
  // If already logged in, go to dashboard
  const session = await auth();
  if (session) redirect("/admin");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md border border-gray-100">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Admin Login</h1>
          <p className="text-gray-500 text-sm mt-2">Enter your credentials to access the dashboard</p>
        </div>

        {searchParams.error && (
          <div className="bg-red-50 text-red-600 p-3 rounded-lg mb-6 text-sm text-center border border-red-100">
            Invalid email or password. Please try again.
          </div>
        )}

        <form action={login} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
            <input 
              name="email" 
              type="email" 
              required 
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition"
              placeholder="admin@gosarwar.com"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input 
              name="password" 
              type="password" 
              required 
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition"
              placeholder="••••••••"
            />
          </div>

          <button 
            type="submit" 
            className="w-full bg-violet-600 text-white py-2.5 rounded-lg hover:bg-violet-700 font-medium transition shadow-sm"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}