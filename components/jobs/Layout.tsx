import type { NextPage } from 'next';
import * as React from 'react';
import Navbar from './Navbar';

type Props = {
  children?: React.ReactNode;
};

const Layout: NextPage<Props> = ({ children }) => {
  return (
    <div className='bg-neutral-800 antialiased'>
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
