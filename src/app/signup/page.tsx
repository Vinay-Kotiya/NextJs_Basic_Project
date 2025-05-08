"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import axios from "axios";

const page = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
    name: "",
  });
  const onSignup = async () => {};
  return (
    <div className="flex h-screen  justify-center flex-col gap-[32px] row-start-2 items-center ">
      <div className="flex relative flex-col border border-white rounded-2xl  md:py-20  py-10 bg-gray-900 md:px-10  px-5 row-start-2 items-center ">
        {/* <h1 className="text-4xl m-2">Signup</h1> */}
        <Link href="/">
          <img
            src={"https://www.svgrepo.com/show/474223/close-circle.svg"}
            // className="h-10"
            className="hover:scale-x-110 h-10 absolute top-0 right-0 m-5"
          />
        </Link>
        <span className="flex justify-around mb-10 w-full items-center">
          <h1 className="text-4xl m-2">SignUp</h1>
        </span>
        <hr className="border border-white w-full" />
        <div className="flex flex-col gap-2 text-2xl">
          <label
            htmlFor="name"
            className="mt-3 items-start float-start text-2xl text-white"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={user.name}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
            placeholder="Enter your name"
            className="bg-gray-200 p-2 rounded-md w-[300px] text-2xl text-black"
            required
          />
          <label
            htmlFor="email"
            className="mt-3 items-start float-start text-2xl text-white"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            placeholder="Enter your email"
            className="bg-gray-200 p-2 rounded-md w-[300px] text-2xl text-black"
            required
          />
          <label
            htmlFor="password"
            className="mt-3 items-start float-start text-2xl text-white"
          >
            Password
          </label>
          <input
            type="text"
            id="password"
            name="password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            placeholder="Enter your password"
            className="bg-gray-200 p-2 rounded-md w-[300px] text-2xl text-black"
            required
          />
          <button
            onClick={onSignup}
            className="bg-blue-500 mt-4 hover:bg-blue-700 hover:shadow-md shadow-white text-white p-2 rounded-md w-[300px] text-2xl"
          >
            Signup
          </button>
          <Link
            href="/login"
            className="text-blue-500 text-sm hover:underline m-2"
          >
            Already have an account?
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
