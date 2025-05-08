import Image from "next/image";
import Header from "./components/Header";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 md:p-10 font-[family-name:var(--font-geist-sans)]">
        <Header />
        <main className="flex md:flex-row flex-col   gap-[32px]  items-center justify-between">
          <div className="flex flex-col items-center justify-center  px-4 text-center ">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">
              Hello, I'm Vinay Kotiya 👋
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-6">
              I'm learning
              <span className="font-semibold text-white"> Next.js </span> with
              fun and joy! 🚀
              <br />
              Every line of code brings new excitement ✨
            </p>
            <Link href="/about">
              <button className="px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-md transition-all">
                Learn More About Me
              </button>
            </Link>
          </div>
          <div className="w-[40%]">
            <img
              className="rounded-2xl "
              src="https://ellow.io/wp-content/uploads/2023/06/Next.js-Developer-1024x944.jpg"
            />
          </div>
        </main>
      </div>
    </>
  );
}
