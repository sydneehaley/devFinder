// import 'server-only';
import * as React from 'react';

import '../dist/output.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
<<<<<<< HEAD
    <html className='bg-base-100 text-neutral  antialiased font-theme' lang='en'>
=======
    <html className='dark:bg-[#0F0F0F] bg-base-100' lang='en'>
>>>>>>> 36ade5e (general ui updates)
      <head>
        <title>Jobs Near You | devFinder</title>
      </head>

      <body>{children}</body>
    </html>
  );
}
