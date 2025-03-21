import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Header from "@/components/client/Header";
import Footer from "@/components/client/Footer";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GnG Amazigh",
  description: "GnG Amazigh - Esports Team",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "bg-gradient-to-r from-[#2d346f] to-[#722efa]",
          montserrat.className
        )}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
