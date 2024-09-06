const TechListItem = ({ tech }: TechProps) => {
  return (
    <section className="w-full h-[20%]  flex justify-start items-center flex-wrap gap-2">
      {tech.map((item, index) => (
        <p
          key={index}
          className="px-3 py-2 text-xs bg-teal-50 bg-opacity-10 text-teal-300 rounded-full"
        >
          {item}
        </p>
      ))}
    </section>
  );
};

export default TechListItem;
