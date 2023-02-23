'use client';

import { useEffect, useState } from 'react';
import useSWR, { Key, Fetcher } from 'swr';
// import { useSupabase } from '../../components/supabase-provider';
import type { Database } from '../../types/database.types';
import List from '../../components/List';
import { getJobs } from '../data/jobs';
// type Job = Database['public']['Tables']['test']['Row'];
// { serverPosts }: { serverPosts: Job[] }

export default function Jobs(serverPosts: any) {
  const [data, setData] = useState(serverPosts);
  // const { supabase } = useSupabase();

  useEffect(() => {
    console.log(serverPosts);
    setData(serverPosts);
  }, [serverPosts]);

  // useEffect(() => {
  //   const channel = supabase
  //     .channel('*')
  //     .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'posts' }, (payload) => setJobs([...jobs, payload.new as Job]))
  //     .subscribe();

  //   return () => {
  //     supabase.removeChannel(channel);
  //   };
  // }, [supabase, setJobs, jobs]);

  return <List data={data} />;
}
