import type { Metadata } from "next";
import { Sora } from "next/font/google";
import { Navbar } from "./_components/Navbar";
import "./globals.css";

const sora = Sora({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AalanDev",
  description: "Profesional developer portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={sora.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
