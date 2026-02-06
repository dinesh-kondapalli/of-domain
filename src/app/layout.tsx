import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "of.domains",
  description: "of.domains clone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="antialiased"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
