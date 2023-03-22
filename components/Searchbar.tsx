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
          </div>
        </div>
      </form>
    </div>
  );
}
