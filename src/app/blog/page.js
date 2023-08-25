import dynamic from "next/dynamic";
import getAllPost from "../lib/getAllPost";
const BlogCard = dynamic(() => import("../components/BlogCard"));


const Blog = async () => {
  const data = await getAllPost();
  return (
    <div className="mt-4">
      <div className="flex justify-around rounded-md text-white text-xl p-2">
        {data.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default Blog;
