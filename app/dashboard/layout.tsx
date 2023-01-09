import Navbar from '../components/dashboard/Navbar';

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='antialiased'>
      <Navbar />
      <div className='w-full flex items-center justify-center'>{children}</div>
    </div>
  );
}
