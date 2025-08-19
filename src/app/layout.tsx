import type { Metadata } from "next";
import Header from "@/components/Header";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "ROMI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
