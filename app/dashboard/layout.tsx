'use client';
import Navbar from '../../components/Navbar';

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='w-full antialiased'>
      <Navbar />
      <div className='w-full flex items-center justify-center'>{children}</div>
    </div>
  );
}
