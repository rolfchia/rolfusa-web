import Header from "../components/Header";
import { APP_VERSION } from "../lib/version";
import Image from "next/image";
import { useRouter } from "next/router";

interface SSRProps {
  message: string;
  time: string;
}

export const getServerSideProps = async () => {
  const time = new Date().toLocaleString();
  return {
    props: {
      message: "Welcome to ROLF WebApps (SSR)",
      time,
    },
  };
};

const SSRPage: React.FC<SSRProps> = ({ message, time }) => {
  const router = useRouter();
  return (
    <>
      <Header />
      <main>
        <h1>
          {message} v{APP_VERSION}
        </h1>
        <p>
          This page was dynamically generated using Next.js Server-Side
          Rendering (SSR). <b>Rendered on the server at: {time}</b>
        </p>

        <div className="grid grid-cols-2 gap-4">
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
            src="/images/rolf-webapp-ssr.png"
            alt="ROLF WebApp"
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
      </main>
    </>
  );
};

export default SSRPage;
