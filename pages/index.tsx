import Header from '../components/Header';

interface HomeProps {
  message: string;
}

export const getStaticProps = async () => {
  return {
    props: {
      message: 'Welcome to ROLF WebApps (SSG)',
    },
  };
};

const Home: React.FC<HomeProps> = ({ message }) => (
  <>
    <Header />
    <main>
      <h1>{message}</h1>
      <p>This page was statically generated at build time using Next.js Static Site Generation (SSG).</p>
    </main>
  </>
);

export default Home;
