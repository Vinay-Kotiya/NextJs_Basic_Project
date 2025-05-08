// pages/posts/[slug].js

import Link from "next/link";
import { posts } from "../../../data/posts";

const PostPage = async ({ params }: any) => {
  const { slug } = await params;

  const post = posts.find((p) => p.slug === slug);
  //   console.log(post.content);

  if (!post) return <h2>Loading or Post not found...</h2>;

  return (
    <div className=" w-full md:pt-10 flex justify-center items-center flex-col">
      <div className="bg-gray-800  md:w-[40%] rounded py-15 relative">
        <Link href="/blog">
          <img
            src={"https://www.svgrepo.com/show/474223/close-circle.svg"}
            // className="h-10"
            className="hover:scale-x-110 h-10 absolute top-0 right-0 m-5"
          />
        </Link>
        <span className="md:text-3xl text-xl m-5 text-black font-bold bg-gray-400 rounded p-2 ">
          {post.author}
        </span>
        <span className="md:text-3xl text-xl m-5 text-black font-bold  right-0 bg-gray-400 rounded p-2 ">
          {post.date}
        </span>
        <h2 className="md:text-5xl text-2xl m-5 text-black font-bold bg-gray-400 rounded p-2 items-center flex justify-center">
          {post.title}
        </h2>

        <span className="md:text-2xl  text-xl ml-5   text-black font-bold bg-gray-400 rounded p-2 ">
          <span className=" md:p-2 p-1">Topics:</span>
          {post.tags.map((item, index) => (
            <span key={index} className="md:p-2 p-1">
              {item}
            </span>
          ))}
        </span>
        <p className="md:text-3xl text-xl m-5 ">{post.content.intro}</p>
        <ul className="md:text-2xl text-lg m-5 text-gray-400 ">
          {post.content.list.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
        <p className="text-2xl m-5 text-gray-300">{post.content.conclusion}</p>
      </div>
    </div>
  );
};
export default PostPage;
