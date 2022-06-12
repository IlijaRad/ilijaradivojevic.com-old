import DeveloperIcon from "../assets/images/DeveloperIllustration.svg";
import RightArrow from "../assets/icons/RightArrow";
import Resume from "../assets/documents/Resume.pdf";

const About = () => {
  return (
    <div className="mx-6 md:mx-[10vw]">
      <div className="grid grid-cols-4 gap-x-4 md:grid-cols-8 lg:grid-cols-12 lg:gap-x-6 mx-auto max-w-7xl lg: mb-24 h-auto pt-24 lg:min-h-[40rem] lg:pb-12 lg:mb-64">
        <div className="col-span-full mb-12 lg:mb-0 flex items-center justify-center lg:col-span-7 lg:col-start-6 lg:-mt-24 lg:-mr-5vw lg:px-0">
          <img
            className="h-auto w-full object-contain max-h-75vh"
            src={DeveloperIcon}
            alt=""
          />
        </div>
        <div className="col-span-full pt-6 lg:col-start-1 lg:row-start-1 lg:flex lg:h-full lg:flex-col lg:col-span-5">
          <h2 className="leading-tight text-3xl md:text-4xl text-black dark:text-white">
            Hi, I am Ilija Radivojević, I am a front-end developer.
          </h2>
          <p className="leading-tight text-3xl md:text-4xl text-gray-400 dark:text-gray-dark mt-3">
            I build front-ends with simple modern UIs using latest web
            technologies.
          </p>
          <a
            href={Resume}
            className="text-primary inline-flex items-center text-left font-medium focus:outline-none cursor-pointer transition mt-20"
            target="_blank"
            rel="noreferrer"
          >
            <span className="mr-8 text-xl font-medium peer">
              You can find my resume here
            </span>
            <div className="border-2 border-gray-200 outline-none dark:border-gray-600 hover:border-black dark:hover:border-white peer-hover:border-black dark:peer-hover:border-white transition rounded-full w-[60px] h-[60px] flex items-center justify-center shrink-0">
              <RightArrow />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
