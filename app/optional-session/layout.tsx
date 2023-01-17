export default async function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <head>
        <title>Jobs Near You | devFinder</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
