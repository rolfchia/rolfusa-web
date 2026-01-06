import Header from "../components/Header";
import { APP_VERSION } from "../lib/version";
import Image from "next/image";
import { useRouter } from "next/router";

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

const Home: React.FC<HomeProps> = ({ message }) => {
  const router = useRouter();

  return (
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

        <div className="rid grid-cols-2 gap-4">
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded"
            onClick={() => router.push("/")}
          >
            Home (SSG) Page
          </button>

          <button
            className="px-4 py-2 bg-green-600 text-white rounded"
            onClick={() => router.push("/ssr")}
          >
            SSR Page
          </button>
        </div>

        <div style={{ position: "relative", width: "100%", height: "500px" }}>
          <Image
            src="/images/rolf-webapp-ssg.png"
            alt="ROLF WebApp"
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
      </main>
    </>
  );
};

export default Home;
