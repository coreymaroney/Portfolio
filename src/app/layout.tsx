import type { Metadata } from "next";
import { Wrapper } from "../components";
import localFont from "next/font/local";
import "./globals.css";

const tahoma = localFont({
  src: "./fonts/tahoma.ttf",
  variable: "--font-tahoma",
  weight: "100 900",
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
      <body className={`${tahoma.variable}`}>
        <Wrapper />
        {children}
      </body>
    </html>
  );
}
