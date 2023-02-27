// import 'server-only';
import * as React from 'react';

import '../dist/output.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className='bg-neutral' lang='en'>
      <head>
        <title>Jobs Near You | devFinder</title>
      </head>

      <body>{children}</body>
    </html>
  );
}
