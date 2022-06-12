import Card from "../components/card";
import { projects } from "../constants/projectData";

const Projects = () => {
  return (
    <div className="mx-6 md:mx-[10vw]">
      <div className="grid grid-cols-4 gap-x-4 md:grid-cols-8 xl:grid-cols-12 xl:gap-x-6 mx-auto max-w-7xl gap-y-4 mb-16 pt-20">
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
