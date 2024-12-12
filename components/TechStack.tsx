import Marquee from "@/components/ui/marquee";
import { firstRow, secondRow } from "@/constant/constant";

const TechStack = () => {
  return (
    <>
      <section className="w-full h-[20%] 3xl:h-[15%] bg-black flex justify-center lg:justify-end items-center">
        <div className="w-[80%] lg:w-[45%] h-full flex justify-start items-center">
          <p className="text-white text-base font-medium">My tech stack:</p>
        </div>
      </section>
      <section className="w-full h-[60%] xl:h-[45%] 3xl:h-[25%] bg-black flex justify-center items-start lg:justify-end lg:items-center">
        <div className="w-[85%] h-[70%] xl:w-[50%] xl:h-full flex justify-center items-start">
          <div className="w-[95%] xl:w-[82%] xl:h-full flex flex-col justify-center items-center gap-2">
            <section className="w-full h-[30%] flex justify-start items-center">
              <Marquee pauseOnHover className="w-full [--duration:8s]">
                {firstRow.map((item, index) => (
                  <div key={index} className="size-[4rem] flex-center">
                    <img
                      src={`${item.img}`}
                      alt={`${item.img} icon`}
                      className="size-full rounded-md"
                    />
                  </div>
                ))}
              </Marquee>
            </section>
            <section className="w-full h-[30%] flex justify-start items-cente">
              <Marquee reverse pauseOnHover className="w-full [--duration:15s]">
                {secondRow.map((item, index) => (
                  <div key={index} className="size-[4rem] flex-center">
                    <img
                      src={`${item.img}`}
                      alt={`${item.img} icon`}
                      className="size-full rounded-md"
                    />
                  </div>
                ))}
              </Marquee>
            </section>
          </div>
        </div>
      </section>
    </>
  );
};

export default TechStack;
