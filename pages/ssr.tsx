import Header from "../components/Header";
import { APP_VERSION } from "../lib/version";
import Image from "next/image";
import { useRouter } from "next/router";
import PostCard from "../components/PostCard";
import { Post } from "../types/post";

interface SSRProps {
  message: string;
  time: string;
  posts: Post[];
}

export const getServerSideProps = async () => {
  const time = new Date().toLocaleString();

  try {
    // Fetch posts from JSONPlaceholder API on every request
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts?_limit=5"
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch posts: ${response.status}`);
    }

    const posts: Post[] = await response.json();

    return {
      props: {
        message: "Welcome to ROLF WebApps (SSR)",
        time,
        posts,
      },
    };
  } catch (error) {
    console.error("Error fetching posts:", error);

    // Return empty posts array if fetch fails
    return {
      props: {
        message: "Welcome to ROLF WebApps (SSR)",
        time,
        posts: [],
      },
    };
  }
};

const SSRPage: React.FC<SSRProps> = ({ message, time, posts }) => {
  const router = useRouter();

  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="mb-10 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {message} v{APP_VERSION}
          </h1>
          <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
            This page was dynamically generated using Next.js Server-Side
            Rendering (SSR).
          </p>
          <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
            <b>Rendered on the server at: {time}</b>
          </p>
        </div>

        <div className="mb-10 text-center">
          <Image
            src="/images/rolf-webapp-ssr.png"
            alt="ROLF WebApp"
            width={600}
            height={360}
            priority
            className="rounded-lg shadow-lg mx-auto"
          />
          <p className="mt-4 text-sm font-bold text-gray-500">
            SSR Version - Rendered at: {time}
          </p>
        </div>

        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md mx-auto">
            <button
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
              onClick={() => router.push("/")}
            >
              Home (SSG) Page
            </button>

            <button
              className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors"
              onClick={() => router.push("/ssr")}
            >
              SSR Page
            </button>
          </div>
        </div>

        {/* Simple Divider Line - ADD THIS LINE */}
        <hr className="my-12 border-t border-gray-300 dark:border-gray-700" />

        {/* Posts Section */}
        <section className="mt-12">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">
              Calling REST API to Get the Latest Posts (SSR - Server-Side
              Rendering)
            </h2>
            <div className="flex items-center space-x-4">
              <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                {posts.length} Posts
              </span>
              <span className="text-sm text-gray-500 font-medium">
                Live at: {time}
              </span>
            </div>
          </div>

          {posts.length === 0 ? (
            <div className="text-center py-12 bg-gray-50 rounded-lg">
              <p className="text-gray-500">
                Failed to fetch posts. Please try again.
              </p>
            </div>
          ) : (
            <>
              <p className="text-gray-600 mb-6">
                These 5 posts are fetched fresh from JSONPlaceholder API on
                every page request. This ensures you always see the latest data.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {posts.map((post) => (
                  <PostCard key={post.id} post={post} />
                ))}
              </div>
            </>
          )}
        </section>
      </main>
    </>
  );
};

export default SSRPage;
