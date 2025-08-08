// src/app/projets/[type]/[slug]/page.tsx
import { notFound } from "next/navigation";
import Image from "next/image";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  link: string;
  isProfessional: boolean;
  slug: string;
}

interface PageProps {
  params: {
    type: string; // "professionnel" ou "personnel"
    slug: string; // "app-gestion", "pygame", etc.
  };
}

// Données projets (extraits de ta page projets)
const professionalProjects: Project[] = [
  {
    title: "Application de Gestion pour Entreprise",
    description:
      "Développement d'une application web de gestion de stocks et de commandes pour une PME locale.",
    technologies: ["React", "Node.js", "MongoDB"],
    imageUrl: "/dashboard.png",
    link: "/projets/professionnel/app-gestion",
    isProfessional: true,
    slug: "app-gestion",
  },
  {
    title: "Site E-commerce",
    description:
      "Création d'une plateforme e-commerce avec système de paiement sécurisé et gestion de catalogue.",
    technologies: ["Next.js", "Stripe", "PostgreSQL"],
    imageUrl: "/pro/project2.jpg",
    link: "/projets/professionnel/ecommerce",
    isProfessional: true,
    slug: "ecommerce",
  },
];

const personalProjects: Project[] = [
  {
    title: "Application Mobile de Fitness",
    description:
      "Conception et développement d'une application mobile pour le suivi d'entraînements sportifs.",
    technologies: ["React Native", "Firebase"],
    imageUrl: "/perso/project1.jpg",
    link: "/projets/personnel/fitness-app",
    isProfessional: false,
    slug: "fitness-app",
  },
  {
    title: "Jeu Vidéo en Python",
    description:
      "Développement d'un jeu vidéo 2D en utilisant Pygame avec des mécaniques originales.",
    technologies: ["Python", "Pygame"],
    imageUrl: "/perso/project2.jpg",
    link: "/projets/personnel/pygame",
    isProfessional: false,
    slug: "pygame",
  },
];

export async function generateStaticParams() {
  // Permet à Next.js de pré-générer les pages statiques
  const params = [
    ...professionalProjects.map((p) => ({
      type: "professionnel",
      slug: p.slug,
    })),
    ...personalProjects.map((p) => ({
      type: "personnel",
      slug: p.slug,
    })),
  ];

  return params;
}

export default function ProjectDetailPage({ params }: PageProps) {
  const { type, slug } = params;

  // Recherche du projet selon type et slug
  const projects =
    type === "professionnel" ? professionalProjects : personalProjects;

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    // Si pas trouvé, affiche une 404
    notFound();
  }

  return (
    <main className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6">{project.title}</h1>

      <div className="relative h-64 w-full mb-6 rounded-lg overflow-hidden shadow-lg">
        <Image
          src={project.imageUrl}
          alt={project.title}
          fill
          className="object-cover"
          priority
        />
      </div>

      <p className="text-gray-300 mb-6">{project.description}</p>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Technologies utilisées</h2>
        <ul className="flex flex-wrap gap-3">
          {project.technologies.map((tech) => (
            <li
              key={tech}
              className="px-4 py-1 bg-gray-800 rounded-full text-sm text-gray-300"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>

      <a
        href={project.link}
        className="inline-block mt-4 px-6 py-3 bg-cyan-600 rounded hover:bg-cyan-700 transition text-white font-semibold"
      >
        Voir le projet complet
      </a>
    </main>
  );
}
