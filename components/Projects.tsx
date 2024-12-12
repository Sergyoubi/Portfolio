import { projects } from "../constant/constant";
import ProjectList from "./ProjectList";

const Projects = () => {
  return (
    <>
      <section className="w-full h-[40%] 3xl:h-[20%] bg-black flex justify-center lg:justify-end items-center">
        <div className="w-[80%] lg:w-[45%] h-full flex justify-start items-center">
          <p className="text-white text-base font-medium">Personal Projects:</p>
        </div>
      </section>
      <section className="w-full bg-black flex justify-center lg:justify-end items-center">
        <div className="w-full lg:w-[45%] flex flex-col justify-center items-center lg:items-start gap-7">
          {projects.map((project, index) => (
            <ProjectList key={index} {...project} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Projects;
