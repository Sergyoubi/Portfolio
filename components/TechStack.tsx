import IconCloud from "@/components/ui/icon-cloud";

const TechStack = () => {
  const slugs = [
    "typescript",
    "javascript",
    "react",
    "html5",
    "css3",
    "nodedotjs",
    "express",
    "nextdotjs",
    "prisma",
    "postgresql",
    "vercel",
    "docker",
    "git",
    "jira",
    "github",
    "gitlab",
    "visualstudiocode",
  ];

  return (
    <>
      <section className="w-full h-[20%] bg-slate-900 flex justify-center lg:justify-end items-center">
        <div className="w-[80%] lg:w-[45%] h-full flex justify-start items-center">
          <p className="text-slate-300 text-base font-medium">My tech stack:</p>
        </div>
      </section>
      <section className="w-full h-[60%] xl:h-[75%] 2xl:h-[70%] bg-slate-900 flex justify-center items-start lg:justify-end lg:items-center">
        <div className="w-[85%] h-[70%] xl:w-[50%] xl:h-full flex justify-center items-start">
          <div className="w-[95%] xl:w-[82%] xl:h-full glassmorphisme-class flex-center">
            <IconCloud iconSlugs={slugs} />
          </div>
        </div>
      </section>
    </>
  );
};

export default TechStack;
