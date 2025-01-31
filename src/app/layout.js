import { Geist, Geist_Mono } from "next/font/google";
import Head from "next/head";
import "./globals.css";
import Header from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "My portfolio",
  description: "Welcome to my portfolio",
  icons: "/services.png", // Path to your favicon in the public folder

};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
      <link rel="icon" href="/services.png" type="image/webp" />
      </Head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
