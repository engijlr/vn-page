"use client";

import About from "@/components/About";
import FeaturedSection from "@/components/FeaturedSection";
import Hero from "@/components/Hero";
import LatestRecipe from "@/components/LatestRecipe";
import NewsLetter from "@/components/NewsLetter";
import { useGetPosts } from "@/hooks/useGetPosts";
import { getPosts } from "@/services";
import React, { useState, useEffect } from "react";

export default function Home() {
  const posts = useGetPosts();

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
