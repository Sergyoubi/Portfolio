import Link from "next/link";

const TitleItem = ({ title, company }: TitleItemProps) => {
  return (
    <div className="w-full h-[20%] flex justify-start items-center flex-wrap gap-x-4 gap-y-1">
      <p className="text-[#DFF6FF] text-sm lg:text-base font-normal">{title}</p>
      <Link
        target="_blank"
        rel="noreferrer"
        href={`https://${company.link}`}
        className="text-slate-300 text-xs lg:text-sm font-thin hover:text-cyan-300"
      >
        {company.name}
      </Link>
    </div>
  );
};

export default TitleItem;
