import React from "react";
import Link from "next/link";
import Image from "next/image";
const page = ({ params }: any) => {
  return (
    <div className="flex h-screen  justify-center flex-col gap-[32px] row-start-2 items-center ">
      <div className="flex relative flex-col border border-white rounded-2xl py-20 px-10 bg-gray-900  row-start-2 items-center ">
        <Link href="/">
          <Image
            alt="close"
            src={"https://www.svgrepo.com/show/474223/close-circle.svg"}
            // className="h-10"
            className="hover:scale-x-110 h-10 absolute top-0 right-0 m-10"
          />
        </Link>
        {/* <h1 className="text-4xl m-2">Profile</h1> */}
        <span className="flex justify-around w-full mb-10 items-center">
          <h1 className="text-4xl m-2">Profile</h1>
        </span>
        <hr className="border border-white w-full" />
        <div className="flex flex-col gap-10 pt-10 text-2xl">
          <label
            htmlFor="name"
            className="mt-3 items-start float-start text-2xl text-white"
          >
            Name :{"Vinay Kotiya"}
          </label>
          <label
            htmlFor="email"
            className="mt-3 items-start float-start text-2xl text-white"
          >
            Email:{"vinaykotiya@gmail.com"}
          </label>
        </div>
      </div>
    </div>
  );
};

export default page;
