'use client';

import { useEffect, useState } from 'react';
import { marked } from 'marked';
import { useCurrentUser } from '../hooks/auth/useCurrentUser';
import { GlobeAltIcon, BanknotesIcon, EnvelopeIcon, BuildingOffice2Icon, Bars3Icon } from '@heroicons/react/24/outline';
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

  const buttons = [{ label: 'Software Engineer' }, { label: 'Cloud Engineer' }, { label: 'UX Designer' }, { label: 'Lead React UI Developer' }];

  return (
    <div className='w-full  flex flex-col items-center justify-center'>
      <Searchbar />
      <div className='w-full  flex flex-col items-center justify-center'>
        <div className='w-full flex items-center'>
          <div className='w-full grid grid-cols-12 grid-rows-2  h-full rounded-xl'>
            <div className='grid col-span-3 border-r px-[3rem] '>
              <div className='flex flex-col mb-[3rem]'>
                <h6 className=' mt-[3rem] text-2xl leading-[3rem] font-bold text-neutral-800'>Jobs</h6>
                <p className='text-body'>Showing 6 results</p>
              </div>
              <ul className='flex flex-col list-none h-full  gap-y-[1rem] rounded-l-xl '>
                {jobs?.map((job: any, i: any) => (
                  <li key={i} className='w-full h-[30vh]   border hover:border-neutral/40 rounded-xl flex items-center  justify-center h-full cursor-pointer'>
                    <div className='leading-[1.75rem] w-[84%] flex flex-col'>
                      <button className='bg-neutral-content/10 h-[4rem] w-[4rem] rounded-lg flex items-center justify-center  mr-[1.5rem] mt-[0.5rem]'>
                        <BuildingOffice2Icon className='h-9 w-9 stroke-[1px]' />
                      </button>
                      <div className='mt-[2rem]'>
                        <div>
                          <h6 className='text-[18px] text-neutral-700 font-semibold leading-[3rem]'>{job?.attributes.job_title}</h6>
                          <h6 className='text-body font-regular leading-[2rem]'>{job?.attributes.company_id.data?.attributes?.company_name}</h6>
                          <h6 className='text-body font-regular'>{job?.attributes.location}</h6>
                        </div>
                        {/* <p className='text-[14px] mt-[2rem] h-[5vh] overflow-hidden w-[60%] '>{job?.attributes.description}</p> */}
                        <div className='mt-[3rem] flex'>
                          {job?.attributes.remote ? (
                            <button className='border border-neutral/40 rounded-full px-[18px] py-[8px] max-w-[200px] font-bold text-[13px] flex items-center justify-center mr-[8px]'>
                              <GlobeAltIcon className='w-6 h-6  mr-[0.5rem] stroke-[1px]' /> Remote
                            </button>
                          ) : null}
                          {job?.attributes.salary ? (
                            <button className='border border-neutral/40 rounded-full px-[18px] py-[8px] max-w-[200px] font-bold text-[13px] flex items-center justify-center mr-[8px]'>
                              <BanknotesIcon className='w-6 h-6 mr-[0.5rem] stroke-[1px]' /> {job?.attributes.salary}
                            </button>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className='col-span-9 bg-base-200/50 text-body'>
              <div className='w-full flex items-center justify-center   p-[3rem] overflow-auto'>
                <div className='w-[80%] bg-white p-[3rem]  rounded-lg'>
                  <div className='mb-[4rem]'>
                    <h1 className='text-[36px] font-semibold   leading-[7rem]'>{currentJob?.attributes.job_title}</h1>
                    <h6 className='font-regular  leading-[2rem]'>{currentJob?.attributes.company_id?.data?.attributes?.company_name}</h6>
                    <h6 className='font-regular  leading-[2rem]'>{currentJob?.attributes.location}</h6>
                    <button className='border border-neutral/40 text-neutral font-semibold hover:bg-accent text-[18px] h-[4rem] w-[8rem] rounded-full mt-[3rem]'>Apply</button>
                  </div>
                  <label className='text-[19px] font-medium leading-[4rem]'>Job Description</label>
                  <p className='font-regular'>{currentJob?.attributes.description}</p>
                  <br />
                  <br />
                  <br />
                  <label className='text-[19px] font-medium leading-[4rem]'>Qualifications</label>
                  <div className='list-disc' dangerouslySetInnerHTML={getMarkdownText(data?.data?.data?.find((job: any, i: number) => i === index).attributes?.qualifications)}></div>
                  <br /> <br />
                  <label className='text-[19px] font-medium leading-[4rem] '>Job Duties</label>
                  <div className='' dangerouslySetInnerHTML={getMarkdownText(data?.data?.data?.find((job: any, i: number) => i === index).attributes?.job_duties)}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
