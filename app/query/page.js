import Link from 'next/link';

const Query = () => {
  return (
    <div>
      <h1 className='text-7xl'>Query page</h1>
      <Link href='/' className='text-2xl'>
        Home Page
      </Link>
    </div>
  );
};

export default Query;
