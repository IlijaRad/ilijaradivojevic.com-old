import DeveloperIllustration from "../public/assets/images/DeveloperIllustration";
import RightArrow from "../public/assets/icons/RightArrow";
import Head from "next/head";

const About = () => {
  return (
    <>
      <Head>
        <title>Ilija Radivojevic</title>
        <meta
          name="description"
          content="Hello. My name is Ilija Radivojevic and I am a front end developer. I try to make life easier and world a better place by writing good software."
        />
        <meta
          content="Ilija Radivojevic, Front End Developer, Javascript, React, Typescript, Software Development"
          name="keywords"
        ></meta>
      </Head>
      <div className="mx-auto mb-16 grid h-auto max-w-7xl grid-cols-4 gap-x-4 md:grid-cols-8 lg:min-h-[40rem] lg:grid-cols-12 lg:gap-x-6 lg:pb-12">
        <div className="col-span-full mb-12 flex items-center lg:col-span-7 lg:col-start-6 lg:mb-0 lg:-mt-[240px]">
          <DeveloperIllustration />
        </div>
        <div className="col-span-full pt-6 lg:col-span-5 lg:col-start-1 lg:row-start-1 lg:flex lg:h-full lg:flex-col">
          <h1 className="text-3xl leading-tight md:text-4xl">
            Hi, I am Ilija Radivojevic, I am a front-end developer.
          </h1>
          <p className="mt-3 text-3xl leading-tight text-gray-400 dark:text-gray-dark md:text-4xl">
            I build front-ends with simple modern UIs using latest web
            technologies.
          </p>
          <a
            href="/assets/documents/Resume.pdf"
            className="mt-20 inline-flex cursor-pointer items-center text-left font-medium transition focus:outline-none"
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
    </>
  );
};

export default About;
