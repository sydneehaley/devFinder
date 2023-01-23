'use client';
import { useState } from 'react';
import { createBrowserClient } from '../../utils/supabase-browser';

export default function SignUp() {
  const supabase = createBrowserClient();
  const [email, setEmail] = useState('');

  const signInUser = async () => {
    const { data, error } = await supabase.auth.signInWithOtp({
      email: email,
      options: {
        emailRedirectTo: 'https://example.com/welcome',
      },
    });
    console.log({ data, error });
  };

  return (
    <div>
      <h2>Form</h2>
      <form onSubmit={signInUser}>
        <input className='border' onChange={(e) => setEmail(e.target.value)}></input>
        <button className='bg-green-500'>Sign up</button>
      </form>
    </div>
  );
}
