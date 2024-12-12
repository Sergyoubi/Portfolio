"use client";
import ShineBorder from "@/components/ui/shine-border";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

const ResumeButton = () => {
  const [scale, setScale] = useState(1);
  const handleMouseEnter = () => {
    setScale(1.2);
  };
  const handleMouseLeave = () => {
    setScale(1);
  };

  return (
    <Link href="/my-resume" rel="noreferrer" target="_blank">
      <ShineBorder
        className="flex-center text-black hover:text-slate-600 text-xs font-semibold cursor-pointer bg-white"
        color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
      >
        View full Résumé
      </ShineBorder>
    </Link>
  );
};

export default ResumeButton;
/*
<motion.div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          animate={{
            scale: scale,
          }}
          transition={{ stiffness: 50 }}
        >
          
        </motion.div>

*/
