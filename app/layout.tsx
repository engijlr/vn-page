import type { Metadata } from "next";
import { Inter, Lora } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const lora = Lora({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Valentina Nutrition",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-primary ${lora.className}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
