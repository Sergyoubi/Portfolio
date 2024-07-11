const JobDescription = ({
  date,
  title,
  company,
  jobDescription,
  tech,
}: ExperienceProps) => {
  return (
    <section className="w-[80%] flex-center glassmorphisme">
      <div className="w-[25%] h-full">
        <p className="text-[10px] text-slate-400 mt-5 mx-2">{date}</p>
      </div>
      <div className="w-[75%] h-full flex flex-col justify-center items-start gap-4">
        <div className="w-full h-[10%] flex justify-start items-center gap-3 mt-3">
          <p className="text-[#DFF6FF] text-base font-semibold">{title}</p>
          <p className="text-slate-300 text-sm font-normal">{company}</p>
        </div>
        <article className="w-[90%] text-slate-400 text-sm font-thin">
          {jobDescription}
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
  );
};

export default JobDescription;
