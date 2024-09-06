import { experiences } from "../constant/constant";
import JobDescription from "./JobDescription";

const Experience = () => {
  return (
    <>
      <section className="w-full h-[20%] bg-slate-900 flex justify-center lg:justify-end items-center">
        <div className="w-[80%] lg:w-[45%] h-full flex justify-start items-center">
          <p className="text-slate-300 text-base font-medium">
            Relevant Experiences:
          </p>
        </div>
      </section>
      <section className="w-full bg-slate-900 flex justify-center lg:justify-end items-center">
        <div className="w-full lg:w-[45%] flex flex-col justify-center items-center lg:items-start gap-7">
          {experiences.map((exp, index) => (
            <JobDescription key={index} {...exp} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Experience;
