import Link from "next/link";

function BlogCard({blog}) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full" src={blog?.img} alt="Blog Image" />
      <div className="px-6 py-4">
        <Link href={`/singleblog/${blog.id}`}>
          <div className="font-bold text-xl mb-2 text-black">{blog.title}</div>
        </Link>
        <p className="text-gray-700 text-base">{blog.short}</p>
      </div>
    </div>
  );
}

export default BlogCard;
