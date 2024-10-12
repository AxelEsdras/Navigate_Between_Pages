import Link from 'next/link';

function HomePage() {
  return (
    <>
      <div>Welcome to Next.js!</div>
      <Link href="/posts/first">
        <h1>First Post</h1>
      </Link>
    </>
  );
}

export default HomePage;