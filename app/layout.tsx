import Footer from "@/components/footer";
import Header from "@/components/header";
import { Metadata } from "next";
import React from "react";
import { Hind_Siliguri } from "next/font/google";
import "./globals.css"

const hindShiliguri = Hind_Siliguri({
  subsets: ["bengali"],
  weight: ["300", "400", "500", "600", "700"],
});

interface LayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: "টুলকিট - সকল টুল এক স্থানে",
  description:
    "আপনার দৈনন্দিন কাজকে সহজ করতে তৈরি করা হয়েছে বিভিন্ন ইউটিলিটি টুলের সংগ্রহ",
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <html lang="bn">
      <body className={hindShiliguri.className}>
        <div className="min-h-screen flex flex-col bg-gray-50">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
};

export default Layout;
