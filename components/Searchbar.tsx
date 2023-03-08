'use client';
import { MagnifyingGlassIcon, MapPinIcon, ChevronDownIcon } from '@heroicons/react/24/outline';

export default function Searchbar() {
  return (
    <div className='w-full h-[17vh] shadow-b shadow-lg dark:border-base-100/10 flex flex-col items-center justify-start'>
      <div className='w-[80%]'>
        {/* <h6 className='text-3xl font-semibold mb-[3rem] tracking-[-1px] text-left'>Find an awesome job...</h6> */}
        <form className='w-full flex flex-col justify-between'>
          <div className='flex w-full'>
            <div className='w-[98%] border border-gray-300 shadow-md dark:border-base-100/10 rounded-full h-[8vh] flex items-center justify-between p-[1rem]'>
              <div className='w-[50%] flex bg-transparent  w-full border-r dark:border-base-100/10 font-regular'>
                <div className='w-full flex ml-[1rem]'>
                  <button className='rounded-full h-[4vh] h-[7vh] flex items-center justify-center'>
                    <MagnifyingGlassIcon className='h-7 w-7  mr-[0.5rem] dark:text-base-100/50' />
                  </button>
                  <input
                    placeholder='Search by job title or keyword'
                    className='placeholder:text-[14px]  dark:placeholder:text-base-100/50 placeholder:font-semibold placeholder:w-full placeholder:ml-[2rem] w-full bg-transparent outline-0 pl-[0.2rem] text-[16px]'
                  />
                </div>
              </div>
              <div className='w-[50%] flex bg-transparent w-full font-regular'>
                <div className='flex items-center'>
                  <button className='rounded-full  h-[4vh] w-[4vh] flex items-center justify-center'>
                    <MapPinIcon className='h-7 w-7 ml-[1rem] mr-[0.5rem] dark:text-base-100/50' />
                  </button>
                  <input
                    placeholder='Location'
                    className='placeholder:text-[14px] dark:placeholder:text-base-100/50 placeholder:font-semibold placeholder:ml-[1rem] w-full  bg-transparent outline-0 pl-[0.2rem] text-[16px]'
                  />
                </div>
              </div>
              <button className='rounded-full bg-success w-[5%] text-[16px] dark:text-base-content font-semibold ml-[1rem] flex items-center justify-center h-[6vh] h-[6vh]'>
                <MagnifyingGlassIcon className='w-6 h-6 text-base-100 stroke-[3px]' />
              </button>
            </div>
          </div>
          <div className='mt-[2rem] flex gap-[1rem]'>
            <button className='border border-gray-300 dark:border-base-100/10  rounded-full px-[18px] py-[8px] max-w-[200px] font-semibold text-[13px] flex items-center justify-center'>
              Full-time <ChevronDownIcon className='h-5 w-5 ml-[0.5rem] flex items-center justify-center' />
            </button>
            <button className='border border-gray-300 dark:border-base-100/10 rounded-full px-[18px] py-[8px] max-w-[200px] font-semibold text-[13px] flex items-center justify-center'>
              Remote <ChevronDownIcon className='h-5 w-5 ml-[0.5rem]  flex items-center justify-center' />
            </button>
            <button className='border border-gray-300 dark:border-base-100/10 rounded-full px-[18px] py-[8px] max-w-[200px] font-semibold text-[13px] flex items-center justify-center'>
              Date posted <ChevronDownIcon className='h-5 w-5 ml-[0.5rem] flex items-center justify-center' />
            </button>
            <button className='border border-gray-300 dark:border-base-100/10 rounded-full px-[18px] py-[8px] max-w-[200px] font-semibold text-[13px] flex items-center justify-center'>
              Salary range <ChevronDownIcon className='h-5 w-5 ml-[0.5rem]  flex items-center justify-center' />
            </button>
            <button className='border border-gray-300 dark:border-base-100/10 rounded-full px-[18px] py-[8px] max-w-[200px] font-semibold text-[13px] flex items-center justify-center'>
              Permanent <ChevronDownIcon className='h-5 w-5 ml-[0.5rem]  flex items-center justify-center' />
            </button>
            <button className='border border-gray-300 dark:border-base-100/10 rounded-full px-[18px] py-[8px] max-w-[200px] font-semibold text-[13px] flex items-center justify-center'>
              Entry level <ChevronDownIcon className='h-5 w-5 ml-[0.5rem]  flex items-center justify-center' />
            </button>
            <button className='border border-gray-300 dark:border-base-100/10 rounded-full px-[18px] py-[8px] max-w-[200px] font-semibold text-[13px] flex items-center justify-center'>
              Urgently hiring <ChevronDownIcon className='h-5 w-5 ml-[0.5rem]  flex items-center justify-center' />
            </button>
            <button className='border border-gray-300 dark:border-base-100/10 rounded-full px-[18px] py-[8px] max-w-[200px] font-semibold text-[13px] flex items-center justify-center'>
              International <ChevronDownIcon className='h-5 w-5 ml-[0.5rem]  flex items-center justify-center' />
            </button>
            <button className='border border-gray-300 dark:border-base-100/10 rounded-full px-[18px] py-[8px] max-w-[200px] font-semibold text-[13px] flex items-center justify-center'>
              Volunteer <ChevronDownIcon className='h-5 w-5 ml-[0.5rem]  flex items-center justify-center' />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
