'use client';

import { useEffect, useState } from 'react';
import { useSupabase } from '../../components/supabase-provider';
import type { Database } from '../../types/database.types';
import List from '../../components/List';

type Job = Database['public']['Tables']['test']['Row'];

export default function Jobs({ serverPosts }: { serverPosts: Job[] }) {
  const [jobs, setJobs] = useState(serverPosts);
  const { supabase } = useSupabase();

  useEffect(() => {
    setJobs(serverPosts);
  }, [serverPosts]);

  useEffect(() => {
    const channel = supabase
      .channel('*')
      .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'posts' }, (payload) => setJobs([...jobs, payload.new as Job]))
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [supabase, setJobs, jobs]);

  // return <pre>{JSON.stringify(jobs, null, 2)}</pre>;

  return (
    <ul className='w-full p-0 m-0 grid grid-cols-3 grid-rows-3 gap-x-[3vh] gap-y-[3vh] child:shadow-sm '>
      {jobs?.map((job: any, i: any) => (
        <li className=' border border-neutral-700/70 h-full rounded-xl p-[2rem]' key={job?.job_id}>
          <div className='leading-[2rem] h-[80%]'>
            <h6 className='text-[14px] font-semibold text-amber-200'>{job.title}</h6>
            <h6 className='text-[12px] text-white/30'>{job.company}</h6>
            {/* <h6 className='text-[13px]'>{job.location}</h6> */}
            <p className='mt-[1rem] leading-[1.6rem]'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium maxime voluptatibus sequi fuga dolorum. Netus et malesuada fames ac
              turpis.
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}
