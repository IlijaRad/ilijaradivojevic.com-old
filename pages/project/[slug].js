import Carousel from "nuka-carousel";
import { useState } from "react";
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
        <div className="mb-6 flex flex-wrap justify-center md:mb-12">
          <h1 className="translate-x-[30px] text-center text-[22px] font-bold text-secondary dark:text-gray-200 sm:text-2xl md:text-4xl">
            {title}
          </h1>
          <div className="top-0 ml-2 flex translate-x-[30px]">
            <a href={websiteLink} target="_blank" rel="noreferrer">
              <ExternalLink className="mr-1 h-6 w-6 cursor-pointer stroke-secondary transition-all hover:-translate-y-0.5 dark:stroke-gray-200" />
            </a>

            <a href={gitHubLink} target="_blank" rel="noreferrer">
              <GithubIcon className="h-6 w-6 cursor-pointer fill-secondary transition-all hover:-translate-y-0.5 dark:fill-gray-200" />
            </a>
          </div>
        </div>

        <div className="mb-12 flex items-center justify-center">
          {currProject.slideImages.length > 0 && (
            <Carousel
              autoplay={true}
              key={currProject.id}
              enableKeyboardControls={true}
              disableAnimation={true}
              wrapAround={true}
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
        <nav className="mb-16 flex flex-col gap-y-8 px-0 md:px-16 md:text-lg lg:px-20 xl:px-24">
          <Link
            href={!isPrevDisabled && prevLink ? `/project/${prevLink}` : "#"}
          >
            <a
              onClick={(e) => {
                if (isPrevDisabled) e.preventDefault();
              }}
              className={
                !isPrevDisabled
                  ? "rounded-md border border-gray-300 p-6 transition-all duration-300 ease-in-out hover:bg-gray-100/90 focus:bg-gray-100/90 focus:outline-none dark:border-gray-600 dark:hover:bg-gray-100/5 dark:focus:bg-gray-100/5"
                  : "hidden"
              }
            >
              <div>
                <div className="text-sm text-gray-800 dark:text-gray-400">
                  Last post
                </div>
                <div className="mt-4">
                  {projects.length > 0 &&
                    projects.find((proj) => proj.id === id - 1)?.title}
                </div>
                <div className="text-xs text-gray-800 dark:text-gray-400">
                  {projects.length > 0 &&
                    projects.find((proj) => proj.id === id - 1)?.createdAt}
                </div>
              </div>
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
                  ? "rounded-md border border-gray-300 p-6 text-right transition-all duration-300 ease-in-out hover:bg-gray-100/90 focus:bg-gray-100/90 focus:outline-none dark:border-gray-600 dark:hover:bg-gray-100/5 dark:focus:bg-gray-100/5"
                  : "hidden"
              }
            >
              <div>
                <div className="text-sm text-gray-800 dark:text-gray-400">
                  Next post
                </div>
                <div className="mt-4">
                  {projects.length > 0 &&
                    projects.find((proj) => proj.id === id + 1)?.title}
                </div>
                <div className="text-xs text-gray-800 dark:text-gray-400">
                  {projects.length > 0 &&
                    projects.find((proj) => proj.id === id + 1)?.createdAt}
                </div>
              </div>
            </a>
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Project;
