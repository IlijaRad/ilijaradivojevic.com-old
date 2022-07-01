import { Link } from "react-router-dom";
import GithubIcon from "../../assets/icons/GithubIcon";
import InfoIcon from "../../assets/icons/InfoIcon";
import ImgWithFallback from "../image/ImageWithFallback";

const Card = ({
  id,
  title,
  body,
  gitHubLink,
  websiteLink,
  imgSrc = "",
  imgSrcWebp = "",
  imgAlt = "",
}) => {
  return (
    <div
      onClick={() => window.open(websiteLink, "_blank")}
      className="flex cursor-pointer flex-col overflow-hidden rounded-lg border border-gray-300 bg-gray-100 shadow-lg ring-gray-600 ring-offset-2 ring-offset-white transition-all hover:border-transparent hover:ring-2 dark:border-gray-600 dark:bg-secondary dark:ring-offset-gray-900 dark:hover:ring-gray-300"
    >
      <div className="flex-shrink-0">
        <ImgWithFallback
          className="h-[200px] w-full border-b border-gray-300 object-cover dark:border-gray-600"
          src={imgSrcWebp}
          fallback={imgSrc}
          alt={imgAlt}
        />
      </div>
      <div className="flex flex-1 flex-col justify-between p-6">
        <div className="flex-1">
          <h3 className="mt-2 text-xl font-semibold leading-7">{title}</h3>
          <p className="mt-3 text-gray-500 line-clamp-4 dark:text-gray-dark">
            {body}
          </p>
        </div>
        <div className="mt-6 flex w-full cursor-pointer flex-row flex-wrap items-center justify-between gap-x-4 font-medium transition focus:outline-none">
          <a
            onClick={(e) => e.stopPropagation()}
            href={gitHubLink}
            target="_blank"
            rel="noreferrer"
            className="icon-parent mb-4 flex grow items-center justify-center rounded-md border border-gray-300 px-4 py-2 text-center transition hover:border-gray-900 hover:bg-gray-900 hover:text-white dark:border-gray-600 dark:hover:border-white dark:hover:bg-white dark:hover:text-black"
          >
            <GithubIcon className="mr-2 h-5 w-5 fill-black transition-all dark:fill-white" />
            View source
          </a>
          <Link
            onClick={(e) => e.stopPropagation()}
            to={`/project/${id}`}
            className="icon-parent-stroke mb-4 flex grow items-center justify-center rounded-md border border-gray-300 px-4 py-2 text-center transition hover:border-gray-900 hover:bg-gray-900 hover:text-white dark:border-gray-600 dark:hover:border-white dark:hover:bg-white  dark:hover:text-black"
          >
            <InfoIcon className="mr-2 h-5 w-5 stroke-black transition-all dark:stroke-white" />
            More Info
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
