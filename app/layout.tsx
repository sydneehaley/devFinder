import 'server-only';
import Head from 'next/head';
import * as React from 'react';
import Navbar from './Navbar';

import '../dist/output.css';

export const revalidate = 0;

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <head>
        <title>Jobs Near You | devFinder</title>
      </head>
      <body>
        <Navbar />
        <div>{children}</div>
      </body>
    </html>
  );
}
