'use client';
import * as contentful from "contentful"

import "./globals.css";

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

        {children }


      </body>
    </html>
  );
}
