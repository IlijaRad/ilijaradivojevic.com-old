const Card = ({
  title,
  body,
  gitHubLink,
  websiteLink,
  imgSrc = "",
  imgAlt = "",
}) => {
  return (
    <div className="bg-gray-100 dark:bg-secondary relative col-span-full mt-12 flex flex-col items-start rounded-lg px-8 pt-12 pb-8 md:col-span-4 lg:mt-0 xl:px-12 overflow-hidden">
      <img className="w-auto lg:h-52 self-center" src={imgSrc} alt={imgAlt} />
      <div className="mb-4 h-20 sm:h-24 md:h-36 flex flex-none items-end">
        <h3 className="text-2xl font-medium md:text-3xl text-black dark:text-white">
          {title}
        </h3>
      </div>
      <div className="text-lg text-gray-500 dark:text-gray-dark mb-16 max-w-sm flex-auto prose prose-light dark:prose-dark">
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
  );
};

export default Card;
