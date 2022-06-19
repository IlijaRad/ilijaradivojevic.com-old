import Carousel from "nuka-carousel";
import { Link, useParams } from "react-router-dom";
import { projects } from "../constants/projectData";

const Project = () => {
  const { id } = useParams();

  const projIds = projects.map((project) => project.id);

  if (!projIds.includes(Number(id))) return <div>This page doesn't exist!</div>;

  const currProject = projects.find((el) => el.id === Number(id));
  const firstPage = projIds[0];
  const lastPage = projIds[projIds.length - 1];
  const isPrevDisabled = Number(id) - 1 < firstPage;
  const isNextDisabled = Number(id) + 1 > lastPage;

  return (
    <div className="mb-8">
      <h1 className="mb-6 text-center text-2xl font-bold text-secondary dark:text-gray-200 md:mb-12 md:text-4xl">
        {currProject.title}
      </h1>
      <div className="mb-12 flex items-center justify-center">
        <Carousel
          autoplay={true}
          enableKeyboardControls={true}
          dragThreshold={0.1}
        >
          {projects.map(({ id, imgSrc, imgAlt }) => {
            return (
              <div key={id} className="flex h-full items-center justify-center">
                <img src={imgSrc} alt={imgAlt} />
              </div>
            );
          })}
        </Carousel>
      </div>
      <div className="mb-8 py-8 px-0 text-justify text-gray-500 dark:text-gray-dark  md:mb-20 md:px-16 md:text-lg lg:px-20 xl:px-24">
        {currProject.body}
        {currProject.body}
        {currProject.body}
        {currProject.body}
        {currProject.body}
        {currProject.body}
        {currProject.body}
        {currProject.body}
        {currProject.body}
      </div>
      <nav className="mb-16 flex justify-between md:text-lg">
        <Link
          onClick={(e) => {
            if (isPrevDisabled) e.preventDefault();
          }}
          to={!isPrevDisabled ? `/project/${Number(id) - 1}` : "#"}
          className={
            !isPrevDisabled
              ? "underlined text-[#36a3ff] hover:text-black focus:text-black focus:outline-none dark:hover:text-white dark:focus:text-white"
              : "cursor-not-allowed dark:text-gray-dark"
          }
        >
          Previous
        </Link>

        <Link
          onClick={(e) => {
            if (isNextDisabled) e.preventDefault();
          }}
          to={!isNextDisabled ? `/project/${Number(id) + 1}` : "#"}
          className={
            !isNextDisabled
              ? "underlined text-[#36a3ff] hover:text-black focus:text-black focus:outline-none dark:hover:text-white dark:focus:text-white"
              : "cursor-not-allowed dark:text-gray-dark"
          }
        >
          Next
        </Link>
      </nav>
    </div>
  );
};

export default Project;
