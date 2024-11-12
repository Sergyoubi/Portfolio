"use client";
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
      <motion.div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        animate={{
          scale: scale,
        }}
        transition={{ stiffness: 50 }}
        className="primary-btn bg-gradient-to-r from-lime-300 to-green-300 hover:from-lime-400 hover:to-green-400"
      >
        View full Résumé
      </motion.div>
    </Link>
  );
};

export default ResumeButton;
