import Carousel from "nuka-carousel";
import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import ImgWithFallback from "../../components/image/ImageWithFallback";
import { projects } from "../../constants/projectData";
import Head from "next/head";

const Project = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [slideIndex, setSlideIndex] = useState(0);

  const projSlugs = projects.map((project) => project.slug);

  const currProject = projects.find((el) => el.slug === slug);

  if (!projSlugs.includes(slug)) return <div>This page doesn't exist!</div>;

  const projIds = projects.map((project) => project.id);
  const id = currProject.id;

  const firstPage = projIds[0];
  const lastPage = projIds[projIds.length - 1];
  const isPrevDisabled = Number(id) - 1 < firstPage;
  const isNextDisabled = Number(id) + 1 > lastPage;

  const isFirstSlide = slideIndex === 0;
  const isLastSlide = slideIndex === currProject.slideImages.length - 1;

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

  const prevLink = projects.find((proj) => proj.id + 1 === id)?.slug;
  const nextLink = projects.find((proj) => proj.id - 1 === id)?.slug;

  return (
    <>
      <Head>
        <title>{currProject.title}</title>
        <meta name="description" content={currProject.body} />
      </Head>
      <div className="mb-8">
        <h1
          className="mb-6 text-center
      text-2xl font-bold text-secondary dark:text-gray-200 md:mb-12 md:text-4xl"
        >
          {currProject.title}
        </h1>
        <div className="mb-12 flex items-center justify-center">
          {currProject.slideImages.length > 0 && (
            <Carousel
              key={currProject.id}
              autoplay={true}
              wrapAround={true}
              enableKeyboardControls={true}
              dragThreshold={0.01}
              slideIndex={slideIndex}
              afterSlide={(slideIndex) => setSlideIndex(slideIndex)}
            >
              {currProject.slideImages.map((img, ix) => (
                <div
                  key={`${img}-${ix}`}
                  className="flex h-full items-center justify-center"
                >
                  <ImgWithFallback
                    src={img.webp}
                    fallback={img.png}
                    alt={img.alt}
                  />
                </div>
              ))}
            </Carousel>
          )}
        </div>
        <div className="mb-8 w-full py-8 px-0 text-gray-500 dark:text-gray-dark  md:mb-20 md:px-16 md:text-lg lg:px-20 xl:px-24">
          <div className="prose max-w-none dark:prose-invert">
            <p>{currProject.body}</p>
          </div>
        </div>
        <nav className="mb-16 flex justify-between md:text-lg">
          <Link
            href={!isPrevDisabled && prevLink ? `/project/${prevLink}` : "#"}
          >
            <a
              onClick={(e) => {
                if (isPrevDisabled) e.preventDefault();
              }}
              className={
                !isPrevDisabled
                  ? "underlined text-[#36a3ff] hover:text-black focus:text-black focus:outline-none dark:hover:text-white dark:focus:text-white"
                  : "cursor-not-allowed text-gray-500 dark:text-gray-dark"
              }
            >
              Previous
            </a>
          </Link>

          <Link
            href={!isNextDisabled && nextLink ? `/project/${nextLink}` : "#"}
          >
            <a
              onClick={(e) => {
                if (isNextDisabled) e.preventDefault();
              }}
              className={
                !isNextDisabled
                  ? "underlined text-[#36a3ff] hover:text-black focus:text-black focus:outline-none dark:hover:text-white dark:focus:text-white"
                  : "cursor-not-allowed text-gray-500 dark:text-gray-dark"
              }
            >
              Next
            </a>
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Project;
