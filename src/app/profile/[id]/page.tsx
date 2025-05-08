import Link from "next/link";
import React from "react";

const page = ({ params }: any) => {
  return (
    <div className="flex h-screen  justify-center flex-col gap-[32px] row-start-2 items-center ">
      <div className="flex flex-col border border-white rounded-2xl p-2  row-start-2 items-center ">
        <span className="flex justify-around w-full items-center">
          <h1 className="text-4xl m-2">Profile</h1>
          <Link href="/">
            <img
              src={"https://www.svgrepo.com/show/474223/close-circle.svg"}
              // className="h-10"
              className="hover:scale-x-110 h-10"
            />
          </Link>
        </span>
        <h2 className="text-2xl m-2">User ID: {params.id}</h2>
        <hr className="border border-white w-full" />
        <div className="flex flex-col gap-2 text-2xl">
          <label
            htmlFor="name"
            className="mt-3 items-start float-start text-2xl text-white"
          >
            Name :{"John Doe"}
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
