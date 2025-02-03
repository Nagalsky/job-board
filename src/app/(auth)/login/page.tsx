import { LoginForm } from "@/components/shared/login-form";
import Link from "next/link";

export default function AuthPage() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-4 px-4 py-6">
      <Link
        href="/"
        className="flex items-center gap-2 self-center hover:text-primary"
      >
        <h1 className="text-4xl font-bold">JB</h1>
      </Link>
      <LoginForm />
    </div>
  );
}
