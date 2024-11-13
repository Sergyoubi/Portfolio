import { Metadata } from "next";

export const metadata: Metadata = {
  title: "My resume",
};

const Résumé = () => {
  return (
    <div className="w-screen h-screen flex-center bg-slate-900">
      <iframe
        title="Sergy's resume"
        src={"/assets/resume.pdf"}
        loading="lazy"
        className="w-full h-full"
      />
    </div>
  );
};

export default Résumé;
