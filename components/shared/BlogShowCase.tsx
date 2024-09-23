"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { blogsArray } from "@/constants";
import Image from "next/image";
import { SparklesPreview } from "./SparkelComp";

interface BlogPost {
  title: string;
  description: string;
  image: string;
  link: string;
}

const BlogShowCase = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [currentBlogIndex, setCurrentBlogIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      setBlogPosts(blogsArray);
    };
    fetchBlogPosts();
  }, []);

  const nextBlogPost = () => {
    setDirection(1);
    setCurrentBlogIndex((prevIndex) =>
      prevIndex === blogPosts.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevBlogPost = () => {
    setDirection(-1);
    setCurrentBlogIndex((prevIndex) =>
      prevIndex === 0 ? blogPosts.length - 1 : prevIndex - 1
    );
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  return (
    <div id="blog" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-gray_gradient mb-12 flex items-center justify-center text-center text-4xl font-bold">
        <SparklesPreview title="Visionary Voices" />
      </h1>

      <section className="relative flex items-center justify-center">
        <button
          onClick={prevBlogPost}
          className="absolute left-0 z-10 rounded-full bg-white p-2 shadow-md transition-colors hover:bg-gray-100"
          aria-label="Previous blog post"
        >
          <FaChevronLeft className="text-black" />
        </button>

        <div className="w-full max-w-2xl overflow-hidden rounded-lg border-gray-400 shadow-lg lg:max-w-4xl">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentBlogIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              className="md:flex"
            >
              <div className="md:shrink-0">
                {blogPosts[currentBlogIndex] && (
                  <Image
                    className="h-48 w-full object-cover md:size-64"
                    src={blogPosts[currentBlogIndex]?.image}
                    alt={blogPosts[currentBlogIndex]?.title}
                    width={256}
                    height={256}
                  />
                )}
              </div>
              <div className="flex flex-col justify-between p-8">
                <div>
                  <h3 className="mb-2 text-2xl font-semibold">
                    {blogPosts[currentBlogIndex]?.title}
                  </h3>
                  <p className="mb-4 line-clamp-3 text-gray-400">
                    {blogPosts[currentBlogIndex]?.description}
                  </p>
                </div>
                <a
                  href={blogPosts[currentBlogIndex]?.link}
                  target="_blank"
                  className="text-green-600"
                  rel="noopener noreferrer"
                >
                  Read more
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <button
          onClick={nextBlogPost}
          className="absolute right-0 z-10 rounded-full bg-white p-2 shadow-md transition-colors hover:bg-gray-100"
          aria-label="Next blog post"
        >
          <FaChevronRight className="text-black" />
        </button>
      </section>
    </div>
  );
};

export default BlogShowCase;
