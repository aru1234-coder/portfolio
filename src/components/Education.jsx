import React from "react";
import { BlurFade } from "./magicui/BlurFade";
import Image from "next/image";

const Education = () => {
  return (
    <div className="mb-10">
      <BlurFade delay={0.8} inView>
        <h1 className="font-bold text-xl">Education</h1>
      </BlurFade>

      <BlurFade delay={0.5} inView>
        <div className="py-3 space-y-2">
          <div className="flex justify-between">
            <div className="flex gap-x-3">
              <div className="rounded-full h-12 w-12 border-2 overflow-hidden">
                <Image
                  src="/assets/images/education-logo.jpg"
                  alt=""
                  width={300}
                  height={100}
                />
              </div>
              <div className="flex flex-col">
                <div className="font-bold text-sm">Banasthali Vidyapith</div>
                <div className="text-sm">
                  B.Tech in Electrical & Electronics
                </div>
              </div>
            </div>
            <div className="text-gray-500 text-sm">July 2019 - Jun 2023</div>
          </div>
        </div>
      </BlurFade>
    </div>
  );
};

export default Education;
