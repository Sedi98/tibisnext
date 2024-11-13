import type { Metadata } from "next";
import {Manrope} from 'next/font/google'
import "./globals.css";



const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  weight: ['400', '500', '600', '700'],
  display: 'swap'
})

export const metadata: Metadata = {
  title: "Tibis",
  description: "Tibis medical information system",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"  className={`${manrope.className} antialiased`} >
      <body
       
      >
        {children}
      </body>
    </html>
  );
}
