// src/components/ProjectCard.tsx
import Link from "next/link";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  link: string;
  isProfessional: boolean;
}

const ProjectCard = ({
  title,
  description,
  technologies,
  imageUrl,
  link,
  isProfessional,
}: ProjectCardProps) => {
  return (
    <div className="bg-gray-900/50 rounded-2xl overflow-hidden border border-gray-800 hover:border-cyan-500 transition-colors">
      <div className="relative h-48">
        <Image src={imageUrl} alt={title} fill className="object-cover" />
        <div className="absolute top-4 right-4">
          <span
            className={`px-3 py-1 rounded-full text-xs font-medium ${
              isProfessional
                ? "bg-cyan-500/20 text-cyan-400"
                : "bg-blue-500/20 text-blue-400"
            }`}
          >
            {isProfessional ? "Professionnel" : "Personnel"}
          </span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-800 rounded-full text-xs text-gray-300"
            >
              {tech}
            </span>
          ))}
        </div>

        <Link
          href={link}
          className={`inline-flex items-center font-medium ${
            isProfessional
              ? "text-cyan-400 hover:text-cyan-300"
              : "text-blue-400 hover:text-blue-300"
          }`}
        >
          Voir le projet
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 ml-1"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
