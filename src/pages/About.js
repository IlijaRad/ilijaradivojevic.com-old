import DeveloperIcon from "../assets/images/DeveloperIllustration.svg";
const About = () => {
  return (
    <div className="relative mx-[10vw]">
      <div className="relative grid grid-cols-4 gap-x-4 md:grid-cols-8 lg:grid-cols-12 lg:gap-x-6 mx-auto max-w-7xl lg: mb-24 h-auto pt-24 lg:min-h-[40rem] lg:pb-12 lg:mb-64">
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
        </div>
      </div>
    </div>
  );
};

export default About;
