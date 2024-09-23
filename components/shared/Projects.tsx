"use client";

import { projects } from "@/constants";
import Link from "next/link";
import Button from "../ui/Button";
import { SparklesPreview } from "./SparkelComp";
import Image from "next/image";

const Projects = () => {
  return (
    <div id="projects" className="py-20">
      {/* Sparkles Title */}
      <SparklesPreview title="Signature Projects" />

      {/* Projects List */}
      <div className="flex flex-wrap items-center justify-center gap-16 p-4">
        {projects.map((item) => (
          <div
            className="flex h-[25rem] w-[80vw] items-center justify-center sm:w-96 lg:min-h-[32.5rem]"
            key={item.id}
          >
            {/* Project Card */}
            <div
              className="group relative flex flex-col items-center  p-6 shadow-lg transition-all duration-300 ease-in-out"
              style={{ width: "100%", height: "100%" }}
            >
              {/* Project Image Container */}
              <div className="relative mb-6 flex h-[20vh] w-full items-center overflow-hidden p-3 sm:w-96 lg:h-[30vh]">
                {/* Image */}
                <Image
                  src={item.img}
                  alt="cover"
                  width={350}
                  height={350}
                  className="absolute bottom-0 z-10 object-cover transition-all duration-300 ease-in-out group-hover:scale-110"
                />

                {/* Overlay on hover */}
                <div className="absolute inset-0 z-20 bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"></div>
              </div>

              {/* Project Title */}
              <h1 className="text-gray_gradient line-clamp-1 text-base font-bold md:text-xl lg:text-2xl">
                {item.name}
              </h1>

              {/* Project Description */}
              <p
                className="line-clamp-2 text-sm font-light lg:text-xl lg:font-normal"
                style={{ color: "#BEC1DD", margin: "1vh 0" }}
              >
                {item.description}
              </p>

              {/* Icons List */}
              <div className="mb-3 mt-7 flex items-center">
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-center rounded-full border border-white/[.2] bg-black"
                      style={{
                        width: "40px",
                        height: "40px",
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <img src={icon} alt={`icon-${index}`} className="p-2" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Buttons for Client, Server, Live */}
              <div className="mt-5 flex items-center gap-4">
                <Link href={item.client} target="_blank">
                  <Button name="Client" containerClass="px-7" />
                </Link>

                {item.server && (
                  <Link href={item.server} target="_blank">
                    <Button name="Server" containerClass="px-7" />
                  </Link>
                )}

                <Link href={item.livelink} target="_blank">
                  <Button name="Live" isBeam containerClass="px-7" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
