'use client';

import { Fragment, useEffect, useState } from 'react';
import { ChevronDownIcon, MagnifyingGlassIcon, MapPinIcon, Bars3Icon, Squares2X2Icon } from '@heroicons/react/24/outline';
import { signOut } from './supabase-auth-signout';
import { Transition, Dialog } from '@headlessui/react';
import Logo from './Logo';
import { useSupabase } from './supabase-provider';
import { location } from '../app/location';
import { Menu } from '@headlessui/react';
import { GlobeAltIcon, BriefcaseIcon, ChatBubbleBottomCenterTextIcon, BellIcon, UserCircleIcon } from '@heroicons/react/24/solid';

export default function Navbar(session: any) {
  const [user, setUser] = useState({ email: '', password: '' });
  const [cityData, setCityData] = useState<any>(null);
  const [city, setCity] = useState<any>(null);
  const { email, password } = user;
  const [isOpen, setIsOpen] = useState(false);
  let [rememberUser, setRememberUser] = useState(false);
  const { supabase } = useSupabase();

  useEffect(() => {
    if ('geolocation' in navigator) {
      console.log('Available');
      navigator.geolocation.getCurrentPosition(function (position) {
        console.log('Latitude is :', position.coords.latitude);
        console.log('Longitude is :', position.coords.longitude);

        location(position.coords.latitude, position.coords.longitude).then((res) => {
          console.log(res.features[0].properties);
          setCityData(res.features[0].properties);
          setCity(res.features[0].properties.city);
        });
      });
    }
  }, [city]);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const handleOnChange = (e: any) => {
    e.preventDefault;
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const signInCredential = async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });
    console.log({ data, error });
  };

  const signUpCredential = async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
    });
    console.log({ data, error });
  };

  const signIn = (e: any) => {
    e.preventDefault();
    signInCredential(email, password);
  };

  const signUp = (e: any) => {
    e.preventDefault();
    signUpCredential(email, password);
  };

  return (
    <div className='w-full h-[9vh] bg-neutral border-b border-neutral-content/10 flex justify-center items-center antialiased text-white'>
      <div className='w-[80%] flex justify-center items-center'>
        <div className='w-full flex'>
          <div className='font-sans font-bold w-[50%]'>
            <div className='w-full flex items-center justify-start h-[9vh]'>
              <div className='flex items-center'>
                <svg id='logo-73' width='45' height='40' viewBox='0 0 60 40' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M56.25 1.25C56.25 1.94036 56.8096 2.5 57.5 2.5H58.75C59.4404 2.5 60 1.94036 60 1.25C60 0.559648 59.4404 3.49691e-06 58.75 3.49691e-06H57.5C56.8096 3.49691e-06 56.25 0.559648 56.25 1.25Z'
                    className='ccustom'
                    fill='#212326'
                  ></path>
                  <path
                    d='M20 40H26.0723L24.3045 38.2322C23.8357 37.7634 23.1998 37.5 22.5368 37.5H20C10.335 37.5 2.5 29.665 2.5 20C2.5 10.335 10.335 2.50001 20 2.5L40 2.5C49.665 2.5 57.5 10.335 57.5 20C57.5 29.665 49.665 37.5 40 37.5H32.5184C31.5238 37.5 30.57 37.1049 29.8667 36.4017L27.7957 34.3306C26.6236 33.1585 25.0338 32.5 23.3762 32.5H20C13.0964 32.5 7.5 26.9036 7.5 20C7.5 13.0964 13.0964 7.5 20 7.5L40 7.5C46.9036 7.5 52.5 13.0964 52.5 20C52.5 26.9036 46.9036 32.5 40 32.5H35.1961C34.2015 32.5 33.2477 32.1049 32.5444 31.4017L30.4733 29.3306C29.3012 28.1585 27.7115 27.5 26.0539 27.5H20C15.8579 27.5 12.5 24.1421 12.5 20C12.5 15.8579 15.8579 12.5 20 12.5L40 12.5C44.1421 12.5 47.5 15.8579 47.5 20C47.5 24.0916 44.2235 27.418 40.1512 27.4985L40.1504 27.5H38.3211C37.3265 27.5 36.3727 27.1049 35.6694 26.4017L33.5983 24.3306C32.6366 23.3688 31.3937 22.7529 30.0628 22.5628L30 22.5L20 22.5C18.6193 22.5 17.5 21.3807 17.5 20C17.5 18.6193 18.6193 17.5 20 17.5L40 17.5C41.3807 17.5 42.5 18.6193 42.5 20C42.5 21.3807 41.3807 22.5 40 22.5H35L36.7678 24.2678C37.2366 24.7366 37.8725 25 38.5355 25H40C42.7614 25 45 22.7614 45 20C45 17.2386 42.7614 15 40 15L20 15C17.2386 15 15 17.2386 15 20C15 22.7614 17.2386 25 20 25L29.1789 25C30.1735 25 31.1273 25.3951 31.8306 26.0983L33.9017 28.1694C35.0738 29.3415 36.6635 30 38.3211 30H40.625V29.9808C45.8567 29.6582 50 25.3129 50 20C50 14.4772 45.5228 10 40 10L20 10C14.4772 10 10 14.4772 10 20C10 25.5229 14.4772 30 20 30H26.0539C27.0485 30 28.0023 30.3951 28.7056 31.0983L30.7767 33.1694C31.9488 34.3415 33.5385 35 35.1961 35H40C48.2843 35 55 28.2843 55 20C55 11.7157 48.2843 5 40 5L20 5C11.7157 5 5 11.7157 5 20C5 28.2843 11.7157 35 20 35H23.3762C24.3708 35 25.3246 35.3951 26.0279 36.0983L28.099 38.1694C29.2711 39.3415 30.8608 40 32.5184 40H40C51.0457 40 60 31.0457 60 20C60 8.9543 51.0457 -9.65645e-07 40 0L20 4.13264e-06C8.9543 5.09829e-06 -9.65645e-07 8.95431 0 20C9.65645e-07 31.0457 8.95431 40 20 40Z'
                    className='ccustom'
                    fill='#22c55e'
                  ></path>
                </svg>
                {/* <p className='text-[16px] ml-4'>devFinder</p> */}
              </div>
              <form className='w-[90%] flex items-center justify-between ml-[2rem] px-[0.75rem]'>
                <div className='w-[50%] flex items-center bg-neutral-focus/30 w-full border font-regular border-neutral-content/10 h-[5vh] rounded-full shadow-md'>
                  <button className='rounded-full  h-[4vh] w-[4vh] flex items-center justify-center'>
                    <MagnifyingGlassIcon className='h-6 w-6 text-neutral-content/20' />
                  </button>
                  <input
                    placeholder='Search by title, salary, skill...'
                    className='placeholder:text-[13px] placeholder:text-white/40  bg-transparent outline-0 pl-[0.2rem]'
                  />
                </div>
                <div className='w-[48%] flex items-center bg-neutral-focus/30 w-full border font-regular border-neutral-content/10 h-[5vh] rounded-full shadow-md'>
                  <button className='rounded-full  h-[4vh] w-[4vh] flex items-center justify-center'>
                    <MapPinIcon className='h-6 w-6 text-neutral-content/20' />
                  </button>
                  <input
                    placeholder='City, state, or zip code'
                    className='placeholder:text-[13px] placeholder:text-white/40  bg-transparent outline-0 pl-[0.2rem]'
                  />
                </div>
              </form>
            </div>
          </div>
          {/* <div className='w-[33.3%] flex items-center justify-center'>
            <form className='w-full border border-neutral-content/30 bg-neutral-focus h-[5vh] rounded-lg flex items-center justify-center'>
              <button className='rounded-full  h-[4vh] w-[4vh] flex items-center justify-center'>
                <MagnifyingGlassIcon className='h-6 w-6 text-white' />
              </button>
              <input placeholder='Search...' className='w-[90%] placeholder:text-[14px] placeholder:text-white/40' />
            </form>
          </div> */}
          <div className='w-[50%] h-[9vh] flex items-center justify-end text-neutral-content/20'>
            <ul className='w-[55%] flex items-center justify-between font-medium text-[14px]'>
              {/* <li className='flex items-center flex items-center text-neutral-content/50'>
                <ChatBubbleBottomCenterTextIcon className='h-7 w-7 mr-[0.5rem]' />
              </li>
              <li className='flex items-center flex items-center text-neutral-content/50'>
                <BellIcon className='h-7 w-7 mr-[0.5rem]' />
              </li> */}
              <li className='flex flex w-[20vw] h-[9vh] flex items-center justify-center text-neutral-content/50  h-[5vh]'>
                <GlobeAltIcon className='h-7 w-7 mr-[1rem]' />
                {city === null ? 'Finding you...' : city}
              </li>
              <li className='flex w-[10vw] h-[9vh] items-center flex items-center justify-center border-l border-neutral-content/10'>
                <Menu>
                  <Menu.Button>
                    <UserCircleIcon className='h-7 w-7 mr-[0.3rem] text-neutral-content/50' />
                  </Menu.Button>
                  <Menu.Items className='w-[13vw] absolute left-[83vw] border border-neutral-content/30 bg-neutral-focus flex flex-col rounded-md top-[10vh] text-neutral-content'>
                    <div className='py-[0.5rem]'>
                      <Menu.Item>
                        {({ active }) => (
                          <div className={`w-full flex items-center justify-center h-[5vh] ${active && 'hover:bg-neutral-content/10'}`}>
                            <a onClick={openModal} className='w-[85%] text-[14px] flex' href='/'>
                              Sign Up
                            </a>
                          </div>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <div className={`w-full flex items-center justify-center h-[5vh]  ${active && 'hover:bg-neutral-content/10'}`}>
                            <a onClick={openModal} className='w-[85%] flex font-regular' href='/'>
                              Log in
                            </a>
                          </div>
                        )}
                      </Menu.Item>
                    </div>{' '}
                    <div className='py-[0.5rem] border-t border-neutral-content/10 '>
                      <Menu.Item>
                        {({ active }) => (
                          <div className={`w-full flex items-center justify-center h-[5vh] ${active && 'hover:bg-neutral-content/10'}`}>
                            <a className='w-[85%] flex font-regular' href='/'>
                              Employers
                            </a>
                          </div>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <div className={`w-full flex items-center justify-center h-[5vh]  ${active && 'hover:bg-neutral-content/10'}`}>
                            <a className='w-[85%] flex font-regular' href='/'>
                              Post A Job
                            </a>
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
                              <a onClick={signOut} className='w-[85%] flex font-regular' href='/'>
                                Sign out
                              </a>
                            </div>
                          )}
                        </Menu.Item>
                      </div>
                    )}
                  </Menu.Items>
                </Menu>
              </li>
              <li className='flex w-[10vw] h-[9vh] items-center flex items-center justify-center border-r border-neutral-content/10 border-l border-neutral-content/10'>
                <svg xmlns='http://www.w3.org/2000/svg' className='h-7 w-7 fill-neutral-content/50' viewBox='0 0 36 36'>
                  <path d='M6 12h6V6H6v6zm9 18h6v-6h-6v6zm-9 0h6v-6H6v6zm0-9h6v-6H6v6zm9 0h6v-6h-6v6zm9-15v6h6V6h-6zm-9 6h6V6h-6v6zm9 9h6v-6h-6v6zm0 9h6v-6h-6v6z' />
                </svg>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <>
        <Transition appear show={isOpen} as={Fragment}>
          <Dialog as='div' className='relative z-10' onClose={closeModal}>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0'
              enterTo='opacity-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
            >
              <div className='fixed inset-0 bg-black bg-opacity-80' />
            </Transition.Child>

            <div className='fixed inset-0 overflow-y-auto'>
              <div className='flex min-h-full items-center justify-center p-4 text-center'>
                <Transition.Child
                  as={Fragment}
                  enter='ease-out duration-300'
                  enterFrom='opacity-0 scale-95'
                  enterTo='opacity-100 scale-100'
                  leave='ease-in duration-200'
                  leaveFrom='opacity-100 scale-100'
                  leaveTo='opacity-0 scale-95'
                >
                  <Dialog.Panel className='w-full max-w-[50vw] h-full transform overflow-hidden rounded-2xl bg-neutral-focus  p-[3rem] text-left align-middle flex items-center justify-center shadow-xl transition-all'>
                    <div className='w-[70%] box-content flex flex-col items-center justify-center antialiased text-white mb-[5rem]'>
                      {/* <div className='w-full flex flex-col items-center justify-center mb-[2rem]'>
                        <h1 className='text-[2rem] leading-[4rem]'>
                          <Logo />
                        </h1>
                      </div> */}
                      <div className='w-full flex items-center justify-center'>
                        <h1 className='text-[2rem] leading-[10rem]'>Jobs for you</h1>
                      </div>
                      <form className='w-full flex flex-col'>
                        <input
                          onChange={handleOnChange}
                          name='email'
                          value={user.email}
                          placeholder='Email address'
                          className='border-b border-neutral-content/30 bg-transparent h-[6vh]  mb-[2rem] text-white placeholder:text-white/40 placeholder:font-regular placeholder:text-[14px] font-medium text-[16px] py-[1rem] focus:outline-0'
                        />
                        <input
                          onChange={handleOnChange}
                          name='password'
                          value={user.password}
                          placeholder='Password'
                          className='border-b border-neutral-content/30 bg-transparent h-[6vh] mb-[2rem] text-white placeholder:text-white/40 placeholder:font-regular font-medium text-[14px] py-[1rem] focus:outline-0'
                        />

                        <div className='w-full flex items-center justify-center my-[1rem]'>
                          <div className='w-[50%]'>
                            <div className='w-full flex'>
                              <input
                                type='checkbox'
                                onClick={() => setRememberUser(!rememberUser)}
                                checked={rememberUser}
                                className='checkbox checkbox-secondary rounded-sm'
                              />
                              <p className='ml-[0.5rem] text-[14px]'> Remember me</p>
                            </div>
                          </div>
                          <div className='w-[50%] flex items-center justify-end'>
                            <p className='text-[14px] font-regular underline'>Forgot Password?</p>
                          </div>
                        </div>
                        <div className='w-full flex flex-col items-center justify-between mt-[2rem]'>
                          <button onClick={signIn} className='w-full bg-green-500 h-[5vh] rounded-lg text-white text-[14px] font-medium mb-[1.2rem]'>
                            Sign in
                          </button>

                          <button
                            onClick={signUp}
                            className='w-full border border-neutral-content/30 h-[5vh] rounded-lg text-white text-[14px] font-medium'
                          >
                            Create an account
                          </button>
                        </div>
                      </form>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </>
    </div>
  );
}
