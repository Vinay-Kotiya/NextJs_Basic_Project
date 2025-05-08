"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import axios from "axios";
import closeIcon from "../assets/close.svg";

const page = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const onLogin = async () => {};
  return (
    <div className="flex h-screen  justify-center flex-col gap-[32px] row-start-2 items-center ">
      <div className="flex relative flex-col border border-white rounded-2xl py-20 md:px-10  px-5 bg-gray-900  row-start-2 items-center ">
        <Link href="/">
          <img
            src={"https://www.svgrepo.com/show/474223/close-circle.svg"}
            // className="h-10"
            className="hover:scale-x-110 h-10 absolute top-0 right-0 m-10"
          />
        </Link>
        <span className="flex justify-around w-full mb-10 items-center">
          <h1 className="text-4xl m-2">Login</h1>
        </span>

        <hr className="border border-white w-full" />
        <div className="flex flex-col gap-2 text-2xl">
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
            onClick={onLogin}
            className="bg-blue-500 mt-4 hover:bg-blue-700 hover:shadow-md shadow-white text-white p-2 rounded-md w-[300px] text-2xl"
          >
            Login Here
          </button>
          <Link
            href="/signup"
            className="text-blue-500 text-sm hover:underline m-2"
          >
            Don't have an account? Signup here
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
