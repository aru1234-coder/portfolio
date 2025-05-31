import React from "react";
import { BlurFade } from "./magicui/BlurFade";
import Image from "next/image";

const Experience = () => {
  return (
    <div className="mb-10">
      <BlurFade delay={0.8} inView>
        <h1 className="font-bold text-xl">Work Experience</h1>
      </BlurFade>

      <BlurFade delay={0.9} inView>
        <div className="py-3 space-y-2">
          <div className="flex justify-between">
            <div className="flex gap-x-3">
              <div className="rounded-full h-12 w-12 border-2 overflow-hidden">
                <Image
                  src="/assets/images/logo1.jpg"
                  alt=""
                  width={300}
                  height={100}
                />
              </div>
              <div className="flex flex-col">
                <div className="font-bold text-sm">
                  Pheonix Advanced Softwares Pvt. Ltd.
                </div>
                <div className="text-sm">Full Stack Developer</div>
              </div>
            </div>
            <div className="text-gray-500 text-sm">Feb 2024 - Current</div>
          </div>

          <div className="flex justify-between">
            <div className="flex gap-x-3">
              <div className="rounded-full h-12 w-12 border-2 overflow-hidden p-2">
                <Image
                  src="/assets/images/logo3.png"
                  alt=""
                  width={50}
                  objectFit="cover"
                  height={50}
                />
              </div>
              <div className="flex flex-col">
                <div className="font-bold text-sm">Wanderleaf Technologies</div>
                <div className="text-sm">Full Stack Intern</div>
              </div>
            </div>
            <div className="text-gray-500 text-sm">Oct 2023 - Jan 2023</div>
          </div>
        </div>
      </BlurFade>
    </div>
  );
};

export default Experience;
