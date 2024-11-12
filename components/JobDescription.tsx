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
      className="border border-slate-800 rounded-xl gap-5 w-[95%] lg:w-[90%] h-[55vh] lg:h-[40vh] mid-xl:h-[28vh] 2xl:h-[25vh] flex-center my-3 hover:cursor-pointer"
    >
      <div className="w-[25%] h-full flex justify-start items-start">
        <p className="text-[10px] text-slate-400 mx-2 relative top-[7%] left-[5%] mid-xl:left-[10%]">
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
