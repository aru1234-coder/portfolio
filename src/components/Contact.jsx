import React from "react";
import { BlurFade } from "./magicui/BlurFade";
import { RainbowButton } from "./magicui/RainbowButton";
import Link from "next/link";

const Contact = () => {
  return (
    <div className="mb-40">
      <BlurFade delay={0.2} inView>
        <div className="flex items-center justify-center mb-2">
          <button
            className="flex items-center gap-x-2 rounded-md bg-black py-1 px-4 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            Contact
          </button>
        </div>
      </BlurFade>

      <BlurFade delay={0.3} inView>
        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-2">
          Get in Touch
        </h1>

        <div className="flex justify-center items-center">
          <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Want to chat? Just shoot me a dm{" "}
            <Link
              className="text-blue-600 hover:underline"
              href="https://www.linkedin.com/in/arushi-singhal-2b09b5220/"
            >
              with a direct question on twitter{" "}
            </Link>
            and I'll respond whenever I can. I will ignore all soliciting.
          </p>
        </div>
      </BlurFade>
    </div>
  );
};

export default Contact;
