import DeveloperIllustration from "../assets/images/DeveloperIllustration";
import RightArrow from "../assets/icons/RightArrow";
import Resume from "../assets/documents/Resume.pdf";
import { useEffect } from "react";
import setTitle from "../helpers/setTitle";

const About = () => {
  useEffect(() => {
    setTitle("Ilija Radivojevic");
  }, []);

  return (
    <div className="mx-auto mb-24 grid h-auto max-w-7xl grid-cols-4 gap-x-4 md:grid-cols-8 lg:mb-64 lg:min-h-[40rem] lg:grid-cols-12 lg:gap-x-6 lg:pb-12">
      <div className="lg:-mr-5vw col-span-full mb-12 flex items-center lg:col-span-7 lg:col-start-6 lg:mb-0 lg:-mt-[240px]">
        <DeveloperIllustration />
      </div>
      <div className="col-span-full pt-6 lg:col-span-5 lg:col-start-1 lg:row-start-1 lg:flex lg:h-full lg:flex-col">
        <h2 className="text-3xl leading-tight text-black dark:text-white md:text-4xl">
          Hi, I am Ilija Radivojević, I am a front-end developer.
        </h2>
        <p className="mt-3 text-3xl leading-tight text-gray-400 dark:text-gray-dark md:text-4xl">
          I build front-ends with simple modern UIs using latest web
          technologies.
        </p>
        <a
          href={Resume}
          className="text-primary mt-20 inline-flex cursor-pointer items-center text-left font-medium transition focus:outline-none"
          target="_blank"
          rel="noreferrer"
        >
          <span className="peer mr-8 text-xl font-medium">
            You can find my resume here
          </span>
          <div className="flex h-[60px] w-[60px] shrink-0 items-center justify-center rounded-full border-2 border-gray-200 outline-none transition hover:border-black peer-hover:border-black dark:border-gray-600 dark:hover:border-white dark:peer-hover:border-white">
            <RightArrow />
          </div>
        </a>
      </div>
    </div>
  );
};

export default About;
