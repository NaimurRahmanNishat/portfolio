import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Personal Portfolio",
  description: "A web developer personal portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <NextTopLoader color="#5700FF" showSpinner={false}/> */}
      <body className={`bg-peach-600 ${manrope.className}`}>{children}</body>
    </html>
  );
}
