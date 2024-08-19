"use client";

import About from "@/components/About";
import FeaturedSection from "@/components/FeaturedSection";
import Hero from "@/components/Hero";
import LatestRecipe from "@/components/LatestRecipe";
import NewsLetter from "@/components/NewsLetter";
import { getPosts } from "@/services";
import React, { useState, useEffect } from "react";

export default function Home() {
  const [posts, setPosts] = useState([]);

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
  }, [posts]);

  console.log(posts);

  return (
    <>
      <Hero />
      <FeaturedSection />
      <LatestRecipe />
      <NewsLetter />
      <About />
    </>
  );
}
