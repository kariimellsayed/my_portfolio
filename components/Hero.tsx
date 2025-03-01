import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import Image from "next/image";
import { HoverBorderGradient } from "./ui/HoverBorder";

const Hero = () => {
  return (
    <section id="hero" className="pb-20 pt-36 h-[calc(100vh-56px)] relative">
      {/**
       *  UI: Spotlights
       *  Link: https://ui.aceternity.com/components/spotlight
       */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>
      {/* Background Grid From Aceternity */}
      <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.05] bg-grid-black/[0.2] absolute top-0 left-0 flex items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="flex justify-center relative my-20 z-10">
          <div className="max-w-[89vh] md:max-w-2xl lg:max-w-3xl flex flex-col justify-center items-center">
            <h2 className="uppercase text-xs tracking-widest mt-10 text-blue-100 text-center max-w-80">
              Dynamic Web Magic with Next.js
            </h2>

            <TextGenerateEffect
              className="text-center text-[40px] md:text-5xl lg:text-6xl"
              words="Transforming Concepts into Seamless User
                Experiences"
            />

            <div className="flex justify-center mb-5">
              <HoverBorderGradient
                containerClassName="rounded-full overflow-hidden border-2"
                as="button"
                className="dark:bg-black bg-white text-black dark:text-white flex justify-center items-center w-40 h-40"
              >
                <div>
                  <Image
                    src={"/karim.jpg"}
                    width={200}
                    height={200}
                    alt="kariimelsayed"
                    className="object-cover w-full h-full rounded-full"
                  />
                </div>
              </HoverBorderGradient>
            </div>

            <p className="text-center md:tracking-wider text-sm md:text-lg lg:text-xl mb-4">
              Hi I&apos;m Karim, A Front-End Developer with React.js & Next.js
              Based in Egypt.
            </p>

            <a href="#about">
              <MagicButton
                title="Show my work"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
