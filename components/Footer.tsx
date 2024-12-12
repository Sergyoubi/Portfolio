"use client";

import { useState } from "react";
import { FaRegCopy } from "react-icons/fa6";
import { AiOutlineCheck } from "react-icons/ai";
import { NeonGradientCard } from "@/components/ui/neon-gradient-card";

const Footer = () => {
  const email = "sergyoubi@gmail.com";
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard
      .writeText(email)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 8000);
      })
      .catch((err) => {
        setIsCopied(false);
        console.error("Could not copy text: ", err);
      });
  };

  return (
    <footer className="w-full h-[40vh] lg:h-[70vh] 3xl:h-[40vh] bg-black flex justify-center lg:justify-end items-center">
      <section className="w-full lg:w-[50%] h-full flex flex-col justify-around items-center">
        <NeonGradientCard className="w-[80%] h-[65%] md:w-[80%] md:h-[50%] rounded-2xl flex-center relative lg:top-[15%]">
          <div className="w-[100%] h-[100%] flex flex-col justify-center items-center gap-5">
            <p className="w-[95%] lg:w-[80%] text-center text-black text-2xl lg:text-3xl font-bold">
              Let's collaborate
            </p>
            <button
              onClick={handleCopyEmail}
              className="py-2 px-4 text-sm rounded-lg border-2 border-slate-200 bg-gray-800 hover:bg-slate-700 text-white"
            >
              {isCopied ? (
                <span className="flex-center gap-3">
                  <AiOutlineCheck size={18} className="text-green-400" />
                  Email address copied
                </span>
              ) : (
                <span className="flex-center gap-3">
                  <FaRegCopy size={15} className="text-white" />
                  Copy my email address
                </span>
              )}
            </button>
          </div>
        </NeonGradientCard>

        <div className="w-[80%] h-[10%] relative top-[5%] lg:top-[8%] flex justify-center items-center">
          <p className="text-white font-medium text-sm tracking-wide">
            &copy; Designed and coded by Sergy
          </p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;

/* 
        <div className="w-[80%] h-[65%] md:w-[80%] md:h-[50%] purple-gradient rounded-2xl flex-center flex-col gap-6 relative lg:top-[15%]">
          <p className="w-[95%] lg:w-[80%] text-center text-white text-2xl lg:text-3xl font-bold">
            Let's collaborate
          </p>
          <button
            onClick={handleCopyEmail}
            className="py-2 px-4 text-sm rounded-lg border-2 border-slate-200 bg-gray-800 hover:bg-slate-700 text-white"
          >
            {isCopied ? (
              <span className="flex-center gap-3">
                <AiOutlineCheck size={18} className="text-green-400" />
                Email address copied
              </span>
            ) : (
              <span className="flex-center gap-3">
                <FaRegCopy size={15} className="text-white" />
                Copy my email address
              </span>
            )}
          </button>
        </div>
        */
