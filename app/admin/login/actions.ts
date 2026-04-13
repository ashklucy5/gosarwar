"use server";

import { signIn } from "@/lib/auth";
import { AuthError } from "next-auth";
import { redirect } from "next/navigation";

export async function login(formData: FormData) {
  try {
    // Attempt to sign in with Credentials provider
    await signIn("credentials", formData);
  } catch (error) {
    // Handle specific auth errors
    if (error instanceof AuthError) {
      // Redirect back to login with an error message
      redirect("/admin/login?error=CredentialsSignin");
    }
    // Rethrow unexpected errors
    throw error;
  }
}