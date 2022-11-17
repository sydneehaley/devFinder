import type { NextPage } from 'next';
import * as React from 'react';
import Navbar from './Navbar';
import Search from '../../components/jobs/Search';

type Props = {
  children?: React.ReactNode;
};

const Layout: NextPage<Props> = ({ children }) => {
  return (
    <div className='bg-transparent antialiased'>
      <Navbar />
      <Search />
      <div className='w-full flex items-center justify-center'>{children}</div>
    </div>
  );
};

export default Layout;
