import React from "react";

const PostCard = ({ post }) => {
  return (
    <div key={post.id} >
      {post.title}
      {post.excerpt}
    </div>
  );
};

export default PostCard;
