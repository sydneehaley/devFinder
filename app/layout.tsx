// import 'server-only';
import * as React from 'react';
import SupabaseListener from '../components/supabase-listener';
import { createServerClient } from '../utils/supabase-server';
import type { SupabaseClient } from '@supabase/auth-helpers-nextjs';
import type { Database } from '../types/database.types';
import '../dist/output.css';
import SupabaseProvider from '../components/supabase-provider';

// export type TypedSupabaseClient = SupabaseClient<Database>;
// export const revalidate = 0;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // const supabase = createServerClient();
  // const {
  //   data: { session },
  // } = await supabase.auth.getSession();
  // console.log(session?.user);

  return (
    <html className='bg-neutral' lang='en'>
      <head>
        <title>Jobs Near You | devFinder</title>
      </head>

      <body>
        {/* <SupabaseProvider session={session}>
          <SupabaseListener serverAccessToken={session?.access_token} /> 
        {children}
        </SupabaseProvider> */}
        {children}
      </body>
    </html>
  );
}
