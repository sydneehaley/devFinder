import type { NextPage } from 'next';
import * as React from 'react';
import Navbar from './Navbar';

type Props = {
  children?: React.ReactNode;
};

const Layout: NextPage<Props> = ({ children }) => {
  return (
    <div className='bg-transparent antialiased'>
      <Navbar />
      <div className='w-full flex flex-col items-center justify-center'>{children}</div>
    </div>
  );
};

export default Layout;
