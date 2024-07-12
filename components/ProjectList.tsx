import Link from "next/link";
import { AiOutlineFolderOpen } from "react-icons/ai";

const ProjectList = ({ url, title, description, tech }: ProjectProps) => {
  return (
    <Link
      target="_blank"
      rel="noreferrer"
      href={url}
      className="w-[95%] lg:w-[90%] flex-center project group my-2"
    >
      <div className="w-[25%] hidden lg:flex justify-center items-center">
        <AiOutlineFolderOpen
          size={40}
          className="text-slate-200 group-hover:text-cyan-300"
        />
      </div>
      <div className="w-[75%] flex flex-col justify-center items-start gap-4 my-2">
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
    </Link>
  );
};

export default ProjectList;
