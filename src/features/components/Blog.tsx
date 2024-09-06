import React from "react";
import SingleBlog from "./SingleBlog";
type Post = {
  author: {
    email: string;
    username: string;
  };
  category: string;
  content: string;
  createdAt: string;
  title: string;
};
type BlogProps = {
  posts: Post[];
};
const Blog: React.FC<BlogProps> = ({ posts }) => {
  return posts?.map((post, idx) => <SingleBlog post={post} key={idx} />);
};

export default Blog;
