import Header from "../components/Header";
import { APP_VERSION } from "../lib/version";
import Image from "next/image";
import { useRouter } from "next/router";
import PostCard from "../components/PostCard";
import { Post } from "../types/post";

interface HomeProps {
  message: string;
  posts: Post[];
}

export const getStaticProps = async () => {
  try {
    // Fetch posts from JSONPlaceholder API
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts?_limit=5"
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch posts: ${response.status}`);
    }

    const posts: Post[] = await response.json();

    return {
      props: {
        message: "Welcome to ROLF WebApps (SSG)",
        posts,
      },
      // Revalidate every hour (3600 seconds) to update content
      revalidate: 3600,
    };
  } catch (error) {
    console.error("Error fetching posts:", error);

    // Return empty posts array if fetch fails
    return {
      props: {
        message: "Welcome to ROLF WebApps (SSG)",
        posts: [],
      },
      revalidate: 60, // Try again in 1 minute
    };
  }
};

const Home: React.FC<HomeProps> = ({ message, posts }) => {
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
            This page was statically generated at build time using Next.js
            Static Site Generation (SSG).
          </p>
          <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
            The posts below are fetched at build time.
          </p>
        </div>

        <div className="mb-10 text-center">
          <Image
            src="/images/rolf-webapp-ssg.png"
            alt="ROLF WebApp"
            width={600}
            height={360}
            priority
            className="rounded-lg shadow-lg mx-auto"
          />
          <p className="mt-4 text-sm font-bold text-gray-500">
            SSG Version - Built at compile time
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

            <button
              className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors"
              onClick={() => router.push("/simple.html")}
            >
              Pure HTML Page
            </button>
          </div>
        </div>

        {/* Simple Divider Line - ADD THIS LINE */}
        <hr className="my-12 border-t border-gray-300 dark:border-gray-700" />

        {/* Posts Section */}
        <section className="mt-12">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">
              Calling REST API to Get the Latest Posts (SSG - Static Generation)
            </h2>
            <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
              {posts.length} Posts
            </span>
          </div>

          {posts.length === 0 ? (
            <div className="text-center py-12 bg-gray-50 rounded-lg">
              <p className="text-gray-500">No posts available at the moment.</p>
              <p className="text-sm text-gray-400 mt-2">
                Posts are fetched at build time. Try rebuilding the site.
              </p>
            </div>
          ) : (
            <>
              <p className="text-gray-600 mb-6">
                These 5 posts are fetched from JSONPlaceholder API during build
                time. The page will be regenerated every hour (revalidate:
                3600).
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

export default Home;
