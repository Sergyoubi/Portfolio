"use client";
import { AiOutlineFolderOpen } from "react-icons/ai";
import { motion } from "framer-motion";

const FolderIcon = ({ coordinates }: CoordinatesProps) => {
  return (
    <motion.div
      animate={{
        y: coordinates,
      }}
      transition={{ stiffness: 50 }}
    >
      <AiOutlineFolderOpen className="text-[3rem] 2xl:text-[3.5rem] text-slate-200 group-hover:text-cyan-300" />
    </motion.div>
  );
};

export default FolderIcon;