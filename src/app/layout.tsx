import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { Wrapper } from "../components";

const tahoma = localFont({
  src: "./fonts/tahoma.ttf",
  variable: "--font-tahoma",
  // weight: "100 900",
});

export const metadata: Metadata = {
  title: "Corey Maroney",
  description: "Corey Maroney's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${tahoma.variable} font-[family-name:var(--font-tahoma)]`}
      >
        <Wrapper />
        <div className="border-2 border-[--BorderBright] mx-2 px-4">
          {children}
        </div>
      </body>
    </html>
  );
}
