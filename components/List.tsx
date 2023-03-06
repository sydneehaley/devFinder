'use client';

import { useEffect, useState } from 'react';
import { marked } from 'marked';
import { useCurrentUser } from '../hooks/auth/useCurrentUser';
import { EnvelopeIcon } from '@heroicons/react/24/solid';
import Searchbar from './Searchbar';

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
    <div className='w-full h-[85%] flex flex-col items-center justify-center'>
      <Searchbar />
      <div className='w-full mt-[4rem] flex flex-col items-center justify-center'>
        <div className='w-[90%]'>
          <p className='mb-[3rem] text-[20px] font-bold tracking-[-0.3px]'> Featured jobs</p>
          <div className='w-full grid grid-cols-4 gap-[2rem] h-full rounded-xl  mt-[3rem]'>
            <ul className='grid col-span-3 gap-y-[3rem] list-none h-full  rounded-l-xl '>
              {jobs?.map((job: any, i: any) => (
                <li className='w-full h-full border border-gray-300 rounded-xl flex items-center py-[2rem] justify-center h-full cursor-pointer'>
                  <div className='leading-[1.75rem] w-[93%]'>
                    <h6 className='text-[16px] font-bold leading-[3rem]'>{job?.attributes.job_title}</h6>
                    <h6 className='text-[14px] font-medium'>{job?.attributes.company_id.data?.attributes?.company_name}</h6>
                    <h6 className='text-[14px] font-medium'>{job?.attributes.location}</h6>
                    <p className='text-[14px] mt-[2rem] h-[5vh] overflow-hidden w-[60%] '>{job?.attributes.description}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div>
              <div className='border border-gray-300 rounded-xl h-[40vh] flex items-center justify-center'>
                <div className='w-[90%] flex flex-col items-start justify-start'>
                  <div className='bg-accent p-[1rem] rounded-xl mb-[1rem]'>
                    <EnvelopeIcon className='w-7 h-7 ' />
                  </div>
                  <h5 className='font-semibold text-[15px] leading-[3rem]'>Subscribe for updates</h5>
                  <p className='text-[14px] font-regular'>Subscribe to our newsletter to get our latest job postings directly in your inbox.</p>
                  <form className='w-full flex flex-col mt-[2rem]'>
                    <input className='w-full border rounded-lg p-[1rem]'></input>
                    <button className='bg-base-content text-white p-[1rem] mt-[1rem] text-[14px] font-semibold rounded-lg'>Subscribe</button>
                  </form>
                </div>
              </div>

              <div className='mt-[2rem]'>
                <div className='flex flex-col items-start justify-center'>
                  <h5 className='font-bold text-[15px] leading-[5rem]'>Popular careers</h5>
                  <div className='flex flex-wrap gap-[0.5rem]'>
                    <button className='bg-gray-100 p-[1rem] text-base rounded-full font-medium '>Software Engineer</button>
                    <button className='bg-gray-100 p-[1rem] text-base rounded-full font-medium '>Cloud Engineer</button>
                    <button className='bg-gray-100 p-[1rem] text-base rounded-full font-medium '>UX Designer</button>
                    <button className='bg-gray-100 p-[1rem] text-base rounded-full font-medium '>UX Designer</button>
                    <button className='bg-gray-100 p-[1rem] text-base rounded-full font-medium '>Lead React UI Developer</button>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className='grid col-span-1 border bg-white border-base-content border-[3px] p-[3rem] overflow-auto'>
              <div>
                <div className='mb-[4rem]'>
                  <h1 className='text-[30px] font-regular text-base-content leading-[5rem]'>{currentJob?.attributes.job_title}</h1>
                  <h6 className='text-[14px] font-regular text-base-content leading-[2rem]'>
                    {currentJob?.attributes.company_id?.data?.attributes?.company_name}
                  </h6>
                  <h6 className='text-[14px] font-regular  leading-[2rem]'>{currentJob?.attributes.location}</h6>
                  <button className='bg-primary  text-neutral font-semibold hover:bg-primary-focus text-[16px] h-[4rem] w-[8rem] rounded-full mt-[3rem]'>
                    Apply
                  </button>
                </div>
                <label className='text-[16px] font-medium leading-[3rem]'>Job Description</label>
                <p className='text-[14px]'>{currentJob?.attributes.description}</p>
                <br />
                <br />
                <br />
                <label className='text-[16px] font-medium leading-[3rem]'>Qualifications</label>
                <div
                  className='text-[14px] list-disc'
                  dangerouslySetInnerHTML={getMarkdownText(data?.data?.data?.find((job: any, i: number) => i === index).attributes?.qualifications)}
                ></div>
                <br /> <br />
                <label className='text-[16px] font-medium leading-[3rem] '>Job Duties</label>
                <div
                  className='text-[14px]'
                  dangerouslySetInnerHTML={getMarkdownText(data?.data?.data?.find((job: any, i: number) => i === index).attributes?.job_duties)}
                ></div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
