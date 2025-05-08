"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  // const tl = useRef<gsap.core.Timeline | null>(null);
  // const [count, setCount] = useState(true);

  // useEffect(() => {
  //   if (!menuRef.current) return;
  //   if (!count) return;
  //   // Selector helper
  //   const q = gsap.utils.selector(menuRef);

  //   // Init timeline
  //   tl.current = gsap.timeline({
  //     paused: true,
  //     defaults: { ease: "power3.out" },
  //   });

  //   // Animate menu in
  //   tl.current
  //     .set(menuRef.current, { display: "flex" })
  //     .fromTo(menuRef.current, { y: "-100%" }, { y: 0, duration: 0.5 })
  //     .from(
  //       q("li"),
  //       {
  //         opacity: 0,
  //         y: 50,
  //         stagger: 0.1,
  //         duration: 0.4,
  //         onComplete: () => {
  //           setCount(false);
  //         },
  //       },
  //       "-=0.3"
  //     );
  // }, []);

  // Animate open/close
  useEffect(() => {
    if (!menuRef.current) return;
    // if (!tl.current) return;
    // const menuList = document.getElementsByClassName("menuList");
    if (isOpen) {
      // tl.current.play();
      gsap.set(menuRef.current, {
        y: -30,
        opacity: 0,
      });
      gsap.to(menuRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power3.out",
        display: "block",
      });
    } else {
      // tl.current.reverse();
      gsap.to(menuRef.current, {
        y: "-100%",
        opacity: 0,
        duration: 0.5,
        ease: "power3.in",
        onComplete: () => {
          if (menuRef.current) menuRef.current.style.display = "none";
        },
      });
    }
  }, [isOpen]);
  return (
    <div className="flex justify-between items-center md:bg-gray-800 w-full md:px-10 font-mono rounded-2xl ">
      <span className="md:text-4xl text-2xl font-bold  ">Vinay Kotiya</span>
      <ul className=" text-2xl md:flex  hidden">
        <Link href="/" className=" hover:text-black p-5 hover:bg-blue-600 ">
          Home
        </Link>
        <Link href="/blog" className=" hover:text-black p-5 hover:bg-blue-600">
          Blogs
        </Link>
        <Link href="/about" className=" hover:text-black p-5 hover:bg-blue-600">
          About
        </Link>
        <Link
          href="/contact"
          className=" hover:text-black p-5 hover:bg-blue-600"
        >
          Contact
        </Link>

        <Link href="/login" className=" hover:text-black p-5 hover:bg-blue-600">
          Login
        </Link>
        <Link
          href="/signup"
          className=" hover:text-black p-5 hover:bg-blue-600"
        >
          SignUp
        </Link>
        <Link
          href="/profile"
          className=" hover:text-black p-5 hover:bg-blue-600"
        >
          Profile
        </Link>
      </ul>
      <span className=" flex md:hidden">
        <img
          className="h-10"
          onClick={() => setIsOpen(!isOpen)}
          src={"https://www.svgrepo.com/show/313139/hamburger-menu.svg"}
        />
      </span>
      <div
        ref={menuRef}
        style={{ display: "none", transform: "translateY(-100%)" }}
        className="fixed top-0 left-0 w-full h-screen   flex-col  bg-black items-center justify-center "
      >
        <img
          className="h-10 absolute right-0 m-5"
          onClick={() => setIsOpen(!isOpen)}
          src={"https://www.svgrepo.com/show/474223/close-circle.svg"}
        />
        <ul className="space-y-2 text-black flex justify-center  items-center flex-col h-[70%] font-bold text-2xl ">
          <Link onClick={() => setIsOpen(!isOpen)} className="w-full" href="/">
            <li className="menuList bg-gray-300 hover:bg-gray-500 border border-black p-2 rounded-2xl w-full text-center">
              Home
            </li>
          </Link>
          <Link
            onClick={() => setIsOpen(!isOpen)}
            className="w-full"
            href="/about"
          >
            <li className="menuList bg-gray-300 hover:bg-gray-500 border border-black p-2 rounded-2xl w-full text-center">
              About
            </li>
          </Link>
          <Link
            onClick={() => setIsOpen(!isOpen)}
            className="w-full"
            href="/contact"
          >
            <li className="menuList bg-gray-300 hover:bg-gray-500 border border-black p-2 rounded-2xl w-full text-center">
              Contact
            </li>
          </Link>
          <Link
            onClick={() => setIsOpen(!isOpen)}
            className="w-full"
            href="/login"
          >
            <li className="menuList bg-gray-300 hover:bg-gray-500 border border-black p-2 rounded-2xl w-full text-center">
              Login
            </li>
          </Link>
          <Link
            onClick={() => setIsOpen(!isOpen)}
            className="w-full"
            href="/profile"
          >
            <li className="menuList bg-gray-300 hover:bg-gray-500 border border-black p-2 rounded-2xl w-full text-center">
              Profile
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
