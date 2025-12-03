// app/layout.tsx
import { Sidebar } from "@/components/sidebar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "কাজের ট্র্যাকার",
  description: "আপনার কাজের সময় ট্র্যাক করুন",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="bn">
      <body>
        <div className="flex min-h-screen">
          <Sidebar />
          <div className="flex-1">
            <main className="p-6">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
