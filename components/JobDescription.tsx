import TitleItem from "./TitleItem";
import DescriptionItem from "./DescriptionItem";
import TechListItem from "./TechListItem";

const JobDescription = ({
  date,
  title,
  company,
  jobDescription,
  tech,
}: ExperienceProps) => {
  return (
    <section className="glassmorphisme w-[95%] lg:w-[90%] h-[55vh] lg:h-[40vh] flex-center my-3 hover:cursor-pointer">
      <div className="w-[25%] h-full flex justify-start items-start">
        <p className="text-[10px] text-slate-400 mx-2 relative top-[7%]">
          {date}
        </p>
      </div>
      <div className="w-[75%] h-full flex flex-col justify-center items-center">
        <TitleItem title={title} company={company} date={date} />
        <DescriptionItem jobDescription={jobDescription} />
        <TechListItem tech={tech} />
      </div>
    </section>
  );
};

export default JobDescription;
