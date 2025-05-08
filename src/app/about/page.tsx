import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 py-12  text-center">
      <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">
        About Me
      </h1>
      <p className="text-lg md:text-xl text-gray-600 max-w-2xl mb-6">
        Hey! 👋 I'm
        <span className="font-semibold text-blue-600"> Vinay Kotiya</span>, a
        passionate web developer currently learning
        <span className="font-semibold text-white"> Next.js </span> with lots of
        fun and excitement!
        <br className="hidden md:block" />I love building creative, fast, and
        interactive websites. 🚀
      </p>
      <p className="text-md text-gray-500 max-w-xl mb-8">
        My journey into web development is filled with curiosity and joy. I'm
        exploring React, Tailwind CSS, and modern tools to build amazing user
        experiences.
      </p>
      <Link href="/">
        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-all">
          ← Back to Home
        </button>
      </Link>
    </main>
  );
};

export default page;
