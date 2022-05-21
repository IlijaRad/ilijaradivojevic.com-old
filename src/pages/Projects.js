import Card from "../components/card";
import { projects } from "../constants/projectData";

const Projects = () => {
  return (
    <div className="relative grid grid-cols-4 gap-x-4 md:grid-cols-8 lg:grid-cols-12 lg:gap-x-6 mx-auto max-w-7xl gap-y-4">
      {projects.map(({ ...restProps }) => (
        <Card {...restProps} />
      ))}
    </div>
  );
};

export default Projects;
