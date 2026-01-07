import { Post } from "../types/post";

interface PostCardProps {
  post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-gray-200">
      <div className="p-5">
        <div className="flex justify-between items-start mb-3">
          <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-700 bg-blue-100 rounded-full">
            User ID: {post.userId}
          </span>
          <span className="text-sm text-gray-500 font-medium">
            Post #{post.id}
          </span>
        </div>

        <h3 className="text-lg font-bold text-gray-800 mb-3 line-clamp-2">
          {post.title}
        </h3>

        <p className="text-gray-600 text-sm mb-4 line-clamp-3">{post.body}</p>

        <div className="text-right">
          <button className="text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors">
            View Details →
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
