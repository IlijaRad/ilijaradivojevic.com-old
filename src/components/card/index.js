const Card = ({ title, body, gitHubLink, websiteLink }) => {
  return (
    <div className="bg-gray-100 dark:bg-secondary relative col-span-full mt-12 flex flex-col items-start rounded-lg px-8 py-12 lg:col-span-4 lg:mt-0 lg:px-12">
      <img className="h-32 w-auto flex-none object-contain" src="" alt="" />
      <div className="mb-4 flex h-48 flex-none items-end">
        <h3 className="text-2xl font-medium md:text-3xl text-black dark:text-white">
          {title}
        </h3>
      </div>
      <div className="text-lg text-gray-500 dark:text-gray-dark mb-16 max-w-sm flex-auto prose prose-light dark:prose-dark">
        {body}
      </div>
      <div className="text-primary inline-flex justify-between w-full items-center text-left font-medium focus:outline-none cursor-pointer transition flex-col xl:flex-row">
        <a
          href={gitHubLink}
          className="border dark:border-gray-600 border-gray-300 px-6 py-2 rounded-md w-full xl:w-auto text-center mb-4 xl:mb-0 dark:hover:border-white dark:hover:bg-white dark:hover:text-black hover:bg-gray-900 hover:text-white hover:border-gray-900 transition"
        >
          Github
        </a>
        <a
          href={websiteLink}
          className="border dark:border-gray-600 border-gray-300 px-6 py-2 rounded-md w-full xl:w-auto text-center dark:hover:border-white dark:hover:bg-white dark:hover:text-black hover:bg-gray-900 hover:text-white hover:border-gray-900 transition"
        >
          Live Website
        </a>
      </div>
    </div>
  );
};

export default Card;
