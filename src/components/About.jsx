import React from "react";
import { BlurFade } from "./magicui/BlurFade";

const About = () => {
  return (
    <div className="mb-10">
      <BlurFade delay={0.6} inView>
        <h1 className="font-bold text-xl">About</h1>
      </BlurFade>
      <BlurFade delay={0.7} inView>
        <p className="text-gray-600">
          I'm a passionate full-stack developer with a strong foundation in
          building dynamic and responsive web applications. With expertise in
          Next.js, PHP, MySQL and modern frontend technologies like HTML, CSS,
          and JavaScript, I craft seamless digital experiences. I specialize in
          creating scalable, high-performance websites that blend functionality
          with aesthetic design. Whether it's backend logic or frontend
          elegance, I strive to deliver robust and user-centric solutions.
          Explore my portfolio to see how I can bring your ideas to life!
        </p>
      </BlurFade>
    </div>
  );
};

export default About;
