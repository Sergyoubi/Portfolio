import Link from "next/link";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const About = () => {
  return (
    <div className="w-full h-[80%] lg:w-[50%] lg:h-full relative lg:fixed bg-slate-900 lg:black-gradient flex-center">
      <div className="w-[85%] lg:w-[75%] h-[70%] flex flex-col justify-start items-start gap-6">
        <p className="text-[#DFF6FF] font-bold text-4xl tracking-wide">
          Ethan Sergy,
        </p>
        <p className="text-slate-200 font-bold text-6xl tracking-wide select-none">
          I am into building SaaS.
        </p>
        <p className="text-slate-400 font-normal text-sm tracking-wide select-none relative top-[10%]">
          I thrive at the intersection of design and engineering.
        </p>
        <div className="w-full h-[20%] my-12 flex justify-start items-center gap-5">
          <Link
            target="_blank"
            rel="noreferrer"
            href="https://github.com/Sergyoubi"
          >
            <AiFillGithub
              size={32}
              className="text-slate-200 hover:text-cyan-300"
            />
          </Link>
          <Link
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/ethan-sergy-396144203/"
          >
            <AiFillLinkedin
              size={32}
              className="text-slate-200 hover:text-cyan-300"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
