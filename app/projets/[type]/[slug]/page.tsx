// src/app/projets/[type]/[slug]/page.ts
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
  projectType?: string;
}

// CORRECTION : Ajout de searchParams pour correspondre au type Next.js
interface ProjectPageProps {
  params: Promise<{ type: string; slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}
// profils-itinerants
// Données projets (inchangées)
const professionalProjects: Project[] = [
  {
    title: "Application de Gestion de facture",
    description:
      "Gestion des factures (Next.js + PostgreSQL)\n\nDescription approfondie :\nCe projet est une application web full-stack développée avec Next.js et une base de données PostgreSQL, conçue pour la gestion complète des factures et des utilisateurs. L’objectif était de créer un outil permettant aux entreprises de suivre facilement leurs transactions et aux utilisateurs de gérer leurs factures de manière intuitive.\n\nFonctionnalités principales :\n- Création, modification et suppression de factures.\n- Association des factures à des utilisateurs spécifiques.\n- Tableau récapitulatif dynamique regroupant toutes les données des factures (montants, statuts, dates, clients).\n- Interface utilisateur ergonomique pour un suivi simplifié et rapide.\n- Gestion des erreurs et validation des entrées pour garantir l’intégrité des données.\n\nCompétences démontrées :\n- Développement full-stack avec Next.js.\n- Modélisation et gestion d’une base de données relationnelle PostgreSQL.\n- Création d’interfaces utilisateur interactives et tableaux de bord dynamiques.\n- Structuration et organisation d’un projet complet avec attention à l’expérience utilisateur.",
    technologies: ["Next.js", "PostgreSQL"],
    imageUrl: "/dashboard.png",
    link: "https://github.com/Davtdd/Dashboard-App.git",
    isProfessional: true,
    slug: "app-gestion",
  },
  {
    title:
      "Développement d'une plateforme web d’agrégation d’informations (formations, stages, salons d’emploi, événements)",
    description:
      "Plateforme d’agrégation d’informations (Next.js, TypeScript, Tailwind CSS, PostgreSQL)\n\nDescription approfondie :\nCette plateforme web vise à centraliser et rendre accessibles les informations sur les formations, stages, alternances, salons d’emploi, spectacles et événements en France. Le projet a été développé avec une stack moderne : Next.js, TypeScript, Tailwind CSS, PostgreSQL.\n\nFonctionnalités principales :\n- Conception d’un modèle de données efficace pour stocker différents types d’informations.\n- Développement full-stack avec intégration de scraping de données et d’API.\n- Recherche et filtrage des informations pour une consultation rapide.\n- Système de notifications pour les événements à venir.\n- Intégration des réseaux sociaux et mise à jour en temps réel des données.\n- Tests unitaires et déploiement automatisé pour garantir performance et scalabilité.\n\nCompétences démontrées :\n- Développement full-stack moderne avec Next.js \n- Conception et gestion de bases de données relationnelles.\n- Intégration d’API et automatisation de la collecte de données.\n- Création d’interfaces réactives et optimisées pour une bonne UX.",
    technologies: ["Next.js", "PostgreSQL"],
    imageUrl: "/agregation.png",
    link: "https://github.com/FYGS/plateforme-web-aggregation.git",
    isProfessional: true,
    slug: "agregation",
  },
];

const personalProjects: Project[] = [
  {
    title: "Développement d’une application web de petites annonces",
    description:
      "Application de petites annonces type Leboncoin (PHP + SQL + HTML/CSS + JS)\n\nDescription approfondie :\nCe projet est une application web de petites annonces permettant aux utilisateurs de créer, consulter et gérer des annonces. Développée en PHP, avec une base SQL, et un frontend en HTML/CSS (JavaScript pour améliorer l’expérience), l’application vise à reproduire les fonctionnalités principales d’un site comme Leboncoin.\n\nFonctionnalités principales :\n- Inscription et connexion sécurisées des utilisateurs avec chiffrement des mots de passe.\n- Création, modification et suppression d’annonces avec gestion des photos et informations complémentaires.\n- Consultation et filtrage des annonces selon plusieurs critères (prix, catégorie, etc.).\n- Ajout d’annonces aux favoris et suivi depuis le compte utilisateur.\n- Messagerie interne pour communiquer autour des annonces.\n\nCompétences démontrées :\n- Développement backend en PHP et gestion sécurisée des données utilisateurs.\n- Création d’interfaces utilisateurs interactives et réactives.\n- Gestion complète d’un workflow utilisateur pour un site de petites annonces.\n- Implémentation de fonctionnalités avancées comme favoris, filtres et messagerie.",
    technologies: ["HTML/CSS", "JavaScript", "PHP", "MySQL"],
    imageUrl: "/leboncoin.png",
    link: "https://github.com/Davtdd/Application-Web-de-Petites-Annonces.git",
    isProfessional: false,
    slug: "annonces-app",
  },
  {
    title: "Développement d’une application web de QCM",
    description:
      "Application de QCM (PHP + MySQL)\n\nDescription approfondie :\nCe projet est une application web de questionnaires à choix multiples (QCM) destinée à tester les connaissances des utilisateurs. Développée en PHP avec une base de données MySQL, l’application inclut un suivi des activités des utilisateurs ainsi qu’un système de notation automatique.\n\nFonctionnalités principales :\n- Inscription et connexion sécurisées des utilisateurs.\n- Génération aléatoire de questions pour chaque session.\n- Calcul automatique des scores basés sur les réponses données.\n- Journal des activités pour suivre les connexions et déconnexions.\n- Interface simple et intuitive pour répondre facilement aux QCM.\n\nCompétences démontrées :\n- Développement backend en PHP et gestion de base MySQL.\n- Implémentation d’un système de scoring et suivi utilisateur.\n- Création d’une interface web interactive et conviviale.\n- Organisation d’un projet complet avec fonctionnalités front-end et back-end.",
    technologies: ["HTML/CSS", "JavaScript", "PHP", "MySQL"],
    imageUrl: "/qcm.png",
    link: "https://github.com/Davtdd/Projet-Qcm.git",
    isProfessional: false,
    slug: "qcm",
  },


  {
  title: "Mise en place d’une infrastructure Active Directory avec profils itinérants",
  description:
    "Gestion des profils itinérants sous Active Directory\n\n" +
    "Description approfondie :\n" +
    "Dans le cadre d’un devoir en administration systèmes et réseaux, ce projet consistait à concevoir et configurer une infrastructure Active Directory permettant la gestion centralisée des profils utilisateurs via des profils itinérants. L’objectif principal était de garantir la portabilité des environnements utilisateurs sur différents postes du domaine tout en assurant la sécurité et la cohérence des données.\n\n" +

    "Un dossier partagé dédié (Profils$) a été mis en place sur le serveur afin d’héberger les profils itinérants. Les droits de partage et les permissions NTFS ont été configurés avec précision pour permettre la création automatique des dossiers utilisateurs grâce à la variable %username%, tout en respectant les bonnes pratiques de sécurité.\n\n" +

    "Fonctionnalités et configurations réalisées :\n" +
    "- Création et configuration d’un dossier partagé sécurisé pour les profils itinérants.\n" +
    "- Paramétrage des droits de partage et des permissions NTFS adaptés à un environnement multi-utilisateurs.\n" +
    "- Mise en place des profils itinérants via Active Directory.\n" +
    "- Intégration d’un poste client Windows 10 au domaine.\n" +
    "- Test et validation du chargement et de la synchronisation des profils utilisateurs.\n\n" +

    "Compétences démontrées :\n" +
    "- Administration d’un environnement Active Directory.\n" +
    "- Gestion des profils utilisateurs et des droits d’accès.\n" +
    "- Compréhension des mécanismes de profils itinérants sous Windows Server.\n" +
    "- Application des bonnes pratiques de sécurité et de gestion des accès.\n" +
    "- Méthodologie de test et validation fonctionnelle d’une infrastructure système.",
  technologies: ["Windows Server", "Active Directory", "NTFS", "Windows 10"],
  imageUrl: "/profils-itinerants.png",
  link: "/projets/systeme/profils-itinerants",
  isProfessional: true,
  slug: "profils-itinerants-ad"
}
,


  {
    title: "Portfolio Personnel",
    description:
      "Portfolio de Todd Bahouna Saint réalisé avec Next.js et TailwindCSS, conçu pour présenter mes projets, compétences et réalisations professionnelles. Le site inclut une gestion de veille technologique via Peraltrees pour centraliser et suivre mes apprentissages et actualités techniques. Un formulaire de contact fonctionnel, sécurisé par EmailJS et ReCAPTCHA, permet aux visiteurs de me contacter facilement. L’interface est entièrement responsive et optimisée pour une navigation fluide sur tous les appareils, illustrant mes compétences en développement front-end moderne et expérience utilisateur.",
    technologies: ["Next.js", "Tailwind CSS"],
    imageUrl: "/portfolio.png",
    link: "https://github.com/Davtdd/Portfolio.git",
    isProfessional: false,
    slug: "portfolio",
  },

  {
    title: "Portfolio Personne",
    description:
      "Portfolio de Todd Bahouna Saint réalisé avec Next.js et TailwindCSS, conçu pour présenter mes projets, compétences et réalisations professionnelles. Le site inclut une gestion de veille technologique via Peraltrees pour centraliser et suivre mes apprentissages et actualités techniques. Un formulaire de contact fonctionnel, sécurisé par EmailJS et ReCAPTCHA, permet aux visiteurs de me contacter facilement. L’interface est entièrement responsive et optimisée pour une navigation fluide sur tous les appareils, illustrant mes compétences en développement front-end moderne et expérience utilisateur.",
    technologies: ["Next.js", "Tailwind CSS"],
    imageUrl: "/portfolio.png",
    link: "https://github.com/Davtdd/Portfolio.git",
    isProfessional: false,
    projectType: "E6",
    slug: "GameConnect",
  },

  {
    title: "Portfolio Personnn",
    description:
      "Portfolio de Todd Bahouna Saint réalisé avec Next.js et TailwindCSS, conçu pour présenter mes projets, compétences et réalisations professionnelles. Le site inclut une gestion de veille technologique via Peraltrees pour centraliser et suivre mes apprentissages et actualités techniques. Un formulaire de contact fonctionnel, sécurisé par EmailJS et ReCAPTCHA, permet aux visiteurs de me contacter facilement. L’interface est entièrement responsive et optimisée pour une navigation fluide sur tous les appareils, illustrant mes compétences en développement front-end moderne et expérience utilisateur.",
    technologies: ["Next.js", "Tailwind CSS"],
    imageUrl: "/portfolio.png",
    link: "https://github.com/Davtdd/Portfolio.git",
    isProfessional: false,
    projectType: "E6",
    slug: "Gestion-budget",
  },


];


// Pré-génération des chemins statiques
export async function generateStaticParams() {
  return [
    ...professionalProjects.map((p) => ({
      type: "professionnel",
      slug: p.slug,
    })),
    ...personalProjects.map((p) => ({ type: "personnel", slug: p.slug })),
  
  ];
}

export default async function ProjectPage({
  params,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  searchParams,
}: ProjectPageProps) {
  const { type, slug } = await params;
  // const resolvedSearchParams = await searchParams; // Résolution nécessaire

  const projects =
    type === "professionnel" ? professionalProjects : personalProjects;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
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

      <p className="text-gray-300 mb-6 whitespace-pre-line">
        {project.description}
      </p>

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
        target="_blank"
        rel="noopener noreferrer"
      >
        Voir le projet complet
      </a>
    </main>
  );
}
