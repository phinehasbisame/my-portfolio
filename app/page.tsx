import DecorateIcon from "@/components/common/ui/DecorateIcon";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  TiSocialGithub,
  TiSocialLinkedin,
  TiSocialTwitter,
} from "react-icons/ti";
import About from "./about/page";

export const metadata: Metadata = {
  title: "Phinehas Osei-Tutu | Frontend Engineer",
  description: "This is the homepage of Phinehas' professional porfolio",
};

const Home: React.FC = () => {
  return (
    <>
      <div className="md:h-[80vh] my-5  flex flex-col-reverse md:gap-10 md:flex-row">
        <div className="left h-full md:w-1/2 flex flex-col justify-center gap-2 md:gap-5">
          <h2 className="text-xl md:text-5xl text-white">
            Building{" "}
            <span className="text-sky-500">
              real-world, creative, innovative
            </span>{" "}
            solutions with technology.
          </h2>
          <p className="text-sm md:text-base">
            Hello there, I am <Link href={`/about`}>Phinehas</Link> , a software
            developer from Ghana. Experienced in collaborating effectively with
            cross-functional teams to deliver high-quality solutions that meet
            user needs and enhance overall user experience. Possesses a strong
            understanding in front-end and a little on mobile development.
          </p>
          <div className="media inline-flex gap-3">
            <DecorateIcon route="https://linkedin.com/in/poseitutu10">
              <TiSocialLinkedin size={25} />
            </DecorateIcon>
            <DecorateIcon route="https://github.com/poseitutu10">
              <TiSocialGithub size={25} />
            </DecorateIcon>
            <DecorateIcon route="#">
              <TiSocialTwitter size={25} />
            </DecorateIcon>
          </div>
        </div>
        <div className="right md:w-1/2 px-5 py-5 md:px-0 md:py-0 md:h-[40vh]">
          <Image
            src={`/coding.jpeg`}
            alt="coding-picture"
            width={500}
            height={500}
            className="rounded-2xl md:rounded-full"
            priority={true}
          />
        </div>
      </div>
      {/* <About /> */}
    </>
  );
};

export default Home;
