import React from "react";
import SingleBlog from "./SingleBlog";
import { Box } from "@chakra-ui/react";
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
  return (
    <Box
      display="flex"
      flexWrap="wrap"
      gap={2}
      justifyContent="center"
      alignItems="center">
      {posts?.map((post, idx) => (
        <SingleBlog post={post} key={idx} />
      ))}
    </Box>
  );
};

export default Blog;
