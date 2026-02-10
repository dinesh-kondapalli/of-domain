import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "of.domains",
  description: "We turn premium domains into startup assets",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ minHeight: "100vh" }}>
      <body
        style={{ minHeight: "100vh", margin: 0, padding: 0 }}
        className="antialiased"
      >
        {children}
      </body>
    </html>
  );
}
