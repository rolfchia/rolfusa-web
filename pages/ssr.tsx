import Header from "../components/Header";
import { APP_VERSION } from "../lib/version";
import Image from "next/image";

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

const SSRPage: React.FC<SSRProps> = ({ message, time }) => (
  <>
    <Header />
    <main>
      <h1>
        {message} v{APP_VERSION}
      </h1>
      <p>
        This page was dynamically generated using Next.js Server-Side Rendering
        (SSR). <b>Rendered on the server at: {time}</b>
      </p>
      <div style={{ position: "relative", width: "100%", height: "500px" }}>
        <Image
          src="/images/rolf-webapp.svg"
          alt="ROLF WebApp"
          fill
          style={{ objectFit: "contain" }}
        />
      </div>
    </main>
  </>
);

export default SSRPage;
