'use client';

import { useEffect, useState } from 'react';
import { marked } from 'marked';
import { useCurrentUser } from '../hooks/auth/useCurrentUser';
import { MagnifyingGlassIcon, MapPinIcon, ChevronDownIcon } from '@heroicons/react/24/outline';

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
    <div className='w-full h-[85%] flex flex-col items-start justify-start'>
      <div className='w-full h-[30vh] flex flex-col items-center justify-center'>
        <h6 className='text-[20px] font-regular text-white mb-[3rem]'>{` ${jobs?.length}  jobs in all locations in all categories in all job types`}</h6>
        <form className='w-[90%] flex items-center justify-between ml-[2rem] px-[0.75rem]'>
          <div className='w-[50%] flex items-center bg-neutral-focus/30 w-full border font-regular border-neutral-content/10 h-[5vh] rounded-full shadow-md'>
            <button className='rounded-full  h-[4vh] w-[4vh] flex items-center justify-center'>
              <MagnifyingGlassIcon className='h-7 w-7 ml-[1rem] text-neutral-content/20' />
            </button>
            <input
              placeholder='Search by title, salary, skill...'
              className='placeholder:font-theme placeholder:text-[15px] placeholder:text-white/40 w-full  bg-transparent outline-0 pl-[0.2rem]'
            />
          </div>
          <div className='w-[48%] flex items-center bg-neutral-focus/30 w-full border font-regular border-neutral-content/10 h-[5vh] rounded-full shadow-md'>
            <button className='rounded-full  h-[4vh] w-[4vh] flex items-center justify-center'>
              <MapPinIcon className='h-7 w-7 ml-[1rem] text-neutral-content/20' />
            </button>
            <input
              placeholder='City, state, or zip code'
              className='placeholder:font-theme placeholder:text-[15px] placeholder:text-white/40 w-full bg-transparent outline-0 pl-[0.2rem]'
            />
          </div>
        </form>
      </div>

      <div className='w-full grid grid-cols-2 h-[71vh] rounded-xl border border-neutral-content/10'>
        <ul className='grid col-span-1 list-none overflow-auto h-full divide-y-[1px] divide-neutral-content/10 p-0 m-0 child:shadow-sm rounded-l-xl '>
          {jobs?.map((job: any, i: any) => (
            <li
              className={`w-full flex items-center py-[2rem] justify-center h-full cursor-pointer ${i === index ? 'bg-neutral-focus' : null} ${
                i === 0 ? 'rounded-tl-xl' : null
              }`}
              key={job?.id}
              onClick={() => setIndex(i)}
            >
              <div className='leading-[1.75rem] h-[13vh] w-[93%]'>
                <h6 className='text-[18px] font-medium text-neutral-content leading-[3rem]'>{job?.attributes.job_title}</h6>
                <h6 className='text-[14px] text-neutral-content/50 '>{job?.attributes.company_id.data?.attributes?.company_name}</h6>
                <h6 className='text-[14px] text-neutral-content/50'>{job?.attributes.location}</h6>
                <h6 className='text-[13px] text-green-500 font-medium leading-[4rem] text-primary-focus'>5 Hours Ago</h6>
              </div>
            </li>
          ))}
        </ul>

        <div className='grid col-span-1 border-l border-neutral-content/10 p-[3rem] overflow-auto'>
          <div>
            <div className='mb-[4rem]'>
              <h1 className='text-[30px] font-regular text-neutral-content leading-[5rem]'>{currentJob?.attributes.job_title}</h1>
              <h6 className='text-[14px] font-regular text-neutral-content leading-[2rem]'>
                {currentJob?.attributes.company_id?.data?.attributes?.company_name}
              </h6>
              <h6 className='text-[14px] font-regular text-neutral-content leading-[2rem]'>{currentJob?.attributes.location}</h6>
              <button className='bg-primary  text-neutral font-semibold hover:bg-primary-focus text-[16px] h-[4rem] w-[8rem] rounded-full mt-[3rem]'>
                Apply
              </button>
            </div>
            <label className='text-[16px] font-medium leading-[3rem] text-neutral-content'>Job Description</label>
            <p className='text-[14px]'>{currentJob?.attributes.description}</p>
            <br />
            <br />
            <br />
            <label className='text-[16px] font-medium leading-[3rem] text-neutral-content'>Qualifications</label>
            <div
              className='text-[14px] list-disc'
              dangerouslySetInnerHTML={getMarkdownText(data?.data?.data?.find((job: any, i: number) => i === index).attributes?.qualifications)}
            ></div>
            <br /> <br />
            <label className='text-[16px] font-medium leading-[3rem] text-neutral-content'>Job Duties</label>
            <div
              className='text-[14px]'
              dangerouslySetInnerHTML={getMarkdownText(data?.data?.data?.find((job: any, i: number) => i === index).attributes?.job_duties)}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
