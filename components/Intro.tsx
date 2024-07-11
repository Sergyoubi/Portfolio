import Link from "next/link";

const Intro = () => {
  return (
    <section className="w-full h-full bg-slate-900 flex justify-end items-center">
      <div className="w-[50%] h-[68%] flex flex-col justify-start items-center gap-5">
        <div className="w-[80%] h-[50%] flex flex-col gap-7">
          <p className="text-lg font-light hover:font-semibold text-slate-400 tracking-wide leading-relaxed">
            My expertise lies in crafting robust and dynamic web applications
            that not only meet functional requirements but also delight users
            with their aesthetics and usability.
          </p>
          <p className="text-lg font-light text-slate-400 tracking-wide leading-relaxed">
            I have a passion for creating seamless, intuitive user experiences
            by merging cutting-edge technology with thoughtful design
            principles.
          </p>
        </div>
        <div className="w-[80%] h-[20%] flex justify-start items-center">
          <Link
            target="_blank"
            rel="noreferrer"
            href="/my-resume"
            className="text-cyan-300 text-sm py-2 px-4 border rounded-full border-cyan-100 hover:border-cyan-300 hover:text-teal-300"
          >
            View full Résumé
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Intro;
