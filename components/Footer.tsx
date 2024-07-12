"use client";

import { useState } from "react";
import { FaRegCopy } from "react-icons/fa6";
import { AiOutlineCheck } from "react-icons/ai";

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
    <footer className="w-full h-[100%] bg-slate-900 flex justify-end items-center">
      <section className="w-[50%] h-full flex flex-col justify-around items-center">
        <div className="w-[80%] h-[30%] purple-gradient rounded-2xl flex-center flex-col gap-6">
          <p className="w-[80%] text-center text-white text-3xl font-bold">
            Do you have a project? <br /> Let's build it.
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
                Copy my Email address
              </span>
            )}
          </button>
        </div>
        <div className="w-[80%] h-[10%] relative top-[8%] flex justify-center items-center">
          <p className="text-teal-300 font-medium text-sm tracking-wide">
            Designed and coded by Ethan
          </p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
