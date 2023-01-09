import type { NextPage } from 'next';
import 'server-only';
import Head from 'next/head';
import * as React from 'react';
import Navbar from './components/dashboard/Navbar';
import Search from './components/dashboard/Search';

import '../dist/output.css';

export const revalidate = 0;

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
