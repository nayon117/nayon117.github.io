/* eslint-disable tailwindcss/migration-from-tailwind-2 */
import { socialMedia } from "@/constants";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="flex flex-col-reverse items-center justify-between gap-6 px-5 pb-8 sm:px-10 md:flex-row">
      <p className="text-sm font-light text-white md:text-base md:font-normal">
        Copyright © 2024 Hasibul Hasan Nayon
      </p>

      <div className="flex items-center gap-6 md:gap-3">
        {socialMedia.map((info) => (
          <div
            key={info.id}
            className=" flex size-10 cursor-pointer items-center justify-center rounded-lg border border-black-300 bg-black-200 bg-opacity-75 backdrop-blur-lg"
          >
            <Link href={info.link} target="_blank">
              <Image src={info.img} alt="icons" width={20} height={20} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Footer;
