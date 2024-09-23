"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { SparklesPreview } from "../shared/SparkelComp";

interface TimelineEntry {
  title: string;
  cardTitle: string;
  cardSubtitle: string;
  cardDetailedText: string;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  // Animation variants for timeline entry
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const sparkleVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: "easeInOut" } },
  };

  return (
    <div className="w-full" ref={containerRef}>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={sparkleVariants}
        className="text-center"
      >
        <SparklesPreview title="Academic Background" />
      </motion.div>

      <div ref={ref} className="relative mx-auto max-w-7xl pb-20">
        {data.map((item, index) => (
          <motion.div
            key={index}
            className="flex justify-start pt-10 md:gap-10 md:pt-40"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={itemVariants}
          >
            <div className="sticky top-40 z-40 flex max-w-xs flex-col items-center self-start md:w-full md:flex-row lg:max-w-sm">
              <div className="absolute left-3 flex size-10 items-center justify-center rounded-full bg-white dark:bg-black md:left-3">
                <div className="size-4 rounded-full border border-neutral-300 bg-neutral-200 p-2 dark:border-neutral-700 dark:bg-neutral-800" />
              </div>
              <h3 className="text-gray_gradient hidden text-xl font-bold dark:text-neutral-500 md:block md:pl-20 md:text-5xl ">
                {item.title}
              </h3>
            </div>

            <div className="relative w-full pl-20 pr-4 md:pl-4">
              <h3 className="text-gray_gradient mb-4 block text-left text-2xl font-bold md:hidden">
                {item.title}
              </h3>
              <div className="text-gray_gradient flex items-center">
                <span className="mr-2 text-2xl">🎓</span>
                <h2>{item.cardTitle}</h2>
              </div>
              <div className="ml-2 text-white">
                <div className="flex items-center text-neutral-400">
                  <span className="mr-2 text-xl">🏫</span>
                  <h3>{item.cardSubtitle}</h3>
                </div>
                <div className="flex items-start text-neutral-400">
                  <span className="mr-2 text-lg">📝</span>
                  <p>{item.cardDetailedText}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}

        <div
          style={{
            height: height + "px",
          }}
          className="absolute left-8 top-0 w-[2px] overflow-hidden bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-0% via-neutral-200 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] dark:via-neutral-700 md:left-8"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] rounded-full bg-gradient-to-t from-purple-500 from-0% via-blue-500 via-10% to-transparent"
          />
        </div>
      </div>
    </div>
  );
};
