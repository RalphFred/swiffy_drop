import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const montserrat = Montserrat({ subsets: ["latin"], weight: "500" });

export const metadata: Metadata = {
  title: "Swiffy Drop",
  description: "Drop your images and get the background removed instantly",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`flex flex-col h-screen bg-blue-50 ${montserrat.className}`}>
        <Navbar />
          <main className="flex-1">
            {children}
          </main>
        <Footer />
      </body>
    </html>
  );
}
