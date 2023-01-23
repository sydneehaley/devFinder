'use client';
import { useState } from 'react';
import { signInOtp } from '../../components/supabase-auth-signin-otp';

export default function SignUp() {
  const [email, setEmail] = useState('');

  const signInUser = async () => {
    signInOtp(email);
  };

  return (
    <div>
      <h1>Sign In</h1>
      <form onSubmit={signInUser}>
        <input className='border' onChange={(e) => setEmail(e.target.value)}></input>
        <button className='bg-green-500'>Sign up</button>
      </form>
    </div>
  );
}
