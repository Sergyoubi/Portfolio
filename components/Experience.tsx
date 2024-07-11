import { experiences } from "../constant/constant";
import JobDescription from "./JobDescription";

const Experience = () => {
  return (
    <section className="w-full h-full bg-slate-900 flex justify-end items-center">
      <div className="w-[50%] h-full flex flex-col bg-slate-900 justify-center items-center gap-10">
        <div className="w-[80%] flex justify-start items-center">
          <p className="text-slate-300 text-base font-medium">
            Relevant Experience:
          </p>
        </div>
        {experiences.map((exp, index) => (
          <JobDescription key={index} {...exp} />
        ))}
      </div>
    </section>
  );
};

export default Experience;
