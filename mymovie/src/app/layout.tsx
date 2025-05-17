import type { Metadata } from "next";
import { Jaro } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header/Header";

const jaroFont = Jaro({
  variable: "--jaro",
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: "Vimux",
  description: "App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${jaroFont.variable}  antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
