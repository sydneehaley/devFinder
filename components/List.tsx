'use client';

import { useEffect, useState } from 'react';
import { marked } from 'marked';
import { useCurrentUser } from '../hooks/auth/useCurrentUser';
import { GlobeAltIcon, BanknotesIcon, EnvelopeIcon, BuildingOffice2Icon, Bars3Icon } from '@heroicons/react/24/outline';
import Searchbar from './Searchbar';

export default function List(data: any) {
  const [index, setIndex] = useState(0);
  const [jobs, setJobs] = useState<Object[]>();
  // const [currentJob, setCurrentJob] = useState<any>();
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
    // setCurrentJob(data?.data?.data?.find((job: any, i: number) => i === index));
  }, [index, data]);

  const buttons = [{ label: 'Software Engineer' }, { label: 'Cloud Engineer' }, { label: 'UX Designer' }, { label: 'Lead React UI Developer' }];

  return (
    <div className='w-full h-[85%] flex flex-col items-center justify-center'>
      <Searchbar />
      <div className='w-full flex flex-col items-center justify-center'>
        <div className='w-[80%] flex items-center'>
          <div className='w-[70%]'>
            {/* <p className='mb-[1rem] text-[16px] font-semibold text-neutral-800 dark:text-base-100'>All jobs</p> */}
            <div className='w-full grid grid-cols-5 gap-[2rem] h-full rounded-xl  mt-[2rem]'>
              <ul className='grid col-span-3 gap-y-[2rem] list-none h-full  rounded-l-xl '>
                {jobs?.map((job: any, i: any) => (
                  <li
                    key={i}
                    className='w-full h-[30vh] border border-neutral-300 dark:border-neutral-400/10 dark:hover:bg-black/10 rounded-xl flex items-center  justify-center h-full cursor-pointer'
                  >
                    <div className='leading-[1.75rem] w-[92%] flex flex-col'>
                      <button className='h-[4rem] w-[4rem] rounded-full flex items-center justify-center  mr-[1.5rem] mt-[0.5rem]'>
                        <BuildingOffice2Icon className='h-9 w-9' />
                      </button>
                      <div className='mt-[1rem]'>
                        <div>
                          <h6 className='text-[16px] text-neutral-800 dark:text-neutral-400 font-semibold leading-[3rem]'>
                            {job?.attributes.job_title}
                          </h6>
                          <h6 className='text-[14px] font-regular'>{job?.attributes.company_id.data?.attributes?.company_name}</h6>
                          <h6 className='text-[14px] font-regular'>{job?.attributes.location}</h6>
                        </div>
                        {/* <p className='text-[14px] mt-[2rem] h-[5vh] overflow-hidden w-[60%] '>{job?.attributes.description}</p> */}
                        <div className='mt-[2rem] flex'>
                          {job?.attributes.remote ? (
                            <button className='border border-neutral-300 dark:border-base-100/10 dark:bg-black/10  rounded-full px-[18px] py-[8px] max-w-[200px] font-semibold text-[13px] flex items-center justify-center mr-[8px]'>
                              <GlobeAltIcon className='w-6 h-6 text-error-content mr-[0.5rem]' /> Remote
                            </button>
                          ) : null}
                          {job?.attributes.salary ? (
                            <button className='border border-neutral-300 dark:border-base-100/10 dark:bg-black/10  rounded-full px-[18px] py-[8px] max-w-[200px] font-semibold text-[13px] flex items-center justify-center mr-[8px]'>
                              <BanknotesIcon className='w-6 h-6 text-success mr-[0.5rem]' /> {job?.attributes.salary}
                            </button>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>

              <div className='col-span-2'>
                <div className='w-full shadow-md border border-neutral-300 dark:border-neutral-400/10 rounded-xl h-[40vh] flex items-center justify-center'>
                  <div className='w-[90%] flex flex-col items-start justify-start'>
                    <div className='border dark:border-neutral-400/10 p-[1rem] rounded-full flex items-center justify-center mb-[2rem]'>
                      <EnvelopeIcon className='w-7 h-7' />
                    </div>
                    <h5 className='font-semibold text-[16px] leading-[4rem] text-neutral-800 dark:text-neutral-400'>Subscribe for daily jobs</h5>
                    <p className='text-[14px] font-regular'>Subscribe to our newsletter to get our latest job postings directly in your inbox.</p>
                    <form className='w-full flex flex-col mt-[2rem]'>
                      <input className='w-full border rounded-lg p-[1rem] bg-transparent dark:border-base-100/10'></input>
                      <button className='bg-neutral-800 dark:bg-base-content/30 dark:text-neutral-300 p-[1rem] mt-[1rem] text-[14px] font-medium rounded-lg'>
                        Subscribe
                      </button>
                    </form>
                  </div>
                </div>

                <div className='mt-[2rem]'>
                  <div className='flex flex-col items-start justify-center'>
                    <h5 className='font-semibold text-neutral-800 dark:text-neutral-400 text-[15px] leading-[5rem]'>Popular careers</h5>
                    <div className='flex flex-wrap gap-[0.5rem]'>
                      {buttons.map((button, i) => {
                        return (
                          <button
                            key={i}
                            className='bg-neutral-100 text-neutral-800 dark:bg-base-content/30 dark:text-neutral-400 p-[1rem] text-base rounded-full font-semibold '
                          >
                            {button.label}
                          </button>
                        );
                      })}
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
    </div>
  );
}
