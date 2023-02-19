'use client';

import { useEffect, useState } from 'react';
import { useSupabase } from '../../components/supabase-provider';
import type { Database } from '../../types/database.types';
import List from '../../components/List';

// type Job = Database['public']['Tables']['test']['Row'];

// export default function Jobs({ serverPosts }: { serverPosts: Job[] }) {
//   const [jobs, setJobs] = useState(serverPosts);
//   const { supabase } = useSupabase();

//   useEffect(() => {
//     setJobs(serverPosts);
//   }, [serverPosts]);

//   useEffect(() => {
//     const channel = supabase
//       .channel('*')
//       .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'posts' }, (payload) => setJobs([...jobs, payload.new as Job]))
//       .subscribe();

//     return () => {
//       supabase.removeChannel(channel);
//     };
//   }, [supabase, setJobs, jobs]);

//   return <List data={jobs} />;
// }

export default function Jobs(data: any) {
  // const [jobs, setJobs] = useState();

  // useEffect(() => {
  //   fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/jobs?populate=*`)
  //     .then((response) => response.json())
  //     .then((data) => setJobs(data.data));
  // }, []);

  return <List data={data} />;
}
