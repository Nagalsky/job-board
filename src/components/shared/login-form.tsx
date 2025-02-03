import { signInWithGitHub, signInWithGoogle } from "@/actions/auth.action";
import Form from "next/form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { SubmitButton } from "./submit-button";

export const LoginForm = () => {
  return (
    <div className="flex flex-col gap-6">
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Welcome back</CardTitle>
          <CardDescription>
            Login with your GitHub or Google account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6">
            <div className="flex flex-col gap-4">
              <Form action={signInWithGitHub}>
                <SubmitButton
                  title="Login with GitHub"
                  variant="outline"
                  className="w-full bg-[#333] text-white hover:bg-[#232323] hover:text-white"
                />
              </Form>
              <Form action={signInWithGoogle}>
                <SubmitButton
                  title="Login with Google"
                  variant="outline"
                  className="w-full bg-[#dd4b39] text-white hover:bg-[#ea4335] hover:text-white"
                />
              </Form>
            </div>
          </div>
        </CardContent>
      </Card>
      <div className="text-balance text-center text-xs text-muted-foreground">
        By clicking continue, you agree to our{" "}
        <a href="#" className="underline hover:text-primary">
          Terms of Service
        </a>{" "}
        and{" "}
        <a href="#" className="underline hover:text-primary">
          Privacy Policy
        </a>
        .
      </div>
    </div>
  );
};
