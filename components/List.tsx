'use client';

import { useEffect, useState, CSSProperties } from 'react';
import { marked } from 'marked';
import { useCurrentUser } from '../hooks/auth/useCurrentUser';
import { GlobeAltIcon, BanknotesIcon, BuildingOffice2Icon } from '@heroicons/react/24/outline';
import ScaleLoader from 'react-spinners/ScaleLoader';
import Searchbar from './Searchbar';

export default function List(data: any) {
  const [index, setIndex] = useState(0);
  const [jobs, setJobs] = useState<Object[]>();
  const [currentJob, setCurrentJob] = useState<any>();

  const { user: currentUser } = useCurrentUser();
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState('neutral');

  const override: CSSProperties = {
    display: 'block',
    margin: '0 auto',
    borderColor: 'red',
  };

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
    console.count('counter');
  }, []);

  console.log(data?.data?.data);

  return (
    <div className='w-full flex flex-col'>
      <Searchbar />
      <div className='w-full flex relative z-0'>
        <div className='w-[25vw] bg-base-200/30 absolute top-0 h-full border-r px-[3rem] pb-[5rem] overflow-scroll'>
          <div className='flex flex-col mb-[3rem]'>
            <h6 className=' mt-[3rem] text-2xl leading-[3rem] font-medium text-neutral-800'>Jobs</h6>
            <p className='text-body'>Showing 6 results</p>
          </div>
          <ul className='flex flex-col list-none h-full gap-y-[1rem] rounded-l-xl pb-[3rem]'>
            {jobs?.map((job: any, i: any) => (
              <li
                key={job?.id}
                onClick={() => setIndex(i)}
                className={`w-full h-full py-[3rem]  bg-base-100  hover:border hover:border-[3px] hover:border-neutral/40  rounded-xl flex items-center  justify-center h-full cursor-pointer ${
                  index === job?.id ? 'border-neutral/40' : null
                }`}
              >
                <div className='leading-[1.75rem] w-[84%] flex flex-col'>
                  <button className='bg-neutral-content/10 h-[4rem] w-[4rem] rounded-lg flex items-center justify-center  mr-[1.5rem] mt-[0.5rem]'>
                    <BuildingOffice2Icon className='h-9 w-9 stroke-[1px]' />
                  </button>
                  <div className='mt-[2rem]'>
                    <div>
                      <h6 className='text-[18px] text-neutral-700 font-medium leading-[3rem]'>{job?.attributes.job_title}</h6>
                      <h6 className='text-body font-regular leading-[2rem]'>{job?.attributes.company_id.data?.attributes?.company_name}</h6>
                      <h6 className='text-body font-regular'>{job?.attributes.location}</h6>
                    </div>

                    <div className='mt-[3rem] flex'>
                      {job?.attributes.remote ? (
                        <button className='border border-neutral/40 rounded-full px-[18px] py-[8px] max-w-[200px] font-medium text-[13px] flex items-center justify-center mr-[8px]'>
                          <GlobeAltIcon className='w-6 h-6  mr-[0.5rem] stroke-[1px]' /> Remote
                        </button>
                      ) : null}
                      {job?.attributes.salary ? (
                        <button className='border border-neutral/40 rounded-full px-[18px] py-[8px] max-w-[200px] font-medium text-[13px] flex items-center justify-center mr-[8px]'>
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

        <div className='w-[75vw] relative left-[25vw] top-0  h-[85vh] text-body overflow-scroll'>
          <div className='grid grid-cols-9 '>
            <div className='col-start-1 col-span-7 bg-base-100 m-[2rem] rounded-lg p-[5rem]'>
              {data?.data?.data
                ?.filter((job: any, i: number) => i === index)
                .map((job: any) => (
                  <div key={job?.id}>
                    <div className='mb-[2rem]'>
                      <div className='mb-[2rem]'>
                        <h1 className='text-[24px] font-medium tracking-[-0.3px] leading-[3rem]'>{job?.attributes.job_title}</h1>
                        <h3 className='text-[18px] font-medium text-neutral/70'>{`${job?.attributes.salary}`}</h3>
                      </div>

                      <div className='flex items-center py-[2rem] border-t'>
                        <div className='bg-warning/20 rounded-lg w-[5rem] h-[5rem] flex items-center justify-center mr-[1rem]'>
                          <BuildingOffice2Icon className='h-9 w-9 stroke-[1px]' />
                        </div>
                        <div className='flex flex-col'>
                          <h6 className='font-medium text-[16px] leading-[2rem]'>{job?.attributes.company_id.data.attributes.company_name}</h6>
                          <h6 className='font-medium text-[15px] leading-[2rem] text-neutral/60'>Branding experiences and radical collaboration</h6>
                        </div>
                      </div>

                      <div className='border-t border-b flex py-[1rem] mb-[3rem]'>
                        <div className='w-[14.5rem] flex items-center justify-between'>
                          <button className='border border-neutral/40  rounded-full  py-[8px] px-[16px]  h-[4vh] font-medium text-[16px] flex items-center justify-start'>
                            Apply
                          </button>
                          <button className='border border-neutral/40  rounded-full  py-[8px] px-[16px]  h-[4vh] font-medium text-[16px] flex items-center justify-start'>
                            Report
                          </button>
                        </div>
                      </div>
                    </div>

                    <p className='font-regular text-[15px]'>{job?.attributes.description}</p>
                    <br />
                    <label className='text-body font-medium leading-[2rem]'>Qualifications</label>
                    <div
                      className='list-disc font-regular text-[15px]'
                      dangerouslySetInnerHTML={getMarkdownText(job?.attributes?.qualifications)}
                    ></div>
                    <br />
                    <label className='text-body font-medium leading-[2rem] '>Job Duties</label>
                    <div className='list-disc font-regular text-[15px]' dangerouslySetInnerHTML={getMarkdownText(job?.attributes?.job_duties)}></div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
