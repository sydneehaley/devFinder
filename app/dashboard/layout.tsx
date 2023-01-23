import Navbar from './Navbar';

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='antialiased'>
      <div className='w-full flex items-center justify-center'>{children}</div>
    </div>
  );
}
