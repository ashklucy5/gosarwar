'use client';
import { signIn } from 'next-auth/react';
import { useState } from 'react';

export default function LoginPage() {
  const [error, setError] = useState('');
  
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const res = await signIn('credentials', { 
      email: fd.get('email'), 
      password: fd.get('password'),
      redirect: false 
    });
    if (res?.error) setError('Invalid credentials');
    else window.location.href = '/admin';
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-sm space-y-4">
        <h2 className="text-2xl font-bold text-center text-violet-700">Admin Login</h2>
        {error && <p className="text-red-500 text-sm text-center">{error}</p>}
        <input name="email" type="email" placeholder="Email" required className="input" />
        <input name="password" type="password" placeholder="Password" required className="input" />
        <button type="submit" className="w-full bg-violet-600 text-white py-2.5 rounded-lg hover:bg-violet-700 font-medium">
          Sign In
        </button>
      </form>
    </div>
  );
}