import { FaRegCopy } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-full h-[90%] bg-slate-900 flex justify-end items-center">
      <section className="w-[50%] h-full flex-center ">
        <div className="w-[80%] h-[40%] purple-gradient rounded-2xl flex-center flex-col gap-6">
          <p className="w-[80%] text-center text-white text-3xl font-bold">
            Do you want to take your digital presence to the next level?
          </p>
          <p className="flex-center gap-3 py-2 px-4 text-sm rounded-lg border-2 border-slate-200 bg-gray-800 text-white">
            <span>
              <FaRegCopy size={15} className="text-white" />
            </span>
            Copy my Email address
          </p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
