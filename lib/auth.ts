import NextAuth from "next-auth";
import type { DefaultSession } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { getDB } from "./mongodb";

declare module "next-auth" {
  interface User { role?: string; }
  interface Session { user: { role?: string } & DefaultSession["user"]; }
}

export const { auth, handlers, signIn, signOut } = NextAuth({
  providers: [
    Credentials({
      credentials: { email: { label: "Email" }, password: { label: "Password", type: "password" } },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;
        const db = await getDB();
        const user = await db.collection('adminusers').findOne({ email: credentials.email });
        if (!user) return null;
        const isValid = await bcrypt.compare(credentials.password as string, user.password as string);
        return isValid ? { id: user._id.toString(), email: user.email, role: user.role } : null;
      }
    })
  ],
  pages: { signIn: "/admin/login" },
  session: { strategy: "jwt" },
  callbacks: {
    async jwt({ token, user }) {
      if (user?.role) token.role = user.role;
      return token;
    },
    async session({ session, token }) {
      if (token.role) session.user.role = token.role as string;
      return session;
    }
  }
});