import Header from "../components/Header";
import { APP_VERSION } from "./version";

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
    </main>
  </>
);

export default SSRPage;
