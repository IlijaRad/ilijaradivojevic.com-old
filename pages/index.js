import DeveloperIllustration from "../public/assets/images/DeveloperIllustration";
import Head from "next/head";
import { ArrowLink } from "../components/arrow-button";

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

          <ArrowLink
            href="/assets/documents/Resume.pdf"
            direction="right"
            className="mt-20"
            prefetch="intent"
            target="_blank"
            rel="noreferrer"
          >
            You can find my resume here
          </ArrowLink>
        </div>
      </div>
    </>
  );
};

export default About;
