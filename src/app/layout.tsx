'use client';
import * as contentful from "contentful"

import "./globals.css";

import { Navbar } from "./components/navbar";
import { Menubar } from "./components/menubar";
import { Footer } from "./components/footer";

const data = "this is a title";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) 

{
  return (
    <html lang="en" className="light">
      <body className="bg-light-fg">
        <Navbar />
        <Menubar />

        {children }

        <Footer/>

      </body>
    </html>
  );
}
