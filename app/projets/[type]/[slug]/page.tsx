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
  slug: "profils-itinerants"
}
,
{
  title: "Analyse d’une attaque Man-in-the-Middle par ARP Spoofing",
  description:
    "Projet d’analyse d’une attaque Man-in-the-Middle via ARP Spoofing\n\n" +

    "Description approfondie :\n" +
    "Dans le cadre d’un projet en administration systèmes et réseaux, cette étude avait pour objectif de comprendre, reproduire en environnement contrôlé et analyser une attaque de type Man-in-the-Middle (MITM) basée sur l’ARP Spoofing. L’attaque a été réalisée dans un réseau local de test afin d’observer le comportement des machines et l’impact sur la sécurité des communications.\n\n" +

    "Le scénario consistait à simuler un attaquant placé sur le même réseau local que les victimes, permettant ainsi l’usurpation des tables ARP et l’interception du trafic réseau. Cette approche a permis de mettre en évidence les risques liés à l’absence de mécanismes de protection au niveau de la couche liaison.\n\n" +

    "Activités réalisées :\n" +
    "- Mise en place d’un réseau local de test isolé (environnement virtualisé).\n" +
    "- Simulation d’un attaquant présent sur le même réseau que les victimes.\n" +
    "- Utilisation d’outils d’ARP Spoofing pour empoisonner les tables ARP.\n" +
    "- Interception et redirection du trafic réseau entre les machines cibles.\n" +
    "- Analyse des paquets capturés (identifiants, données non chiffrées, requêtes réseau).\n" +
    "- Observation des échanges en clair et identification des failles de sécurité.\n" +
    "- Étude de l’impact sur la confidentialité et l’intégrité des données.\n" +
    "- Proposition de contre-mesures : ARP statique, utilisation de HTTPS, mise en place d’un IDS/IPS.\n\n" +

    "Compétences démontrées :\n" +
    "- Compréhension du fonctionnement du protocole ARP et des attaques MITM.\n" +
    "- Mise en place et sécurisation d’un réseau local de test.\n" +
    "- Analyse de trafic réseau et inspection de paquets.\n" +
    "- Utilisation d’outils de cybersécurité en environnement contrôlé.\n" +
    "- Identification des vulnérabilités réseau et des risques associés.\n" +
    "- Proposition de solutions de sécurisation adaptées (prévention et détection).\n" +
    "- Sensibilisation aux bonnes pratiques de sécurité réseau.",
  technologies: ["Linux", "Wireshark", "ARP Spoofing Tools", "VirtualBox", "Réseaux TCP/IP"],
  imageUrl: "/arp.png",
  link: "/projets/reseau/arp-spoofing-mitm",
  isProfessional: true,
  slug: "arp-spoofing-mitm"
},
{
  title: "Installation et configuration d’un serveur DHCP et DNS",
  description:
    "Projet d’installation et de configuration d’un serveur DHCP et DNS en environnement réseau local\n\n" +

    "Description approfondie :\n" +
    "Dans le cadre d’un projet en systèmes et réseaux, l’objectif était de mettre en place une infrastructure permettant l’automatisation de l’attribution des adresses IP ainsi que la résolution de noms au sein d’un réseau local. Le serveur DHCP a été configuré pour distribuer automatiquement des adresses IP aux machines clientes, réduisant ainsi les erreurs de configuration manuelle et facilitant la gestion du réseau.\n\n" +

    "Parallèlement, un serveur DNS a été installé et configuré afin d’assurer la résolution des noms de domaine en adresses IP, permettant une communication plus simple et plus intuitive entre les machines du réseau. Des tests de connectivité ont été réalisés entre les postes clients afin de vérifier le bon fonctionnement des services DHCP et DNS.\n\n" +

    "Activités réalisées :\n" +
    "- Installation et configuration d’un serveur DHCP.\n" +
    "- Définition de plages d’adresses IP et options réseau.\n" +
    "- Mise en place et configuration d’un serveur DNS local.\n" +
    "- Association des noms d’hôtes aux adresses IP.\n" +
    "- Tests de connectivité entre plusieurs postes clients.\n" +
    "- Vérification du bon renouvellement des adresses IP.\n\n" +

    "Compétences démontrées :\n" +
    "- Administration d’un serveur DHCP et DNS.\n" +
    "- Compréhension du fonctionnement de l’adressage IP dynamique.\n" +
    "- Gestion de la résolution de noms dans un réseau local.\n" +
    "- Diagnostic et tests de connectivité réseau.\n" +
    "- Mise en place d’une infrastructure réseau fonctionnelle.",
  technologies: ["Windows Server", "DHCP", "DNS", "Réseaux TCP/IP"],
  imageUrl: "/dhcp-dns.png",
  link: "/projets/reseau/dhcp-dns",
  isProfessional: true,
  slug: "dhcp-dns"
},
{
  title: "Mise en place d’une infrastructure réseau segmentée avec VLAN",
  description:
    "Configuration de VLAN et routage inter-VLAN\n\n" +

    "Description approfondie :\n" +
    "Dans le cadre d’un projet en administration réseaux, ce travail consistait à concevoir une architecture réseau segmentée à l’aide de VLAN (Virtual Local Area Network). L’objectif principal était de séparer logiquement plusieurs réseaux au sein d’une même infrastructure physique afin d’améliorer la sécurité, les performances et l’organisation du système d’information.\n\n" +

    "Plusieurs VLAN ont été créés pour représenter différents services (ex : administration, utilisateurs, invités). Les ports du switch ont été configurés en mode access pour être affectés aux VLAN correspondants, tandis qu’un lien trunk a été mis en place pour permettre la communication entre les équipements réseau.\n\n" +

    "Le routage inter-VLAN a été configuré via un routeur (Router-on-a-Stick), permettant aux différents VLAN de communiquer entre eux tout en conservant leur isolation logique. Des tests de connectivité (ping) ont été réalisés afin de valider le bon fonctionnement de l’ensemble de l’infrastructure.\n\n" +

    "Fonctionnalités et configurations réalisées :\n" +
    "- Création et configuration de plusieurs VLAN.\n" +
    "- Affectation des ports du switch aux VLAN correspondants.\n" +
    "- Configuration d’un lien trunk entre switch et routeur.\n" +
    "- Mise en place du routage inter-VLAN (Router-on-a-Stick).\n" +
    "- Vérification de la connectivité entre les différents réseaux.\n\n" +

    "Compétences démontrées :\n" +
    "- Segmentation réseau avec VLAN.\n" +
    "- Configuration de switch (mode access et trunk).\n" +
    "- Compréhension du routage inter-VLAN.\n" +
    "- Diagnostic réseau et tests de connectivité.\n" +
    "- Mise en œuvre des bonnes pratiques de structuration réseau.",
  technologies: ["Cisco Packet Tracer", "VLAN", "Routage", "Switching"],
  imageUrl: "/vlan.png",
  link: "/projets/reseau/vlan-reseau",
  isProfessional: true,
  slug: "vlan-reseau"
},


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
  title: "GameConnect",
  description:
    "GameConnect est un réseau social dédié aux gamers, développé en HTML, CSS et PHP avec une base de données MySQL. Cette version bêta permet aux utilisateurs de s’inscrire et se connecter via un système d’authentification sécurisé avec mot de passe hashé et gestion de session. Chaque utilisateur dispose d’un profil personnalisé incluant pseudo, avatar et bio. La plateforme propose un fil d’actualité affichant les publications des utilisateurs par ordre chronologique, avec la possibilité de créer des posts contenant du texte, des images ou des liens vers des vidéos de gameplay. Les utilisateurs peuvent interagir entre eux grâce à un système de commentaires et de likes avec compteur. L’interface est conçue pour être simple, fonctionnelle et adaptée aux usages d’un réseau social, illustrant les compétences en développement web back-end et front-end ainsi qu’en gestion de base de données.\n Tous les documents présents sur mon GitHub en cliquant sur voir le projet complet ",
  technologies: ["HTML", "CSS", "PHP", "MySQL"],
  imageUrl: "/gameconnect.png",
  link: "https://github.com/Davtdd/GameConnect",
  isProfessional: false,
  slug: "GameConnect",
},

{
  title: "Gestion de Budget",
  description:
    "Application desktop de gestion budgétaire développée en Java avec JavaFX pour l’interface graphique et MySQL pour la gestion des données. Elle permet à un utilisateur de s’inscrire et se connecter de manière sécurisée grâce à un système d’authentification avec mots de passe hashés. L’utilisateur peut enregistrer ses revenus et ses dépenses en les catégorisant (loyer, loisirs, courses, etc.), tout en bénéficiant d’un calcul automatique du solde. L’application propose également une visualisation des dépenses via un diagramme circulaire pour faciliter l’analyse financière, ainsi qu’un historique complet des transactions modifiables et supprimables. La base de données a été conçue en amont avec les modèles MCD, MLD et MPD, et l’architecture repose sur une séparation des couches (interface, logique métier, accès aux données).\n Tous les documents présents sur mon GitHub en cliquant sur voir le projet complet ",
  technologies: ["Java", "JavaFX", "MySQL"],
  imageUrl: "/gestion-budget.png",
  link: "https://github.com/Davtdd/BudjetPersonnel",
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
