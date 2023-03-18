'use client';
import { MagnifyingGlassIcon, MapPinIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import { BsCaretDownFill } from 'react-icons/bs';

export default function Searchbar() {
  const buttons = [
    { label: 'Full-time' },
    { label: 'Remote' },
    { label: 'Date posted' },
    { label: 'Salary range' },
    { label: 'Permanent' },
    { label: 'Entry level' },
    // { label: 'Urgent hire' },
    // { label: 'International' },
    { label: 'Volunteer' },
  ];
  return (
    <div className='w-full h-[7vh] border-b   flex flex-col'>
      <form className='w-full h-[7vh]'>
        {/* <div className='w-full h-[65%] flex items-center justify-center border-b'>
          <div className='w-[40%] border border-neutral rounded-full h-[5vh] flex items-center justify-between p-[1rem]'>
            <div className='w-[50%] flex bg-transparent  w-full border-r  font-regular'>
              <div className='w-full flex ml-[1rem]'>
                <button className='rounded-full h-[3vh]  flex items-center justify-center'>
                  <MagnifyingGlassIcon className='h-7 w-7  mr-[0.5rem] dark:text-base-100/50' />
                </button>
                <input
                  placeholder='Search by job title or keyword'
                  className='placeholder:text-[17px] placeholder:text-neutral/80  placeholder:font-black placeholder:w-full placeholder:ml-[2rem] w-full bg-transparent outline-0 pl-[0.2rem] text-[16px]'
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
                  className='placeholder:text-[14px] placeholder:text-neutral-600 placeholder:font-semibold placeholder:ml-[1rem] w-full  bg-transparent outline-0 pl-[0.2rem] text-[16px]'
                />
              </div>
            </div>
            <button className='rounded-full bg-success w-[5%] text-[16px] font-semibold ml-[1rem] flex items-center justify-center h-[4vh] h-[4vh]'>
              <MagnifyingGlassIcon className='w-6 h-6 text-base-100 stroke-[3px]' />
            </button>
          </div>
        </div> */}
        <div className='w-full h-full flex items-center justify-center'>
          <div className='w-[82%] flex items-center justify-center gap-[1rem] '>
            {buttons.map((button, i) => {
              return (
                <button key={i} className='border border-neutral/40  rounded-full  py-[8px] px-[16px]  h-[4vh] font-medium text-[17px] flex items-center justify-start'>
                  {button.label} <BsCaretDownFill className='ml-[1rem] h-4 w-4' />
                </button>
              );
            })}
          </div>
        </div>
      </form>
    </div>
  );
}
