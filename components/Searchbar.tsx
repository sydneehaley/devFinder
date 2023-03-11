'use client';
import { MagnifyingGlassIcon, MapPinIcon, ChevronDownIcon } from '@heroicons/react/24/outline';

export default function Searchbar() {
  const buttons = [
    { label: 'Full-time' },
    { label: 'Remote' },
    { label: 'Date posted' },
    { label: 'Salary range' },
    { label: 'Permanent' },
    { label: 'Entry level' },
    { label: 'Urgent hire' },
    { label: 'International' },
    { label: 'Volunteer' },
  ];
  return (
    <div className='w-full h-[11vh]  dark:border-base-100/10 flex flex-col items-center justify-start'>
      <div className='w-[80%]'>
        <form className='w-full'>
          {/* <div className='flex w-full'>
            <div className='w-[98%] border border-neutral-300 shadow-md dark:border-base-100/10 rounded-full h-[8vh] flex items-center justify-between p-[1rem]'>
              <div className='w-[50%] flex bg-transparent  w-full border-r dark:border-base-100/10 font-regular'>
                <div className='w-full flex ml-[1rem]'>
                  <button className='rounded-full h-[4vh] h-[7vh] flex items-center justify-center'>
                    <MagnifyingGlassIcon className='h-7 w-7  mr-[0.5rem] dark:text-base-100/50' />
                  </button>
                  <input
                    placeholder='Search by job title or keyword'
                    className='placeholder:text-[14px] placeholder:text-neutral-600 dark:placeholder:text-base-100/50 placeholder:font-semibold placeholder:w-full placeholder:ml-[2rem] w-full bg-transparent outline-0 pl-[0.2rem] text-[16px]'
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
                    className='placeholder:text-[14px] placeholder:text-neutral-600 dark:placeholder:text-base-100/50 placeholder:font-semibold placeholder:ml-[1rem] w-full  bg-transparent outline-0 pl-[0.2rem] text-[16px]'
                  />
                </div>
              </div>
              <button className='rounded-full bg-success w-[5%] text-[16px] dark:text-base-content font-semibold ml-[1rem] flex items-center justify-center h-[6vh] h-[6vh]'>
                <MagnifyingGlassIcon className='w-6 h-6 text-base-100 stroke-[3px]' />
              </button>
            </div> 
          </div> */}
          <div className='w-full h-[11vh] grid grid-cols-9 items-center gap-[1rem]'>
            {buttons.map((button, i) => {
              return (
                <button
                  key={i}
                  className='border border-neutral-300 dark:border-neutral-400/10   rounded-full px-[18px] py-[8px] max-w-[200px] max-h-[40px] font-medium text-[13px] flex items-center justify-center dark:text-neutral-400'
                >
                  {button.label} <ChevronDownIcon className='h-5 w-5 ml-[0.5rem] flex items-center justify-center dark:text-base-100/50' />
                </button>
              );
            })}
          </div>
        </form>
      </div>
    </div>
  );
}
