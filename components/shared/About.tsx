"use client";
import { useState } from "react";
import Button from "../ui/Button";
import { skillsArray } from "@/constants";
import Image from "next/image";
import { TiTick } from "react-icons/ti";
import { IoCopyOutline } from "react-icons/io5";

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(" adrian@jsmastery.pro");
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <section className="my-20 px-5 sm:px-10" id="about">


      <div className="grid h-full grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3 xl:grid-rows-6">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <Image
              src="/grid1.png"
              alt="grid-1"
              width={300}
              height={300}
              className="mx-auto h-fit w-full rounded-full object-contain sm:h-[276px]"
            />

            <div>
              <p className="grid-headtext">Hi, I’m Hasibul Hasan Nayon</p>
              <p className="grid-subtext">
              With 1.5 years of hands-on project experience, I have sharpened my skills in both frontend and backend development, crafting dynamic and responsive websites that captivate users.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <div className="tech-images-container">
              {skillsArray?.map((skill, index) => (
                <Image
                  key={index}
                  width={40}
                  height={40}
                  src={skill.imageUrl}
                  alt={skill.name}
                  className=" mt-16 object-contain " // Add class for styling
                />
              ))}
            </div>

            <div>
              <p className="grid-headtext mt-12">Tech Stack</p>
              <p className="grid-subtext">
              My expertise spans a wide array of languages, frameworks, and tools, empowering me to construct robust, scalable, and innovative applications that push boundaries.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="flex h-fit w-full items-center justify-center rounded-3xl sm:h-[326px]">
            <Image src='/globe.png'  width={250} height={250} alt="globe"/>
            </div>
            <div>
              <p className="grid-headtext">
                I’m very flexible with time zone communications & locations
              </p>
              <p className="grid-subtext">
                I&apos;m based in khulna, Bangladesh and open to remote work
                worldwide.
              </p>
              <a href="#contact">
                <Button
                  name="Contact Me"
                  isBeam
                  containerClass="w-full mt-10"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/grid3.png"
              alt="grid-3"
              className="h-fit w-full object-contain sm:h-[266px]"
            />

            <div>
              <p className="grid-headtext">My Coding Adventur</p>
              <p className="grid-subtext">
                I love cracking puzzles and creating cool stuff with code.
                Programming isn&apos;t just my job—it&apos;s my playground. I get excited
                about new tech toys and always push myself to level up my skills
                with boundless energy.
              </p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <Image
              src="/grid4.png"
              width={100}
              height={100}
              alt="grid-4"
              className="h-fit w-full object-cover sm:h-[276px] sm:object-top md:h-[126px]"
            />

            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact me</p>
              <div className="copy-container">
                <Button
                  name={
                    hasCopied ? "Email is Copied!" : "Copy my email address"
                  }
                  icon={
                    hasCopied ? (
                      <TiTick className="text-xl" />
                    ) : (
                      <IoCopyOutline />
                    )
                  }
                  position="left"
                  handleClick={handleCopy}
                  containerClass="mt-5"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
