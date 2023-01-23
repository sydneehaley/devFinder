'use client';
import { useState } from 'react';
import { createBrowserClient } from '../../utils/supabase-browser';
import { useSupabase } from '../../components/supabase-provider';

export default function SignUp() {
  const { supabase, session } = useSupabase();
  const [email, setEmail] = useState('');

  const createUser = async () => {
    const { data, error } = await supabase.auth.signInWithOtp({
      email: email,
      options: {
        emailRedirectTo: '/sign-in',
      },
    });
    console.log({ data, error });
  };

  return (
    <div className='w-[33%] box-content h-[91vh] flex flex-col items-center justify-center antialiased text-white'>
      <div className='w-full flex flex-col items-center justify-center mb-[2rem]'>
        <h1 className='text-[2rem] leading-[4rem]'>Create an account</h1>
      </div>
      <div className='w-full flex items-center justify-center'>
        <button className='w-full h-[6vh] border border-neutral-700/40 rounded-lg text-white/20 font-medium text-[14px] flex items-center justify-center mb-[2rem]'>
          <div className='flex w-full items-center justify-center'>
            <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 47 48'>
              <g fill='none' fill-rule='evenodd' stroke='none' stroke-width='1'>
                <g transform='translate(-401.000000, -860.000000)'>
                  <g transform='translate(401.000000, 860.000000)'>
                    <path
                      fill='#FBBC05'
                      d='M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24'
                    />
                    <path
                      fill='#EB4335'
                      d='M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333'
                    />
                    <path
                      fill='#34A853'
                      d='M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667'
                    />
                    <path
                      fill='#4285F4'
                      d='M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24'
                    />
                  </g>
                </g>
              </g>
            </svg>
            <span className='ml-[1rem]'>Continue With Google</span>
          </div>
        </button>
      </div>
      <form className='w-full flex flex-col' onSubmit={createUser}>
        <button className='border border-neutral-700/40 bg-transparent h-[6vh] rounded-lg mb-[2rem] text-white/20 font-medium text-[14px] p-[1rem]'>
          Continue with email
        </button>
        {/* <button className='bg-green-500 h-[5vh] rounded-lg text-white text-[14px]'>Create account</button> */}
      </form>
    </div>
  );
}
