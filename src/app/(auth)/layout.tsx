export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main className="flex min-h-dvh flex-col">{children}</main>;
}
