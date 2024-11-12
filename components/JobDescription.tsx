"use client";
import TitleItem from "./TitleItem";
import DescriptionItem from "./DescriptionItem";
import TechListItem from "./TechListItem";
import { motion } from "framer-motion";
import { useState } from "react";

const JobDescription = ({
  date,
  title,
  company,
  jobDescription,
  tech,
}: ExperienceProps) => {
  const [scale, setScale] = useState(1);
  const handleMouseEnter = () => {
    setScale(1.12);
  };
  const handleMouseLeave = () => {
    setScale(1);
  };
  return (
    <motion.section
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      animate={{
        scale: scale,
      }}
      transition={{ stiffness: 20 }}
      className="w-[80%] h-[60vh] md:h-[20vh] xl:w-[90%] xl:h-[40vh] mid-xl:h-[28vh] 2xl:h-[25vh] 3xl:h-[20vh] flex-center my-3 border border-slate-800 hover:border-zinc-700 rounded-xl gap-5 hover:cursor-pointer"
    >
      <div className="w-[25%] h-full flex justify-start items-start">
        <p className="text-[0.5rem] md:text-xs xl:text-[0.6rem] text-slate-400 mx-2 relative top-[3.5%] md:top-[7%] xl:top-[8%] left-[5%] mid-xl:left-[10%]">
          {date}
        </p>
      </div>
      <div className="w-[75%] h-full flex flex-col justify-center items-center 2xl:items-start">
        <TitleItem title={title} company={company} date={date} />
        <DescriptionItem jobDescription={jobDescription} />
        <TechListItem tech={tech} />
      </div>
    </motion.section>
  );
};

export default JobDescription;
