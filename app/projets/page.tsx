// src/app/projets/page.tsx
import { Metadata } from "next";
import {
  BriefcaseIcon,
  CodeBracketIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/outline";

import ProjectCard from "@/app/components/ProjectCard";
import CertificationCard from "@/app/components/CertificationCard";
import { certifications } from "@/app/components/CertificationData";

export const metadata: Metadata = {
  title: "Projets | Portfolio Étudiant BTS SIO SLAM",
  description:
    "Découvrez mes projets professionnels et personnels ainsi que mes certifications.",
};

const ProjectsPage = () => {
  const professionalProjects = [
    {
      title: "Application de Gestion pour Entreprise",
      description:
        "Développement d'une application web de gestion de stocks et de commandes pour une PME locale.",
      technologies: ["React", "Node.js", "MongoDB"],
      imageUrl: "/dashboard.png",
      link: "/projets/professionnel/app-gestion",
      isProfessional: true,
    },
    {
      title: "Site E-commerce",
      description:
        "Création d'une plateforme e-commerce avec système de paiement sécurisé et gestion de catalogue.",
      technologies: ["Next.js", "Stripe", "PostgreSQL"],
      imageUrl: "/pro/project2.jpg",
      link: "/projets/professionnel/ecommerce",
      isProfessional: true,
    },
  ];

  const personalProjects = [
    {
      title: "Application Mobile de Fitness",
      description:
        "Conception et développement d'une application mobile pour le suivi d'entraînements sportifs.",
      technologies: ["React Native", "Firebase"],
      imageUrl: "/perso/project1.jpg",
      link: "/projets/personnel/fitness-app",
      isProfessional: false,
    },
    {
      title: "Jeu Vidéo en Python",
      description:
        "Développement d'un jeu vidéo 2D en utilisant Pygame avec des mécaniques originales.",
      technologies: ["Python", "Pygame"],
      imageUrl: "/perso/project2.jpg",
      link: "/projets/personnel/pygame",
      isProfessional: false,
    },
  ];

  return (
    <div className="pt-16 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">
            Mes <span className="text-cyan-400">Projets</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Découvrez mes réalisations professionnelles et personnelles, ainsi
            que les certifications que j'ai obtenues.
          </p>
        </div>

        {/* Projets pro */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <BriefcaseIcon className="h-8 w-8 text-cyan-500" />
            <h2 className="text-2xl font-bold">Projets Professionnels</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {professionalProjects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </section>

        {/* Projets perso */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <CodeBracketIcon className="h-8 w-8 text-blue-500" />
            <h2 className="text-2xl font-bold">Projets Personnels</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {personalProjects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <AcademicCapIcon className="h-8 w-8 text-cyan-500" />
            <h2 className="text-2xl font-bold">Certifications</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <CertificationCard
                key={index}
                title={cert.title}
                issuer={cert.issuer}
                date={cert.date}
                slug={cert.slug}
                Icon={cert.icon}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProjectsPage;
