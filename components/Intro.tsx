import Link from "next/link";

const Intro = () => {
  return (
    <section className="w-full h-full bg-slate-900 flex justify-center lg:justify-end items-center">
      <div className="w-[85%] h-[70%] lg:w-[50%] lg:h-[68%] flex flex-col justify-between lg:justify-start items-center gap-5">
        <div className="w-full h-[80%] lg:w-[80%] lg:h-[50%] flex flex-col gap-7">
          <p className="text-lg font-light text-slate-400 tracking-wide leading-relaxed select-none">
            My expertise lies in crafting robust and dynamic web applications
            that not only meet functional requirements but also delight users
            with their aesthetics and usability.
          </p>
          <p className="text-lg font-light text-slate-400 tracking-wide leading-relaxed select-none">
            I have a passion for creating seamless, intuitive user experiences
            by merging cutting-edge technology with thoughtful design
            principles.
          </p>
        </div>
        <div className="w-full lg:w-[80%] h-[20%] flex justify-start items-center">
          <Link
            target="_blank"
            rel="noreferrer"
            href="/my-resume"
            className="primary-btn bg-gradient-to-r from-lime-300 to-green-300 hover:from-lime-400 hover:to-green-400"
          >
            View full Résumé
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Intro;
