import Header from "../components/Header";
import { APP_VERSION } from "../lib/version";
import Image from "next/image";

interface HomeProps {
  message: string;
}

export const getStaticProps = async () => {
  return {
    props: {
      message: "Welcome to ROLF WebApps (SSG)",
    },
  };
};

const Home: React.FC<HomeProps> = ({ message }) => (
  <>
    <Header />
    <main>
      <h1>
        {message} v{APP_VERSION}
      </h1>
      <p>
        This page was statically generated at build time using Next.js Static
        Site Generation (SSG).
      </p>

      <div style={{ position: "relative", width: "100%", height: "500px" }}>
        <Image
          src="/images/rolf-webapp.png"
          alt="ROLF WebApp"
          fill
          style={{ objectFit: "contain" }}
        />
      </div>
    </main>
  </>
);

export default Home;
