'use client';
import { useState } from 'react';
import { GlobeAltIcon, BanknotesIcon, BuildingOffice2Icon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

export default function Pagination(data: any) {
  const itemsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(1);
  const [index, setIndex] = useState(0);

  // calculate the index of the first and last items to display on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  // slice the array to get the items to display on the current page
  const currentItems = data?.data?.slice(indexOfFirstItem, indexOfLastItem);

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
      <ul className='flex flex-col list-none gap-y-[1rem] rounded-l-xl'>
        {currentItems.map((job: any, i: any) => (
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
                    <button className='border border-gray-300 rounded-full px-[18px] py-[8px] max-w-[200px] font-medium text-[13px] flex items-center justify-center mr-[8px]'>
                      <GlobeAltIcon className='w-6 h-6  mr-[0.5rem] stroke-[1px]' /> Remote
                    </button>
                  ) : null}
                  {job?.attributes.salary ? (
                    <button className='border border-gray-300 rounded-full px-[18px] py-[8px] max-w-[200px] font-medium text-[13px] flex items-center justify-center mr-[8px]'>
                      <BanknotesIcon className='w-6 h-6 mr-[0.5rem] stroke-[1px]' /> {job?.attributes.salary}
                    </button>
                  ) : null}
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>

      {/* display the pagination controls */}
      <nav className='w-full flex items-center justify-center'>
        <div className='w-[90%] flex items-center justify-between'>
          <div className='w-[10%] flex items-center justify-center'>
            <ChevronLeftIcon className='w-6 h-5' />
          </div>
          <ul className='w-[40%] h-[9vh] flex items-center justify-between'>
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
          <div className='w-[10%] flex items-center justify-center'>
            <ChevronRightIcon className='w-6 h-5' />
          </div>
        </div>
      </nav>
    </div>
  );
}
