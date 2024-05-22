type ExperienceCardProps = {
  icon: string;
  name: string;
  duration: string;
  description: string;
};

export const ExperienceCard = ({
  icon,
  name,
  duration,
  description,
}: ExperienceCardProps) => {
  return (
    <div className="p-4 border border-white rounded-lg flex flex-col md:flex-row md:items-center">
      <img src={icon} alt={name} className="w-10 h-10 mr-4 mb-4 md:mb-16" />
      <div className="flex-1 flex flex-col">
        <div className="flex justify-between items-center mb-2 md:mb-2">
          <h3 className="text-lg font-bold text-white">{name}</h3>
          <p className="text-sm text-[#d4d4d8] md:text-right">{duration}</p>
        </div>
        <p className="text-[#d4d4d8] mb-4">{description}</p>
      </div>
    </div>
  );
};
