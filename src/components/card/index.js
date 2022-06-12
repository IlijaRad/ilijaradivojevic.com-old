const Card = ({
  title,
  body,
  gitHubLink,
  websiteLink,
  imgSrc = "",
  imgAlt = "",
}) => {
  return (
    <div className="bg-gray-100 dark:bg-secondary relative col-span-full mt-12 flex flex-col items-start rounded-lg  md:col-span-4 lg:mt-0 overflow-hidden">
      <img className="aspect-[1/.6] w-full" src={imgSrc} alt={imgAlt} />
      <div className="px-8 pb-8 xl:px-12 h-full flex flex-col">
        <div className="mb-4 h-16 md:h-20 2xl:h-28 flex flex-none items-end">
          <h3 className="text-2xl font-medium md:text-3xl text-black dark:text-white">
            {title}
          </h3>
        </div>
        <div className="text-lg text-gray-500 dark:text-gray-dark mb-16 flex-auto prose prose-light dark:prose-dark">
          {body}
        </div>
        <div className="text-primary flex flex-wrap justify-between w-full items-center text-left font-medium focus:outline-none cursor-pointer transition flex-col xl:flex-row">
          <a
            href={gitHubLink}
            className="border dark:border-gray-600 border-gray-300 px-6 py-2 rounded-md w-full 2xl:w-auto text-center mb-4 dark:hover:border-white dark:hover:bg-white dark:hover:text-black hover:bg-gray-900 hover:text-white hover:border-gray-900 transition"
          >
            Github
          </a>
          <a
            href={websiteLink}
            className="border dark:border-gray-600 border-gray-300 px-6 py-2 mb-4 rounded-md w-full 2xl:w-auto text-center dark:hover:border-white dark:hover:bg-white dark:hover:text-black hover:bg-gray-900 hover:text-white hover:border-gray-900 transition"
          >
            Live Website
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
