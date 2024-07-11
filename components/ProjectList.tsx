import { AiOutlineFolderOpen } from "react-icons/ai";

const ProjectList = ({ title, description, tech }: ProjectProps) => {
  return (
    <>
      <section className="w-[80%] flex-center project group">
        <div className="w-[25%] h-full flex justify-center items-start">
          <AiOutlineFolderOpen
            size={40}
            className="text-slate-200 group-hover:text-cyan-300 mt-2"
          />
        </div>
        <div className="w-[75%] h-full flex flex-col justify-center items-start gap-4 my-2">
          <div className="w-full h-[10%] flex justify-start items-center gap-3">
            <p className="text-[#DFF6FF] text-base font-semibold">{title}</p>
          </div>
          <article className="w-[90%] text-slate-400 text-sm font-thin">
            {description}
          </article>
          <div className="w-full flex justify-start items-center mb-3 gap-3 flex-wrap">
            {tech.map((item, index) => (
              <p
                key={index}
                className="px-3 py-2 text-xs bg-teal-50 bg-opacity-10 text-teal-300 rounded-full"
              >
                {item}
              </p>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectList;
