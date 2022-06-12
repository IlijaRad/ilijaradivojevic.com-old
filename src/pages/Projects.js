import Card from "../components/card";
import { projects } from "../constants/projectData";

const Projects = () => {
  return (
    <div className="mx-6 md:mx-[10vw]">
      <div className="mt-12 grid max-w-lg mx-auto lg:max-w-none lg:grid-cols-3 gap-5">
        {projects.map(
          ({ id, title, body, gitHubLink, websiteLink, imgSrc, imgAlt }) => (
            <Card
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
    </div>
  );
};

export default Projects;
