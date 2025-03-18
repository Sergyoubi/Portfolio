import Link from "next/link";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import BlurIn from "@/components/ui/blur-in";

const About = () => {
  return (
    <div className="w-full h-[80%] md:h-[40%] lg:w-[50%] lg:h-full relative lg:fixed bg-black flex-center">
      <div className="w-[85%] lg:w-[75%] 2xl:w-[60%] h-[80%] md:h-[75%] xl:h-[60%] mid-xl:h-[46%] 2xl:h-[42%] 3xl:h-[20%] flex flex-col justify-between items-start relative xl:bottom-[6%] mid-xl:bottom-[13%] 2xl:left-[15%] 2xl:bottom-[15%] 3xl:left-[25%]">
        <BlurIn
          word="My name is Sergy"
          className="text-white font-bold text-4xl tracking-wide"
        />
        <BlurIn
          word="I am into building SaaS."
          className="text-white 3xl:w-[80%] font-bold text-6xl tracking-wide select-none"
        />
        <BlurIn
          word="I thrive at the intersection of design and engineering."
          className="text-white font-normal text-lg tracking-wide select-none"
        />
        <div className="w-full flex justify-start items-center gap-5">
          <Link
            target="_blank"
            rel="noreferrer"
            href="https://github.com/Sergyoubi"
          >
            <AiFillGithub className="text-[2.3rem] 2xl:text-[2.8rem] text-white hover:text-[#c3ebf1]" />
          </Link>
          <Link
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/sergy-r-396144203/"
          >
            <AiFillLinkedin className="text-[2.3rem] 2xl:text-[2.8rem] text-white hover:text-[#c3ebf1]" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
