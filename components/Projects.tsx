import { projects } from "../constant/constant";
import ProjectList from "./ProjectList";

const Projects = () => {
  return (
    <section className="w-full h-full bg-slate-900 flex justify-end items-center">
      <div className="w-[50%] h-full flex flex-col bg-slate-900 justify-center items-center gap-10">
        <div className="w-[80%] flex justify-start items-center">
          <p className="text-slate-300 text-base font-medium">
            Personal Projects:
          </p>
        </div>
        {projects.map((project, index) => (
          <ProjectList key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
