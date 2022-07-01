import Card from "../components/card";
import { projects } from "../constants/projectData";
import Head from "next/head";

const Projects = () => {
  return (
    <>
      <Head>
        <title>Projects</title>
        <meta
          name="description"
          content="Check out my personal projects that I have built as I was learning react and web development."
        />
      </Head>
      <div className="mx-auto mb-16 grid max-w-lg gap-x-5 gap-y-7 lg:max-w-none lg:grid-cols-3">
        {projects.map(({ id, ...restProps }) => (
          <Card key={id} {...restProps} />
        ))}
      </div>
    </>
  );
};

export default Projects;
