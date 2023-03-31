'use client';

import { useEffect, useState, CSSProperties } from 'react';
import { marked } from 'marked';
import { useCurrentUser } from '../hooks/auth/useCurrentUser';
import { GlobeAltIcon, BanknotesIcon, BuildingOffice2Icon, AdjustmentsVerticalIcon, ArrowsUpDownIcon } from '@heroicons/react/24/outline';
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
  }, [jobs]);

  console.log(data?.data?.data.map((job: any) => job.id));

  return (
    <div className='w-full'>
      <Searchbar />
      <div className='w-full h-[92vh] flex relative'>
        <div className='w-[25vw] bg-base-200/30 flex flex-col items-center justify-center fixed top-[15vh] border-r'>
          <div className='w-full pb-[7rem] px-[3rem] h-[92vh] overflow-scroll'>
            {/* Section */}

            <div className='w-full flex mb-[1rem] h-[15vh] items-center justify-start'>
              <div className='w-[60%] flex flex-col items-start justify-center'>
                <h6 className='text-2xl leading-[3rem] font-medium text-neutral-800'>Jobs</h6>
                <p className='text-body'>Showing 6 results</p>
              </div>
              <div className='w-[40%] h-[15vh] flex items-center justify-end font-medium'>
                <button className='flex w-[40%] text-[14px]'>
                  <ArrowsUpDownIcon className='h-6 w-6 stroke-[2px] text-currentColor mr-[0.5rem]' /> Sort
                </button>
                {/* <button className='flex w-[40%]'>
                  <AdjustmentsVerticalIcon className='h-6 w-6 stroke-[2px] text-currentColor mr-[0.5rem]' />
                  Filter
                </button> */}
              </div>
            </div>
            {/* Section */}
            <ul className='flex flex-col list-none gap-y-[1rem] rounded-l-xl'>
              {jobs?.map((job: any, i: any) => (
                <li
                  key={job?.id}
                  onClick={() => setIndex(i)}
                  className={`w-full h-full py-[3rem]  bg-base-100   border hover:border-neutral/40 last:mb-[1rem] rounded-xl flex items-center  justify-center h-full cursor-pointer ${
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
            {/* Section */}
            <div className='w-full flex items-center justify-center'>
              <Pagination data={data.data.data} />
            </div>
          </div>
        </div>

        <div className='w-[75vw] relative left-[25vw] top-0  h-[92vh] text-body overflow-scroll'>
          <div className='grid grid-cols-9 mb-[7rem]'>
            <div className='col-start-1 col-span-7 bg-base-100 mt-[4rem] ml-[2rem] rounded-lg p-[4rem]'>
              {data?.data?.data
                ?.filter((job: any, i: number) => i === index)
                .map((job: any) => (
                  <div key={job?.id}>
                    <div className='mb-[2rem]'>
                      <div className='mb-[2rem]'>
                        <h1 className='text-[24px] font-regular tracking-[-0.3px] leading-[3rem]'>{job?.attributes.job_title}</h1>
                        <h3 className='text-[18px] font-regular text-neutral/70'>{`${job?.attributes.location}`}</h3>
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

                      <div className='border-t border-b flex py-[2rem] mb-[3rem]'>
                        <div className='w-[14.5rem] flex items-center justify-between'>
                          <button className='border border-gray-300 rounded-full  py-[8px] px-[16px]  h-[5vh] font-medium text-[16px] flex items-center justify-start'>
                            Apply
                          </button>
                          <button className='border border-gray-300 rounded-full  py-[8px] px-[16px]  h-[5vh] font-medium text-[16px] flex items-center justify-start'>
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

const itemsPerPage = 2;

const Pagination = (data: any) => {
  const [currentPage, setCurrentPage] = useState(1);
  console.log(data.data.map((job: any) => job.id));
  // calculate the index of the first and last items to display on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  // slice the array to get the items to display on the current page
  const currentItems = data?.data.slice(indexOfFirstItem, indexOfLastItem);

  // calculate the total number of pages
  const totalPages = Math.ceil(data?.data.length / itemsPerPage);

  // generate an array of page numbers to display in the pagination controls
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      {/* display the current page's items */}
      <ul>
        {currentItems.map((item: any) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>

      {/* display the pagination controls */}
      <nav className='w-full flex items-center justify-center'>
        <ul className='w-[90%] h-[9vh] flex items-center justify-center'>
          {pageNumbers.map((number) => (
            <li key={number}>
              <button
                className='w-[4rem] h-[4rem] rounded-full bg-neutral text-base-100 font-medium text-body'
                onClick={() => setCurrentPage(number)}
              >
                {number}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
