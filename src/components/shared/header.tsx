import { auth } from "@/lib/auth";
import { Menu } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { ModeToggle } from "./mode-toggle";
import { UserDropdown } from "./user-dropdown";

export const Header = async () => {
  const session = await auth();
  return (
    <header className="border-b py-4 shadow-md">
      <div className="container flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <h1 className="text-4xl font-bold">
            J<span className="text-primary">B</span>
          </h1>
        </Link>

        <div className="hidden gap-3 md:flex md:items-center">
          <ModeToggle />
          {session?.user ? (
            <UserDropdown
              email={session.user.email as string}
              name={session.user.name as string}
              image={session.user.image as string}
            />
          ) : (
            <Button asChild>
              <Link href="/login">Login</Link>
            </Button>
          )}
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <ModeToggle />
          {session?.user ? (
            <UserDropdown
              email={session.user.email as string}
              name={session.user.name as string}
              image={session.user.image as string}
            />
          ) : (
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader className="text-left">
                  <SheetTitle>
                    J<span className="text-primary">B</span>
                  </SheetTitle>
                  <SheetDescription>
                    Find or post your next job opportunity
                  </SheetDescription>
                </SheetHeader>

                <div className="mt-6 flex flex-col gap-4">
                  <Button asChild variant="outline">
                    <Link href="/">Find New Job</Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link href="/post-job">Post a Job</Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link href="/login">Login</Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          )}
        </div>
      </div>
    </header>
  );
};
