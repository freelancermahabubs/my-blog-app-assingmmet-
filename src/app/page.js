import dynamic from "next/dynamic";
import Blog from "./blog/page";
import getAllPostCetagory from "./lib/getAllPostCetagory";
const BlogItems = dynamic(() => import("./components/BlogItems"));

const Home = async () => {
  const data = await getAllPostCetagory();
  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <header className="text-center mb-8">
        <h1 className="text-3xl font-semibold">My Blog App</h1>
      </header>
      <main className="flex justify-around bg-green-700 rounded-md text-white text-xl p-2">
        {data.map((post) => (
          <BlogItems key={post.id} post={post} />
        ))}
      </main>
      <Blog />
    </div>
  );
};

export default Home;
