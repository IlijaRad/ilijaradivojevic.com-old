import GithubIcon from "../../assets/icons/GithubIcon";

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
      href={websiteLink}
      class="flex flex-col overflow-hidden shadow-lg rounded-lg bg-gray-100 dark:bg-secondary"
    >
      <div class="flex-shrink-0">
        <img class="h-[200px] w-full object-cover" src={imgSrc} alt={imgAlt} />
      </div>
      <div class="flex-1 p-6 flex flex-col justify-between">
        <div class="flex-1">
          <h3 class="mt-2 text-xl leading-7 font-semibold text-black dark:text-white">
            {title}
          </h3>
          <p class="mt-3 leading-6 text-base line-clamp-4 text-gray-500 dark:text-gray-dark prose">
            {body}
          </p>
        </div>
        <div className="mt-6 text-primary justify-between w-full items-center text-left font-medium focus:outline-none cursor-pointer transition">
          <a
            href={gitHubLink}
            className="icon-parent w-full px-6 py-2 mb-4 flex items-center justify-center text-center rounded-md border dark:border-gray-600 border-gray-300 dark:hover:border-white dark:hover:bg-white dark:hover:text-black hover:bg-gray-900 hover:text-white hover:border-gray-900 dark:hover:fill-black transition"
          >
            <GithubIcon className="h-5 w-5 dark:fill-white fill-black mr-2 transition-all" />
            View source
          </a>
        </div>
      </div>
    </a>
  );
};

export default Card;
