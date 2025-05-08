// pages/index.js
import Link from "next/link";
import { posts } from "../../data/posts";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="h-screen w-full flex justify-center items-center flex-col">
      <div className="bg-gray-800 py-15 rounded relative">
        <Link href="/">
          <Image
            alt="Close img"
            src={"https://www.svgrepo.com/show/474223/close-circle.svg"}
            // className="h-10"
            className="hover:scale-x-110 h-10 absolute top-0 right-0 m-5"
          />
        </Link>
        <h1 className="text-6xl m-5">Blog Posts</h1>

        <ul className="m-5 text-3xl ">
          {posts.map((post) => (
            <li
              key={post.slug}
              className="hover:text-blue-400 m-3 hover:underline"
            >
              <Link href={`/posts/${post.slug}`}>{post.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
