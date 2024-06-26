import Image from "next/image";
import React from "react";
import Button from "./Button";

function FeaturedSection() {
  return (
    <section className="overflow-hidden flex md:flex-row flex-col justify-between items-center sm:mt-20 my-4 md:gap-20 gap-12 px-5 lg:px-10">
      <div className="relative sm:w-1/2">
        <span className="absolute top-4 left-5 bg-white text-secondary px-3 py-1 rounded-md uppercase tracking-wider">
          Featured Recipe
        </span>
        <Image
          src="/meal-example.avif"
          alt="featured meal"
          width={500}
          height={500}
          className="rounded-md w-full"
        />
      </div>

      <div className="text-start sm:w-1/2">
        <h2 className="text-3xl font-semibold text-secondary sm:text-5xl sm:leading-relaxed">
          Recipe name
        </h2>
        <p className="text-xl mt-4 text-[#5c5c5c]">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum, veniam
          molestiae! In, facere incidunt aliquid rem nulla dolor. Amet aliquam
          dolore debitis veritatis nesciunt vel magnam ullam suscipit beatae
          quaerat! Asperiores accusamus a, eligendi culpa molestias dolorem
          consectetur in sit dolores?
        </p>
        <div className="lg:mt-0 lg:flex-shrink-0">
          <div className="mt-12 inline-flex">
            <Button type="button" title="View Recipe" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedSection;
