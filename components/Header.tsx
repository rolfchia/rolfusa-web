import Link from 'next/link';

const Header: React.FC = () => (
  <nav>
    <Link href="/">Home (SSG)</Link> | <Link href="/ssr">SSR Page</Link>
  </nav>
);

export default Header;
