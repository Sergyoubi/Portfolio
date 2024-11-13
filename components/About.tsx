import Link from "next/link";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const About = () => {
  return (
    <div className="w-full h-[80%] md:h-[40%] lg:w-[50%] lg:h-full relative lg:fixed bg-slate-900 lg:black-gradient flex-center">
      <div className="w-[85%] lg:w-[75%] 2xl:w-[60%] h-[80%] md:h-[75%] xl:h-[60%] mid-xl:h-[46%] 2xl:h-[42%] 3xl:h-[30%] flex flex-col justify-between items-start relative xl:bottom-[6%] mid-xl:bottom-[13%] 2xl:left-[15%] 2xl:bottom-[15%] 3xl:left-[25%]">
        <p className="text-[#DFF6FF] font-bold text-4xl tracking-wide">
          Sergy {""}
          <span className="text-xl font-thin">(Senior Dev)</span>
        </p>
        <p className="text-slate-200 font-bold text-6xl tracking-wide select-none">
          I am into <br /> building SaaS.
        </p>
        <p className="text-slate-400 font-normal text-lg tracking-wide select-none">
          I thrive at the intersection of design and engineering.
        </p>
        <div className="w-full flex justify-start items-center gap-5">
          <Link
            target="_blank"
            rel="noreferrer"
            href="https://github.com/Sergyoubi"
          >
            <AiFillGithub className="text-[2.5rem] 2xl:text-[2.8rem] text-slate-200 hover:text-cyan-300" />
          </Link>
          <Link
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/sergy-e-396144203/"
          >
            <AiFillLinkedin className="text-[2.5rem] 2xl:text-[2.8rem] text-slate-200 hover:text-cyan-300" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
