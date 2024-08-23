import Link from "next/link";

const JobDescription = ({
  date,
  title,
  company,
  jobDescription,
  tech,
}: ExperienceProps) => {
  return (
    <section className="w-[95%] lg:w-[90%] h-[40vh] bg-blue-200 flex-center my-3 hover:cursor-pointer">
      <div className="w-[30%] h-full bg-red-200 flex justify-start items-start">
        <p className="text-[10px] text-slate-400 mx-2 relative top-[5%]">
          {date}
        </p>
      </div>
      <div className="w-[60%] h-full  flex flex-col justify-center items-center">
        <div className="w-full h-[20%] bg-blue-500"></div>
        <div className="w-full h-[60%] bg-red-500"></div>
        <div className="w-full h-[20%] bg-gray-500"></div>
      </div>
    </section>
  );
};

export default JobDescription;

/*

<div className="w-[25%] h-full hidden lg:flex justify-center items-center">
        <div className="w-full h-[30vh] bg-blue-400 flex justify-center items-start">
          <p className="text-[10px] text-slate-400 mx-2 relative">{date}</p>
        </div>
      </div>
      <div className="w-[75%] h-[80%] flex flex-col justify-center items-start gap-7">
        <div className="w-full h-[20%] bg-red-300 flex justify-start items-center flex-wrap gap-3 mt-3">
          <p className="text-[#DFF6FF] text-sm lg:text-base font-semibold">
            {title}
          </p>
          <Link
            target="_blank"
            rel="noreferrer"
            href={`https://${company}`}
            className="text-slate-300 text-xs lg:text-sm font-normal hover:text-cyan-300"
          >
            {company}
          </Link>
          <p className="text-[10px] text-slate-400 lg:hidden">({date})</p>
        </div>
        <article className="w-[90%] h-[60%] bg-green-400 text-slate-400 text-sm font-normal select-none">
          {jobDescription}
        </article>
        <div className="w-full h-[20%] bg-blue-400 flex justify-start items-center mb-3 gap-3 flex-wrap">
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

*/
