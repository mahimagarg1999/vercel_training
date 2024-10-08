// pages/homeIndex.jsx
import Link from 'next/link';

const HomeIndex = () => {
  return (
    <div>
      <h1>Welcome to My Next.js App</h1>
      <p>This is a separate home page.</p>
      <Link href="/about">Go to About Page</Link>
      <Link href="/order">Go to Order Page</Link>
    </div>
  );
};

export default HomeIndex;
