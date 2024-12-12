declare type ExperienceProps = {
  date: string;
  title: string;
  company: {
    name: string;
    link: string;
  };
  jobDescription: string;
  img: string;
};

declare type ProjectProps = {
  url: string;
  title: string;
  description: string;
  tech: string[];
};

declare type TitleItemProps = {
  title: string;
  company: {
    name: string;
    link: string;
  };
  date: string;
};

declare type jobDescriptionProps = {
  jobDescription: string;
};

declare type TechProps = {
  tech: string[];
};

declare type CoordinatesProps = {
  coordinates: number;
};
