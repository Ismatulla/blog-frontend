import Blog from "../features/components/Blog";
import { useEffect, useState } from "react";
import { getAllPosts } from "../features/utils/auth";
const Home = () => {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    try {
      const response = await getAllPosts();
      console.log(response);
      setPosts(response?.posts);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);
  return (
    <div>
      <Blog posts={posts} />
    </div>
  );
};

export default Home;
