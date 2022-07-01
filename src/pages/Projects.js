import Card from "../components/card";
import { projects } from "../constants/projectData";
import useTitle from "../hooks/useTitle";

const Projects = () => {
  useTitle("Projects");

  return (
    <div className="mx-auto mb-16 grid max-w-lg gap-x-5 gap-y-7 lg:max-w-none lg:grid-cols-3">
      {projects.map(
        ({
          id,
          title,
          body,
          gitHubLink,
          websiteLink,
          imgSrc,
          imgSrcWebp,
          imgAlt,
        }) => (
          <Card
            id={id}
            title={title}
            body={body}
            gitHubLink={gitHubLink}
            websiteLink={websiteLink}
            imgSrc={imgSrc}
            imgSrcWebp={imgSrcWebp}
            imgAlt={imgAlt}
            key={id}
          />
        )
      )}
    </div>
  );
};

export default Projects;
