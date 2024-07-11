import { FaRegCopy } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-full h-[100%] bg-slate-900 flex justify-end items-center">
      <section className="w-[50%] h-full flex flex-col justify-around items-center">
        <div className="w-[80%] h-[30%] purple-gradient rounded-2xl flex-center flex-col gap-6">
          <p className="w-[80%] text-center text-white text-3xl font-bold">
            Do you have a project? <br /> Let's build it.
          </p>
          <p className="flex-center gap-3 py-2 px-4 text-sm rounded-lg border-2 border-slate-200 bg-gray-800 text-white">
            <span>
              <FaRegCopy size={15} className="text-white" />
            </span>
            Copy my Email address
          </p>
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
