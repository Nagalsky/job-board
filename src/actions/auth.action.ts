"use server";

import { signIn, signOut } from "@/lib/auth";

export async function signInWithGitHub() {
  return signIn("github", {
    redirectTo: "/onboarding",
  });
}

export async function signInWithGoogle() {
  return signIn("google", {
    redirectTo: "/onboarding",
  });
}

export async function signOutUser() {
  await signOut({ redirectTo: "/" });
}
