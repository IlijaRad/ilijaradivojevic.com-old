import Carousel from "nuka-carousel";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import ImgWithFallback from "../../components/image/ImageWithFallback";
import { projects } from "../../constants/projectData";
import Head from "next/head";
import GithubIcon from "../../public/assets/icons/GithubIcon";
import ExternalLink from "../../public/assets/icons/ExternalLink";
import { getSlugs } from "../../helpers/getSlugs";
import { getProject } from "../../helpers/getProject";

export const getStaticPaths = async () => {
  const slugs = await getSlugs();
  return {
    paths: slugs.map((slug) => ({
      params: { slug },
    })),

    fallback: false,
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const project = await getProject(slug);
  return {
    props: { project },
  };
};

const Project = ({ project }) => {
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

  useEffect(() => {
    let leftArrowContainer;
    let rightArrowContainer;

    if (typeof window !== "undefined") {
      leftArrowContainer = document.querySelector(".slider-control-centerleft");
      rightArrowContainer = document.querySelector(
        ".slider-control-centerright"
      );
    }

    if (leftArrowContainer && rightArrowContainer) {
      if (isFirstSlide) leftArrowContainer.classList.add("disable");
      else leftArrowContainer.classList.remove("disable");
      if (isLastSlide) rightArrowContainer.classList.add("disable");
      else rightArrowContainer.classList.remove("disable");
    }
  }, []);

  const prevLink = projects.find((proj) => proj.id + 1 === id)?.slug;
  const nextLink = projects.find((proj) => proj.id - 1 === id)?.slug;

  if (!currProject) return;

  const { title, websiteLink, gitHubLink } = currProject;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={project.body} />
      </Head>
      <div className="mb-8">
        <div className="flex flex-wrap justify-center mb-6 md:mb-12">
          <h1 className="translate-x-[30px] text-[22px] sm:text-2xl text-center font-bold text-secondary dark:text-gray-200 md:text-4xl">
            {title}
          </h1>
          <div className="translate-x-[30px] flex ml-2 top-0">
            <a href={websiteLink} target="_blank" rel="noreferrer">
              <ExternalLink className="h-6 w-6 cursor-pointer mr-1 stroke-secondary dark:stroke-gray-200 hover:-translate-y-0.5 transition-all" />
            </a>

            <a href={gitHubLink} target="_blank" rel="noreferrer">
              <GithubIcon className="cursor-pointer h-6 w-6 fill-secondary transition-all dark:fill-gray-200 hover:-translate-y-0.5" />
            </a>
          </div>
        </div>

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
              {currProject.slideImages.map(({ webp, png, alt }, ix) => (
                <div
                  key={`${alt}-${ix}`}
                  className="flex h-full items-center justify-center"
                >
                  <ImgWithFallback src={webp} fallback={png} alt={alt} />
                </div>
              ))}
            </Carousel>
          )}
        </div>
        <div className="mb-8 w-full py-8 px-0 text-gray-500 dark:text-gray-dark  md:mb-20 md:px-16 md:text-lg lg:px-20 xl:px-24">
          <div className="prose max-w-none dark:prose-invert">
            <div dangerouslySetInnerHTML={{ __html: project.body }}></div>
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
