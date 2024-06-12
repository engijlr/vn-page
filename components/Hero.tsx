import { CATEGORIES } from "@/constants";
import { IoSearchCircleOutline } from "react-icons/io5";
import Badge from "./Badge";

function Hero() {
  return (
    <header className="flex flex-col justify-center items-center w-full py-20">
      <div className="px-5 xl:px-10 md:w-1/2 mb-10">
        <h1 className="mt-6 mb-10 text-5xl xl:text-6xl text-center font-bold text-[#2A3342] leading-normal xl:leading-relaxed">
          A blog template made for food{" "}
          <span className="text-orange-400">influencers</span>
        </h1>
        <form className="bg-white p-4 rounded relative flex items-center">
          <IoSearchCircleOutline className="w-7 h-7 mr-2 text-neutral-300" />
          <input
            className="outline-none w-full placeholder:text-[#1b2629]"
            name="query"
            type="search"
            placeholder="Search for a recipe"
            id="search"
            required
          />
        </form>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-8">
        {CATEGORIES.map((item) => (
          <Badge
            name={item.type}
            href={item.href}
            backgroundColor={item.background}
            color={item.color}
          />
        ))}
      </div>
    </header>
  );
}

export default Hero;
