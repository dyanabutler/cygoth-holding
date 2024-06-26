import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import localFont from 'next/font/local'
import Footer from "./components/Footer"
import SideNav from "./components/SideNav"
import Book from "./components/Book"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const chop = localFont({ src: './fonts/Chopsic.otf', variable: '--font-chop', })
const cloister = localFont({ src: './fonts/Cloister.ttf', variable: '--font-cloister', })
const king = localFont({ src: './fonts/Kings.ttf', variable: '--font-king', })
const jacq = localFont({ src: './fonts/Jacquaard.ttf', variable: '--font-jacq', })



export const metadata: Metadata = {
  title: "CYGOTH NFT",
  description: "A NFT Community for Misfits",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
     <body className={`${inter.variable} ${chop.variable} ${cloister.variable}  ${king.variable} ${jacq.variable}  font-chop`}>
        
        <div className="bg-gradient-to-b from-black to-black via-[#1F0727]">
          <div className="min-h-screen flex flex-col">
            
            {children}
            
          </div>
          
        </div>
        
        <Footer />
      </body>
    </html>
  );
}
