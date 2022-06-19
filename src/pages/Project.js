import Carousel from "nuka-carousel";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { projects } from "../constants/projectData";
import setTitle from "../helpers/setTitle";

const Project = () => {
  const { id } = useParams();
  const [slideIndex, setSlideIndex] = useState(0);

  const projIds = projects.map((project) => project.id);
  const currProject = projects.find((el) => el.id === Number(id));

  useEffect(() => {
    if (currProject && currProject.title) {
      setTitle(currProject.title);
    }
  }, [currProject]);

  if (!projIds.includes(Number(id))) return <div>This page doesn't exist!</div>;

  const firstPage = projIds[0];
  const lastPage = projIds[projIds.length - 1];
  const isPrevDisabled = Number(id) - 1 < firstPage;
  const isNextDisabled = Number(id) + 1 > lastPage;

  const isFirstSlide = slideIndex === 0;
  const isLastSlide = slideIndex === projIds.length - 1;

  const leftArrowContainer = document.querySelector(
    ".slider-control-centerleft"
  );
  const rightArrowContainer = document.querySelector(
    ".slider-control-centerright"
  );

  if (leftArrowContainer && rightArrowContainer) {
    if (isFirstSlide) leftArrowContainer.classList.add("disable");
    else leftArrowContainer.classList.remove("disable");
    if (isLastSlide) rightArrowContainer.classList.add("disable");
    else rightArrowContainer.classList.remove("disable");
  }

  return (
    <div className="mb-8">
      <h1
        className="mb-6 text-center
      text-2xl font-bold text-secondary dark:text-gray-200 md:mb-12 md:text-4xl"
      >
        {currProject.title}
      </h1>
      <div className="mb-12 flex items-center justify-center">
        <Carousel
          autoplay={true}
          autoplayReverse={true}
          enableKeyboardControls={true}
          dragThreshold={0.01}
          slideIndex={slideIndex}
          afterSlide={(slideIndex) => setSlideIndex(slideIndex)}
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
      <div className="mb-8 w-full py-8 px-0 text-gray-500 dark:text-gray-dark  md:mb-20 md:px-16 md:text-lg lg:px-20 xl:px-24">
        <div className="prose max-w-none dark:prose-invert">
          <p>{currProject.body}</p>
          <p>{currProject.body}</p>
          <p>{currProject.body}</p>
          <p>{currProject.body}</p>
          <p>{currProject.body}</p>
          <p>{currProject.body}</p>
          <p>{currProject.body}</p>
          <p>{currProject.body}</p>
          <p>{currProject.body}</p>
        </div>
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
