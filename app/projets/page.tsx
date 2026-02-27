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
    // {
    //   title: "Application de Gestion de facture",
    //   description:
    //     "Application de gestion des factures avec Next.js & PostgreSQL. Elle permet la gestion des utilisateurs et de leurs factures, avec un tableau récapitulatif dynamique et intuitif.",
    //   technologies: ["React", "Node.js", "PostgreSQL"],
    //   imageUrl: "/dashboard.png",
    //   link: "/projets/professionnel/app-gestion",
    //   isProfessional: true,
    // },
    {
      title:
        "Développement d'une plateforme web d’agrégation d’informations (formations, stages, salons d’emploi, événements)",
      description:
        "Développement d'une plateforme web d’agrégation d’informations (formations, stages, salons d’emploi, événements) avec Next.js, TypeScript, TailwindCSS, Python, PrismaORM et PostgreSQL. Le projet permet la centralisation, la recherche et le filtrage des opportunités, avec un système de notifications et une architecture scalable.",
      technologies: ["Next.js", "Stripe", "PostgreSQL"],
      imageUrl: "/agregation.png",
      link: "/projets/professionnel/agregation",
      isProfessional: true,
    },
  ];

  const personalProjects = [


    // Projet academique

    {
      title: "Développement d’une application web de petites annonces",
      description:
        "Développement d’une application web de petites annonces inspirée de Leboncoin avec PHP, SQL, HTML/CSS et JavaScript. L’outil permet l’inscription et la connexion sécurisées des utilisateurs, la gestion complète des annonces (création, modification, suppression, favoris), la consultation et le filtrage des annonces, ainsi que la messagerie entre utilisateurs.",
      technologies: ["HTML/CSS", "JavaScript", "PHP", "MySQL"],
      imageUrl: "/leboncoin.png",
      link: "/projets/academique/annonces-app",
      isProfessional: false,
      projectType: "academique",
    },
    {
      title: "Développement d’une application web de QCM",
      description:
        "Développement d’une application web de QCM avec PHP et MySQL. Le système permet aux utilisateurs de s’inscrire, de se connecter, de répondre à des questions aléatoires, d’obtenir une note automatique et inclut un journal des activités pour le suivi des connexions et déconnexions.",
      technologies: ["HTML/CSS", "JavaScript", "PHP", "MySQL"],
      imageUrl: "/qcm.png",
      link: "/projets/academique/qcm",
      isProfessional: false,
      projectType: "academique",
    },


    {
  title: "Mise en place des profils itinérants sous Active Directory",
  description:
    "Configuration d’un environnement Active Directory avec gestion des profils itinérants. Mise en place d’un dossier partagé sécurisé pour l’hébergement des profils utilisateurs, intégration d’un poste client Windows 10 au domaine et validation du chargement automatique des profils.",
  technologies: ["Windows Server", "Active Directory", "Windows 10"],
  imageUrl: "/profils-itinerants.png",
  link: "/projets/systeme/profils-itinerants",
  isProfessional: false,
  projectType: "academique",
},



// Projet E6

     {
      title: "Portfolio Personnel",
      description:
        "Portfolio de Todd Bahouna Saint développé avec Next.js et TailwindCSS. Intègre la gestion de veille technologique avec Peraltrees, un formulaire de contact fonctionnel via EmailJS et un système de ReCAPTCHA pour la sécurité.",
      technologies: ["Next.js", "Tailwind CSS"],
      imageUrl: "/portfolio.png",
      link: "/projets/E6/portfolio",
      isProfessional: false,
    },

    {
      title: "Portfolio Personnel",
      description:
        "Portfolio de Todd Bahouna Saint développé avec Next.js et TailwindCSS. Intègre la gestion de veille technologique avec Peraltrees, un formulaire de contact fonctionnel via EmailJS et un système de ReCAPTCHA pour la sécurité.",
      technologies: ["Next.js", "Tailwind CSS"],
      imageUrl: "/portfolio.png",
      link: "/projets/E6/GameConnect",
      isProfessional: false,
      projectType: "E6",
    },
    {
      title: "Portfolio Personne",
      description:
        "Portfolio de Todd Bahouna Saint développé avec Next.js et TailwindCSS. Intègre la gestion de veille technologique avec Peraltrees, un formulaire de contact fonctionnel via EmailJS et un système de ReCAPTCHA pour la sécurité.",
      technologies: ["Next.js", "Tailwind CSS"],
      imageUrl: "/portfolio.png",
      link: "/projets/E6/Gestion-budget",
      isProfessional: false,
      projectType: "E6",
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
            que les certifications que j’ai obtenues.
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
            <h2 className="text-2xl font-bold">Projets Personnels & Académiques </h2>
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
