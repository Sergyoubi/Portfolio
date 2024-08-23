const DescriptionItem = ({ jobDescription }: jobDescriptionProps) => {
  return (
    <article className="w-full h-[60%] flex justify-start items-center text-slate-400 text-sm font-normal select-none leading-6">
      {jobDescription}
    </article>
  );
};

export default DescriptionItem;
