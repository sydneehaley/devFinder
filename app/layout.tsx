// import 'server-only';
import * as React from 'react';

import '../dist/output.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className='dark:bg-neutral-900 bg-base-100 text-gray-900 antialiased font-theme' lang='en'>
      <head>
        <title>Jobs Near You | devFinder</title>
      </head>

      <body>{children}</body>
    </html>
  );
}
