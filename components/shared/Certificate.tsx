"use client";
import React from "react";

import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "../ui/CanvasRevealEffect";
import { FaDownload } from "react-icons/fa";
import Button from "../ui/Button";
import { SparklesPreview } from "./SparkelComp";

const Certificate = () => {
  return (
    <section className="w-full py-20 px-5 sm:px-10">
          <SparklesPreview title="Professional Certifications" />
      <div className="my-20 flex flex-col items-center justify-center gap-4 lg:flex-row">
        <Card
          title="Meta Frontend Developer"
          icon={<AceternityIcon order="Meta certificate" />}
          description="Holder of the Meta Frontend Developer Certificate, showcasing mastery in creating innovative and user-centric web experiences.Equipped with the skills to build cutting-edge frontend solutions for a dynamic digital landscape."
          link="/meta frontend developer certificate.pdf"
        >
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-emerald-900"
          />
        </Card>
        <Card
          title="Complete Web Course"
          icon={<AceternityIcon order="PH certificate" />}
          description=" Certified in completed web development course by programminghero, showcasing proficiency in structuring content and styling web pages. Committed to delivering visually appealing and well-structured solutions."
          link="/programmingHeroCertificate.pdf"
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-black"
            colors={[
              [236, 72, 153],
              [232, 121, 249],
            ]}
            dotSize={2}
          />
        </Card>
        <Card
          title="Javascript Course"
          icon={<AceternityIcon order="Scrimba certificate" />}
          description=" Earned Scrimba certification in JavaScript, demonstrating
                expertise in dynamic web development. Excited to apply advanced
                scripting skills for creating interactive and responsive web
                applications."
          link="/js scrimba.pdf"
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-sky-600"
            colors={[[125, 211, 252]]}
          />
        </Card>
      </div>
    </section>
  );
};

const Card = ({
  title,
  icon,
  link,
  children,
  description,
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  description: string;
  link?: string;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group/canvas-card relative mx-auto flex w-full max-w-sm items-center  justify-center rounded-3xl border border-white/[0.2] p-4 dark:border-white/[0.2] lg:h-[35rem]"
    >
      <Icon className="absolute -left-3 -top-3 size-6 text-black dark:text-white" />
      <Icon className="absolute -bottom-3 -left-3 size-6 text-black dark:text-white" />
      <Icon className="absolute -right-3 -top-3 size-6 text-black dark:text-white" />
      <Icon className="absolute -bottom-3 -right-3 size-6 text-black dark:text-white" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 size-full"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20">
        <div className="absolute left-1/2 top-1/2 mx-auto flex w-full -translate-x-1/2 -translate-y-1/2 items-center justify-center text-center  transition duration-200 group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 ">
          {icon}
        </div>
        <h2 className="relative z-10 mt-4 text-center text-3xl font-bold text-black opacity-0  transition duration-200 group-hover/canvas-card:-translate-y-2 group-hover/canvas-card:text-white group-hover/canvas-card:opacity-100 dark:text-white ">
          {title}
        </h2>
        <h2
          className="relative z-10 mt-4 text-center text-sm font-bold text-black opacity-0  transition duration-200 group-hover/canvas-card:-translate-y-2 group-hover/canvas-card:text-white group-hover/canvas-card:opacity-100 dark:text-white"
          style={{ color: "#e4ecff" }}
        >
          {description}
        </h2>
        <div className="mt-4 ">
          <a href={link} download>
            <FaDownload className="mx-auto text-white-100" />
          </a>
        </div>
      </div>
    </div>
  );
};

const AceternityIcon = ({ order }: { order: string }) => {
  return (
    <div>
      <Button name={order} isBeam containerClass="relative inline-flex h-12 overflow-hidden rounded-full p-px focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
       
      </Button>
    </div>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};

export default Certificate;
