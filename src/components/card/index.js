import GithubIcon from "../../assets/icons/GithubIcon";
import InfoIcon from "../../assets/icons/InfoIcon";

const Card = ({
  title,
  body,
  gitHubLink,
  websiteLink,
  imgSrc = "",
  imgAlt = "",
}) => {
  return (
    <div
      onClick={() => (window.location = websiteLink)}
      className="flex flex-col overflow-hidden shadow-lg rounded-lg bg-gray-100 dark:bg-secondary border border-gray-300 dark:border-gray-600 cursor-pointer"
    >
      <div className="flex-shrink-0">
        <img
          className="h-[200px] w-full object-cover border-b border-gray-300 dark:border-gray-600"
          src={imgSrc}
          alt={imgAlt}
        />
      </div>
      <div className="flex-1 p-6 flex flex-col justify-between">
        <div className="flex-1">
          <h3 className="mt-2 text-xl leading-7 font-semibold text-black dark:text-white">
            {title}
          </h3>
          <p className="mt-3 leading-6 text-base line-clamp-4 text-gray-500 dark:text-gray-dark prose">
            {body}
          </p>
        </div>
        <div className="mt-6 text-primary flex flex-wrap flex-col xl:flex-row justify-between w-full items-center font-medium focus:outline-none cursor-pointer transition">
          <a
            href={gitHubLink}
            className="icon-parent w-full 2xl:w-auto px-6 py-2 mb-4 flex items-center justify-center text-center rounded-md border dark:border-gray-600 border-gray-300 dark:hover:border-white dark:hover:bg-white dark:hover:text-black hover:bg-gray-900 hover:text-white hover:border-gray-900 transition"
          >
            <GithubIcon className="h-5 w-5 dark:fill-white fill-black mr-2 transition-all" />
            View source
          </a>
          <a
            href="#/"
            className="icon-parent-stroke w-full 2xl:w-auto px-6 py-2 mb-4 flex items-center justify-center text-center rounded-md border dark:border-gray-600 border-gray-300 dark:hover:border-white dark:hover:bg-white dark:hover:text-black hover:bg-gray-900 hover:text-white hover:border-gray-900  transition"
          >
            <InfoIcon className="h-5 w-5 dark:stroke-white stroke-black mr-2 transition-all" />
            More Info
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
