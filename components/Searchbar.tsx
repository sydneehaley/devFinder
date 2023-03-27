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
<<<<<<< HEAD
    <div className='w-full bg-base-100 h-[7vh] sticky top-[8vh] z-50  border-b  flex flex-col'>
      <form className='w-full h-[7vh]'>
        <div className='w-full h-full flex items-center justify-center'>
          <div className='w-[82%] flex items-center justify-center gap-[1rem] '>
            {buttons.map((button, i) => {
              return (
                <button key={i} className='border border-neutral/40  rounded-full  py-[8px] px-[16px]  h-[4vh] font-medium text-[17px] flex items-center justify-start'>
                  {button.label} <BsCaretDownFill className='ml-[1rem] h-4 w-4' />
                </button>
              );
            })}
=======
    <div className='w-[80%] fixed top-[85vh] bg-[#0F0F0F] shadow-lg rounded-full h-[10vh] dark:border-base-100/10 flex flex-col items-center justify-center'>
      <div className='w-[95%] '>
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
          <div className='flex'>
            <div className='w-full grid grid-cols-7 items-center gap-[1rem]'>
              {buttons.map((button, i) => {
                return (
                  <button
                    key={i}
                    className='border border-[1.5px] border-neutral-700 dark:border-neutral-400/10 text-neutral-700   rounded-full px-[18px] py-[8px]  max-h-[40px] font-medium text-[15px] flex items-center justify-center dark:text-neutral-400'
                  >
                    {button.label}{' '}
                    <ChevronDownIcon className='h-5 w-5 ml-[0.5rem] flex items-center text-neutral-700 justify-center dark:text-base-100/50' />
                  </button>
                );
              })}
            </div>
>>>>>>> 36ade5e (general ui updates)
          </div>
        </div>
      </form>
    </div>
  );
}
