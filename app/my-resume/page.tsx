import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Résumé",
};

const Résumé = () => {
  return (
    <div className="w-screen h-screen flex-center bg-slate-900">
      <iframe
        title="Ethan's résumé"
        src={"/assets/résumé.pdf"}
        loading="lazy"
        className="w-full h-full"
      />
    </div>
  );
};

export default Résumé;
