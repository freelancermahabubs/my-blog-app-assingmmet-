import getAllPost from "@/app/lib/getAllPost";
import getAllSinglePost from "@/app/lib/getAllSinglePost";

import React from "react";

const SinglePage = async ({params}) => {
  const id = params.id;
  const postPromise = getAllSinglePost(id);
  console.log(id, "id");

  const singlePost = await postPromise;

  return <div></div>;
};

export default SinglePage;
export async function generateStaticParams() {
  const posts = await getAllPost();

  return posts.map((post) => ({
    id: "" + post.id,
  }));
}
