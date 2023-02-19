'use client';
import { useState } from 'react';
import { signOut } from './supabase-auth-signout';
import { Menu } from '@headlessui/react';
import { UserCircleIcon } from '@heroicons/react/24/solid';
import Signin from './Signin';

export default function DropdownMenu(session: any) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <Menu>
        <Menu.Button>
          <UserCircleIcon className='h-7 w-7 mr-[0.3rem] text-neutral-content/50' />
        </Menu.Button>
        <Menu.Items className='w-[13vw] absolute left-[79vw] border border-neutral-content/30 bg-neutral-focus flex flex-col rounded-md top-[10vh] text-neutral-content'>
          <div className='py-[0.5rem]'>
            <Menu.Item>
              {({ active }) => (
                <div className={`w-full flex items-center justify-center h-[5vh] ${active && 'hover:bg-neutral-content/10'}`}>
                  <button onClick={openModal} className='w-[85%] text-[14px] flex'>
                    Sign Up
                  </button>
                </div>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <div className={`w-full flex items-center justify-center h-[5vh]  ${active && 'hover:bg-neutral-content/10'}`}>
                  <button onClick={openModal} className='w-[85%] flex font-regular'>
                    Log in
                  </button>
                </div>
              )}
            </Menu.Item>
          </div>{' '}
          <div className='py-[0.5rem] border-t border-neutral-content/10 '>
            <Menu.Item>
              {({ active }) => (
                <div className={`w-full flex items-center justify-center h-[5vh] ${active && 'hover:bg-neutral-content/10'}`}>
                  <button className='w-[85%] flex font-regular'>Employers</button>
                </div>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <div className={`w-full flex items-center justify-center h-[5vh]  ${active && 'hover:bg-neutral-content/10'}`}>
                  <button className='w-[85%] flex font-regular'>Post A Job</button>
                </div>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <div className={`w-full flex items-center justify-center h-[5vh] ${active && 'hover:bg-neutral-content/10'}`}>
                  <a className='w-[85%] flex font-regular' href='/'>
                    Help
                  </a>
                </div>
              )}
            </Menu.Item>
          </div>
          {session && (
            <div className='py-[0.5rem] border-t border-neutral-content/10 '>
              <Menu.Item>
                {({ active }) => (
                  <div className={`w-full flex items-center justify-center h-[5vh] ${active && 'hover:bg-neutral-content/10'}`}>
                    <button onClick={signOut} className='w-[85%] flex font-regular'>
                      Sign out
                    </button>
                  </div>
                )}
              </Menu.Item>
            </div>
          )}
        </Menu.Items>
      </Menu>
      <Signin isOpen={isOpen} closeModal={closeModal} />
    </>
  );
}
