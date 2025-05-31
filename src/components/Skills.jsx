import React from "react";
import { BlurFade } from "./magicui/BlurFade";
import RainbowButtonDemo from "./RainbowButtonDemo";

const Skills = () => {
  return (
    <div className="mb-20">
      <BlurFade delay={0.2} inView>
        <h1 className="font-bold text-xl py-2">Skills</h1>
      </BlurFade>

      <BlurFade delay={0.3} inView>
        <div className="flex flex-wrap gap-x-2">
          <div className="flex items-center justify-center">
            <button
              className="flex items-center gap-x-2 rounded-md bg-black py-0.5 px-3 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              Next.js
            </button>
          </div>
          <div className="flex items-center justify-center">
            <button
              className="flex items-center gap-x-2 rounded-md bg-black py-0.5 px-3 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              Node.js
            </button>
          </div>
          <div className="flex items-center justify-center">
            <button
              className="flex items-center gap-x-2 rounded-md bg-black py-0.5 px-3 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              Javascript
            </button>
          </div>
          <div className="flex items-center justify-center">
            <button
              className="flex items-center gap-x-2 rounded-md bg-black py-0.5 px-3 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              MySQL
            </button>
          </div>
          <div className="flex items-center justify-center">
            <button
              className="flex items-center gap-x-2 rounded-md bg-black py-0.5 px-3 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              Git
            </button>
          </div>
          <div className="flex items-center justify-center">
            <button
              className="flex items-center gap-x-2 rounded-md bg-black py-0.5 px-3 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              TailwindCSS
            </button>
          </div>

          <div className="flex items-center justify-center">
            <button
              className="flex items-center gap-x-2 rounded-md bg-black py-0.5 px-3 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              HTML / CSS
            </button>
          </div>
        </div>
      </BlurFade>
    </div>
  );
};

export default Skills;
