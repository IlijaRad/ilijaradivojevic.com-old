import { useEffect } from "react";
import Card from "../components/card";
import { projects } from "../constants/projectData";
import setTitle from "../helpers/setTitle";

const Projects = () => {
  useEffect(() => {
    setTitle("Projects");
  }, []);

  return (
    <div className="mx-auto mb-16 grid max-w-lg gap-x-5 gap-y-7 lg:max-w-none lg:grid-cols-3">
      {projects.map(
        ({ id, title, body, gitHubLink, websiteLink, imgSrc, imgAlt }) => (
          <Card
            id={id}
            title={title}
            body={body}
            gitHubLink={gitHubLink}
            websiteLink={websiteLink}
            imgSrc={imgSrc}
            imgAlt={imgAlt}
            key={id}
          />
        )
      )}
    </div>
  );
};

export default Projects;
