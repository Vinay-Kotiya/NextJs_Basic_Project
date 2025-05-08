import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 py-12 ">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-200 mb-4 text-center">
        Contact Me
      </h1>
      <p className="text-lg text-gray-400 max-w-2xl text-center mb-10">
        I’m always excited to collaborate on new projects, freelance
        opportunities, or just chat about web development! Let’s connect.
      </p>

      <form className="w-full max-w-xl py-20 px-10 bg-gray-900  rounded-xl shadow-md space-y-6">
        <div>
          <label className="block text-left text-white font-medium mb-1">
            Name
          </label>
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border text-white border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-left text-white font-medium mb-1">
            Email
          </label>
          <input
            type="email"
            placeholder="you@example.com"
            className="w-full border text-white border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-left text-white font-medium mb-1">
            Message
          </label>
          <textarea
            placeholder="Write your message here..."
            rows={5}
            className="w-full border text-white border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-all"
        >
          Send Message
        </button>
      </form>

      <div className="mt-10 text-center text-sm text-gray-500">
        <p>📧 vinaykotiya77@gmail.com</p>
        <p>💼 Front-End Developer | React | Next.js | Tailwind CSS</p>
      </div>

      <Link href="/">
        <button className="px-6 py-3 m-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-all">
          ← Back to Home
        </button>
      </Link>
    </main>
  );
};

export default page;
