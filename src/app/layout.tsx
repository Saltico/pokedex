import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pokedex Examedi",
  description: "Prueba técnica para Examedi.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <main className="container">
            <h1 style={{color: 'black', textAlign: 'center', fontSize: '150%', fontWeight: '600'}}>ExamediDex</h1>    
            <div className="wrapper">
              {children}
            </div>
        </main></body>
    </html>
  );
}
