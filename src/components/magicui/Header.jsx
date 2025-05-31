import Image from "next/image";
import { BlurFade } from "./BlurFade";

export default function Header() {
  return (
    <section id="header">
      <div className="flex w-full py-12">
        <div className="w-3/4">
          <BlurFade delay={0.25} inView>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none mb-2">
              Hi, I'm Arushi 👋
            </h2>
          </BlurFade>
          <BlurFade delay={0.5} inView>
            <span className="inline-block max-w-[600px] md:text-xl">
              Full Stack Developer with hands-on experience in building scalable
              web applications using modern technologies like React, Node.js,
              and MongoDB. Passionate about clean code, intuitive UI/UX, and
              solving real-world problems through technology.
            </span>
          </BlurFade>
        </div>
        <BlurFade delay={0.5} inView>
          <div className="rounded-full h-40 w-40 overflow-hidden border-2">
            <Image
              alt=""
              src="/assets/images/profile.jpg"
              width={300}
              height={100}
            />
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
