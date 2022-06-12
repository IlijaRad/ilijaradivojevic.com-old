const Card = ({
  title,
  body,
  gitHubLink,
  websiteLink,
  imgSrc = "",
  imgAlt = "",
}) => {
  return (
    <a
      href={gitHubLink}
      class="flex flex-col overflow-hidden shadow-lg rounded-lg bg-gray-100 dark:bg-secondary"
    >
      <div class="flex-shrink-0">
        <img class="h-[200px] w-full object-cover" src={imgSrc} alt={imgAlt} />
      </div>
      <div class="flex-1 p-6 flex flex-col justify-between">
        <div class="flex-1">
          <h3 class="mt-2 text-xl leading-7 font-bold text-black dark:text-white">
            {title}
          </h3>
          <p class="mt-3 leading-6 text-base line-clamp-4 text-gray-500 dark:text-gray-dark prose">
            {body}
          </p>
        </div>
        <div className="mt-6 text-primary flex flex-wrap justify-between w-full items-center text-left font-medium focus:outline-none cursor-pointer transition flex-col xl:flex-row">
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
    </a>
  );
};

export default Card;
