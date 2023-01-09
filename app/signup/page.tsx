'use client';

import { useState } from 'react';

export default function SignUp() {
  const [account, setAccount] = useState<any>({
    email: '',
    password: '',
  });

  const handleOnChange = (e: any) => {
    setAccount({ ...account, [e.target.name]: e.target.value });
  };

  const handleOnSubmit = (e: any) => {
    e.preventDefault();
    console.log('new user created');
  };

  return (
    <>
      <div className='w-full h-screen flex items-center justify-center'>
        <form onSubmit={handleOnSubmit} className='w-[50%] h-screen flex flex-col items-center justify-center'>
          <label>Email</label>
          <input name='email' onChange={handleOnChange} value={account.email}></input>
          <input name='password' onChange={handleOnChange} value={account.password}></input>
          <button type='submit'>Sign Up</button>
        </form>
      </div>
    </>
  );
}
