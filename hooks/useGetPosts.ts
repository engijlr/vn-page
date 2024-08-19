import { getPosts } from "@/services";
import { GetPostsResponse, PostEdge, PostNode } from "@/types";
import { useEffect, useState } from "react";

export const useGetPosts = () => {
  const [posts, setPosts] = useState<PostEdge[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const fetchedPosts = await getPosts(); // Await the promise
        setPosts(fetchedPosts); // Set the posts state with the fetched data
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts(); // Call the function to fetch posts when the component mounts
  }, []);

  return posts;
};
