'use client';

import { useEffect, useState } from 'react';
import { marked } from 'marked';
import { useCurrentUser } from '../hooks/auth/useCurrentUser';

export default function List(data: any) {
  const [index, setIndex] = useState(0);
  const [jobs, setJobs] = useState<Object[]>();
  const [currentJob, setCurrentJob] = useState<any>();
  const { user: currentUser } = useCurrentUser();

  useEffect(() => {}, []);

  const getMarkdownText = (text: any) => {
    const clss = ' class="list-disc p-[1rem]"';
    const parsed = marked.parse(text);
    const formattedText = parsed.slice(0, 3) + clss + parsed.slice(3, parsed.length);

    // console.log(marked.parse(text));
    return { __html: formattedText };
  };

  useEffect(() => {
    setJobs(data?.data?.data);
    setCurrentJob(data?.data?.data?.find((job: any, i: number) => i === index));
  }, [index, data]);

  return (
    <div className='w-full flex flex-col items-start justify-start'>
      {!currentUser ? (
        <div className='w-full flex flex-col items-start justify-start'>
          <div className='w-full mb-[3rem] flex items-center justify-start'>
            <h6 className='text-[20px] font-medium text-white'>Jobs near you</h6>
          </div>

          <div className='w-full grid grid-cols-2 rounded-xl border border-neutral-content/10'>
            <ul className='grid col-span-1 list-none overflow-auto h-[40vh] divide-y-[1px] divide-neutral-content/10 p-0 m-0 child:shadow-sm rounded-l-xl '>
              {jobs?.map((job: any, i: any) => (
                <li
                  className={`w-full py-[1.5rem] px-[2rem] cursor-pointer ${i === index ? 'bg-neutral-content/10' : null} ${
                    i === 0 ? 'rounded-tl-xl' : null
                  }`}
                  key={job?.id}
                  onClick={() => setIndex(i)}
                >
                  <div className='leading-[1.75rem] h-[80%]'>
                    <h6 className='text-[16px] font-semibold text-neutral-content leading-[3rem]'>{job?.attributes.job_title}</h6>
                    <h6 className='text-[14px] text-white/30 '>{job?.attributes.company_id.data?.attributes?.company_name}</h6>
                    <h6 className='text-[14px] text-white/30'>{job?.attributes.location}</h6>
                    <h6 className='text-[13px] text-green-500 font-medium leading-[4rem] text-primary-focus'>5 Hours Ago</h6>
                  </div>
                </li>
              ))}
            </ul>

            <div className='grid col-span-1 border-l border-neutral-content/10 p-[3rem] overflow-auto'>
              <div>
                <h1 className='text-[30px] font-regular text-neutral-content leading-[5rem]'>{currentJob?.attributes.job_title}</h1>
                <h6 className='text-[14px] font-regular text-neutral-content leading-[2rem]'>
                  {currentJob?.attributes.company_id?.data?.attributes?.company_name}
                </h6>
                <h6 className='text-[14px] font-regular text-neutral-content leading-[2rem]'>{currentJob?.attributes.location}</h6>
                <br />
                <br />
                <br />
                <label className='text-[14px] font-semibold leading-[3rem] text-neutral-content'>Job Description</label>
                <p className='text-[14px]'>{currentJob?.attributes.description}</p>
                <br />
                <br />
                <br />
                <label className='text-[14px] font-semibold leading-[3rem] text-neutral-content'>Qualifications</label>
                <div
                  className='text-[14px] list-disc'
                  dangerouslySetInnerHTML={getMarkdownText(data?.data?.data?.find((job: any, i: number) => i === index).attributes?.qualifications)}
                ></div>
                <br /> <br />
                <label className='text-[14px] font-semibold leading-[3rem] text-neutral-content'>Job Duties</label>
                <div
                  className='text-[14px]'
                  dangerouslySetInnerHTML={getMarkdownText(data?.data?.data?.find((job: any, i: number) => i === index).attributes?.job_duties)}
                ></div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>your not logged in</div>
      )}
    </div>
  );
}
