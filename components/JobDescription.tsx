import Link from "next/link";

const JobDescription = ({
  date,
  title,
  company,
  jobDescription,
  img,
}: ExperienceProps) => {
  return (
    <div className="w-full flex flex-col justify-start items-start gap-5 3xl:gap-8">
      <div className="size-[5rem] text-4xl text-white font-bold rounded-full flex-center bg-[#292929] mb-5">
        <img src={img} alt="" className="size-[2.6rem]" />
      </div>
      <Link
        target="_blank"
        rel="noreferrer"
        href={`https://${company.link}`}
        className="text-2xl text-slate-50 font-normal"
      >
        {company.name}
      </Link>
      <p className="2xl:w-[80%] 3xl:w-[60%] text-[4rem] text-white font-medium leading-[3.8rem]">
        {title}
      </p>
      <p className="text-sm text-white font-light">{date}</p>
      <p className="w-full xl:w-[70%] 2xl:w-[50%] 3xl:w-[35%] text-sm text-neutral-400 font-light">
        {jobDescription}
      </p>
    </div>
  );
};

export default JobDescription;
