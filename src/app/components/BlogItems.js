import React from "react";

const BlogItems = ({post}) => {
  return (
    <div>
      <h2>{post?.name}</h2>
    </div>
  );
};

export default BlogItems;
