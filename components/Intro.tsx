import ResumeButton from "./ResumeButton";
import BlurIn from "@/components/ui/blur-in";

const Intro = () => {
  return (
    <section className="w-full h-[100vh] md:h-[45vh] xl:h-[100vh] 2xl:h-[70vh] 3xl:h-[60vh] bg-black flex justify-center lg:justify-end items-center">
      <div className="w-[85%] h-[70%] xl:w-[50%] xl:h-[73%] mid-xl:h-[55%] 2xl:h-[70%] 3xl:h-[35%] flex flex-col justify-between lg:justify-start items-center gap-5 relative xl:bottom-[-1%] mid-xl:bottom-[8%] 2xl:bottom-[-6%] 3xl:bottom-[-9%]">
        <div className="w-full h-[80%] lg:w-[80%] lg:h-[50%] flex flex-col gap-7">
          <BlurIn
            word=" My expertise lies in crafting robust and dynamic web applications
            that not only meet functional requirements but also delight users
            with their aesthetics and usability."
            className="text-lg 2xl:w-[80%] font-light text-white tracking-wide leading-relaxed select-none"
          />
          <BlurIn
            word="I want to build cool stuff using cool technologies, that's pretty
            much it!
            
            For now that means building websites and apps for different clients,
            using modern frameworks and libraries - and I'm happy with that."
            className="text-lg 2xl:w-[80%] font-light text-white tracking-wide leading-relaxed select-none"
          />
        </div>
        <div className="w-full lg:w-[80%] h-[50%] flex justify-start items-center">
          <ResumeButton />
        </div>
      </div>
    </section>
  );
};

export default Intro;
