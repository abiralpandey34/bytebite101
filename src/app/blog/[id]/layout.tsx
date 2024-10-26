'use client';

import { Footer } from "@/app/components/footer";
import { Menubar } from "@/app/components/menubar";
import { Navbar } from "@/app/components/navbar";
import "../../globals.css";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) 

{
  return (
    <div>
      
    <Navbar />
    <Menubar />

      {children}
    <Footer/>

    </div>
  );
}
