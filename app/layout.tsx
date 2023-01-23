import 'server-only';
import Head from 'next/head';
import * as React from 'react';
import SupabaseListener from '../components/supabase-listener';
import { createServerClient } from '../utils/supabase-server';
import Navbar from '../components/Navbar';
import type { SupabaseClient } from '@supabase/auth-helpers-nextjs';
import type { Database } from '../lib/database.types';
import '../dist/output.css';
import SupabaseProvider from '../components/supabase-provider';

export type TypedSupabaseClient = SupabaseClient<Database>;
export const revalidate = 0;

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const supabase = createServerClient();

  const {
    data: { session },
  } = await supabase.auth.getSession();

  return (
    <html lang='en'>
      <head>
        <title>Jobs Near You | devFinder</title>
      </head>
      <body>
        <SupabaseProvider session={session}>
          <SupabaseListener serverAccessToken={session?.access_token} />
          <Navbar />
          <div className='w-full flex items-center justify-center'>{children}</div>
        </SupabaseProvider>
      </body>
    </html>
  );
}
