import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const About = () => {
  return (
    <div className="w-[50%] h-full fixed bg-slate-900 flex-center">
      <div className="w-[60%] h-[70%] flex flex-col justify-start items-start gap-6">
        <p className="text-[#DFF6FF] font-bold text-6xl">Ethan Sergy</p>
        <p className="text-slate-300 font-thin text-2xl">
          Experienced Frontend Engineer
        </p>
        <p className="text-slate-400 font-thin text-sm">
          I thrive at the intersection of design and engineering
        </p>
        <div className="w-full h-[20%] my-12 flex justify-start items-center gap-5">
          <AiFillGithub
            size={32}
            className="text-slate-200 hover:text-cyan-300"
          />
          <AiFillLinkedin
            size={32}
            className="text-slate-200 hover:text-cyan-300"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
