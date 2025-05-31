import React from "react";
import { BlurFade } from "./magicui/BlurFade";
import { RainbowButton } from "./magicui/RainbowButton";
import Link from "next/link";

const Projects = () => {
  return (
    <div className="mb-20">
      <BlurFade delay={0.3} inView>
        <div className="flex items-center justify-center mb-2">
          <button
            className="flex items-center gap-x-2 rounded-md bg-black py-1 px-4 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            My Projects
          </button>
        </div>
      </BlurFade>

      <BlurFade delay={0.4} inView>
        <div className="mb-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center">
            Check out my latest work
          </h1>

          <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            I've worked on a variety of projects, from simple websites to
            complex web applications. Here are a few of my favorites.
          </p>
        </div>

        <div className="flex gap-x-4">
          {/* first project */}
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <Link href="https://www.aus-places.com/">
              <img
                className="rounded-t-lg"
                src="/assets/images/project1.png"
                alt="projectOneImage"
              />
            </Link>
            <div className="p-2">
              <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                Aus Places
              </h5>
              <p className="mb-3 text-gray-700 dark:text-gray-700 text-sm">
                Aus Places is a fully dynamic web application featuring real
                data from across Australia. It showcases various categories,
                areas, and businesses that actually exist in the country.
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {[
                  "Next.js",
                  "Node.js",
                  "MySQL",
                  "JavaScript",
                  "Git",
                  "TailwindCSS",
                ].map((tech) => (
                  <button
                    key={tech}
                    className="bg-gray-200 text-gray-800 px-1 py-1 rounded-md shadow-sm hover:bg-gray-300 transition duration-200 text-xs font-semibold"
                  >
                    {tech}
                  </button>
                ))}
              </div>

              <div>
                <Link href="https://dsp.audienceconnect.ai/">
                  <button
                    className="flex items-center gap-x-2 rounded-md bg-slate-800 py-1 px-2.5 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                  >
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.49996 1.80002C4.35194 1.80002 1.79996 4.352 1.79996 7.50002C1.79996 10.648 4.35194 13.2 7.49996 13.2C10.648 13.2 13.2 10.648 13.2 7.50002C13.2 4.352 10.648 1.80002 7.49996 1.80002ZM0.899963 7.50002C0.899963 3.85494 3.85488 0.900024 7.49996 0.900024C11.145 0.900024 14.1 3.85494 14.1 7.50002C14.1 11.1451 11.145 14.1 7.49996 14.1C3.85488 14.1 0.899963 11.1451 0.899963 7.50002Z"
                        fill="currentColor"
                        fillRule="evenodd"
                        clipRule="evenodd"
                      ></path>
                      <path
                        d="M13.4999 7.89998H1.49994V7.09998H13.4999V7.89998Z"
                        fill="currentColor"
                        fillRule="evenodd"
                        clipRule="evenodd"
                      ></path>
                      <path
                        d="M7.09991 13.5V1.5H7.89991V13.5H7.09991zM10.375 7.49998C10.375 5.32724 9.59364 3.17778 8.06183 1.75656L8.53793 1.24341C10.2396 2.82218 11.075 5.17273 11.075 7.49998 11.075 9.82724 10.2396 12.1778 8.53793 13.7566L8.06183 13.2434C9.59364 11.8222 10.375 9.67273 10.375 7.49998zM3.99969 7.5C3.99969 5.17611 4.80786 2.82678 6.45768 1.24719L6.94177 1.75281C5.4582 3.17323 4.69969 5.32389 4.69969 7.5 4.6997 9.67611 5.45822 11.8268 6.94179 13.2472L6.45769 13.7528C4.80788 12.1732 3.9997 9.8239 3.99969 7.5z"
                        fill="currentColor"
                        fillRule="evenodd"
                        clipRule="evenodd"
                      ></path>
                      <path
                        d="M7.49996 3.95801C9.66928 3.95801 11.8753 4.35915 13.3706 5.19448 13.5394 5.28875 13.5998 5.50197 13.5055 5.67073 13.4113 5.83948 13.198 5.89987 13.0293 5.8056 11.6794 5.05155 9.60799 4.65801 7.49996 4.65801 5.39192 4.65801 3.32052 5.05155 1.97064 5.8056 1.80188 5.89987 1.58866 5.83948 1.49439 5.67073 1.40013 5.50197 1.46051 5.28875 1.62927 5.19448 3.12466 4.35915 5.33063 3.95801 7.49996 3.95801zM7.49996 10.85C9.66928 10.85 11.8753 10.4488 13.3706 9.6135 13.5394 9.51924 13.5998 9.30601 13.5055 9.13726 13.4113 8.9685 13.198 8.90812 13.0293 9.00238 11.6794 9.75643 9.60799 10.15 7.49996 10.15 5.39192 10.15 3.32052 9.75643 1.97064 9.00239 1.80188 8.90812 1.58866 8.9685 1.49439 9.13726 1.40013 9.30601 1.46051 9.51924 1.62927 9.6135 3.12466 10.4488 5.33063 10.85 7.49996 10.85z"
                        fill="currentColor"
                        fillRule="evenodd"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    Website
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* second project */}
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <Link href="https://dsp.audienceconnect.ai/">
              <img
                className="rounded-t-lg"
                src="/assets/images/project2.png"
                alt="projectTwoImage"
              />
            </Link>
            <div className="p-2">
              <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                Audience Connect
              </h5>
              <p className="mb-3 text-sm text-gray-700 dark:text-gray-400">
                Audience Connect is a campaign analytics platform that connects
                multiple users managing different campaigns. It displays key
                metrics such as impressions, clicks, CTR, and more for each
                campaign, enabling data-driven decision-making.
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {[
                  "Next.js",
                  "Node.js",
                  "MySQL",
                  "JavaScript",
                  "Git",
                  "TailwindCSS",
                  "Jwt Token",
                ].map((tech) => (
                  <button
                    key={tech}
                    className="bg-gray-200 text-gray-800 px-1 py-1 rounded-md shadow-sm hover:bg-gray-300 transition duration-200 text-xs font-semibold"
                  >
                    {tech}
                  </button>
                ))}
              </div>

              <div>
                <Link href="https://dsp.audienceconnect.ai/">
                  <button
                    className="flex items-center gap-x-2 rounded-md bg-slate-800 py-1 px-2.5 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                  >
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.49996 1.80002C4.35194 1.80002 1.79996 4.352 1.79996 7.50002C1.79996 10.648 4.35194 13.2 7.49996 13.2C10.648 13.2 13.2 10.648 13.2 7.50002C13.2 4.352 10.648 1.80002 7.49996 1.80002ZM0.899963 7.50002C0.899963 3.85494 3.85488 0.900024 7.49996 0.900024C11.145 0.900024 14.1 3.85494 14.1 7.50002C14.1 11.1451 11.145 14.1 7.49996 14.1C3.85488 14.1 0.899963 11.1451 0.899963 7.50002Z"
                        fill="currentColor"
                        fillRule="evenodd"
                        clipRule="evenodd"
                      ></path>
                      <path
                        d="M13.4999 7.89998H1.49994V7.09998H13.4999V7.89998Z"
                        fill="currentColor"
                        fillRule="evenodd"
                        clipRule="evenodd"
                      ></path>
                      <path
                        d="M7.09991 13.5V1.5H7.89991V13.5H7.09991zM10.375 7.49998C10.375 5.32724 9.59364 3.17778 8.06183 1.75656L8.53793 1.24341C10.2396 2.82218 11.075 5.17273 11.075 7.49998 11.075 9.82724 10.2396 12.1778 8.53793 13.7566L8.06183 13.2434C9.59364 11.8222 10.375 9.67273 10.375 7.49998zM3.99969 7.5C3.99969 5.17611 4.80786 2.82678 6.45768 1.24719L6.94177 1.75281C5.4582 3.17323 4.69969 5.32389 4.69969 7.5 4.6997 9.67611 5.45822 11.8268 6.94179 13.2472L6.45769 13.7528C4.80788 12.1732 3.9997 9.8239 3.99969 7.5z"
                        fill="currentColor"
                        fillRule="evenodd"
                        clipRule="evenodd"
                      ></path>
                      <path
                        d="M7.49996 3.95801C9.66928 3.95801 11.8753 4.35915 13.3706 5.19448 13.5394 5.28875 13.5998 5.50197 13.5055 5.67073 13.4113 5.83948 13.198 5.89987 13.0293 5.8056 11.6794 5.05155 9.60799 4.65801 7.49996 4.65801 5.39192 4.65801 3.32052 5.05155 1.97064 5.8056 1.80188 5.89987 1.58866 5.83948 1.49439 5.67073 1.40013 5.50197 1.46051 5.28875 1.62927 5.19448 3.12466 4.35915 5.33063 3.95801 7.49996 3.95801zM7.49996 10.85C9.66928 10.85 11.8753 10.4488 13.3706 9.6135 13.5394 9.51924 13.5998 9.30601 13.5055 9.13726 13.4113 8.9685 13.198 8.90812 13.0293 9.00238 11.6794 9.75643 9.60799 10.15 7.49996 10.15 5.39192 10.15 3.32052 9.75643 1.97064 9.00239 1.80188 8.90812 1.58866 8.9685 1.49439 9.13726 1.40013 9.30601 1.46051 9.51924 1.62927 9.6135 3.12466 10.4488 5.33063 10.85 7.49996 10.85z"
                        fill="currentColor"
                        fillRule="evenodd"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    Website
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </BlurFade>
    </div>
  );
};

export default Projects;
