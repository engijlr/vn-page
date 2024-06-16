import React from "react";
import Button from "./Button";

const NewsLetter = () => {
  return (
    <section className="w-full md:w-2/3 mx-auto flex flex-col items-center p-10">
      <h3 className="text-secondary font-semibold text-center text-4xl">
        Sign up for my weekly newsletter!
      </h3>
      <p className="mt-6 text-gray-600 text-lg text-center leading-normal font-light">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime tempore
        ullam perspiciatis repudiandae, a architecto ipsa odit obcaecati hic
        unde nobis facilis voluptate consequuntur, asperiores mollitia at?
      </p>

      <form className="mt-6 flex flex-col md:flex-row items-center justify-center w-full md:px-8 gap-4 mb-20">
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="flex flex-grow px-4 py-4 rounded text-gray-400 outline-none placeholder:text-[#1b2629]"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          className="flex flex-grow px-4 py-4 rounded text-gray-400 outline-none placeholder:text-[#1b2629]"
          required
        />

        <Button title="Get Started" type="submit" />
      </form>
    </section>
  );
};

export default NewsLetter;
