import About from "@/components/About";
import FeaturedSection from "@/components/FeaturedSection";
import Hero from "@/components/Hero";
import LatestRecipe from "@/components/LatestRecipe";
import NewsLetter from "@/components/NewsLetter";

export default function Home() {
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
