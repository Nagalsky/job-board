import { Header } from "@/components/shared/header";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex min-h-dvh flex-col">
      <Header />
      {children}
    </main>
  );
}
