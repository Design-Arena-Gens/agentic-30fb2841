import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "دليل ظهور موقعك في بحث Google",
  description: "خطوات عملية ومبسطة تساعدك على ظهور موقعك في نتائج بحث Google بسهولة."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
