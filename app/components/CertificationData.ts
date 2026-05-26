// src/app/components/CertificationData.ts
import { ShieldCheckIcon } from "@heroicons/react/24/outline";

export const certifications = [
  {
    title: "Certification SecNumacadémie",
    issuer: "SecNumacadémie",
    date: "Septembre 2025",
    slug: "secnumacademie",
    description:
      "Certification obtenue via SecNumacadémie, la plateforme officielle de formation en cybersécurité de l’ANSSI (Agence nationale de la sécurité des systèmes d’information).\n\n\n Cette certification atteste de ma capacité à adopter et appliquer les bonnes pratiques de cybersécurité, aussi bien dans un contexte personnel que professionnel, et constitue une base essentielle pour évoluer vers des métiers de l’IT, du développement ou de la sécurité informatique",
    skills: ["Les principes fondamentaux de la sécurité numérique",
      "La gestion des mots de passe et des accès",
      "La sécurisation des postes de travail et des réseaux",
      "La détection des menaces (phishing, malwares, attaques courantes)",
      "Les bonnes pratiques de protection des données et de la vie privée",
      "La sensibilisation aux risques numériques en milieu professionnel"],
    imageUrl: "/SecNumacadémie.png",
    credentialLink: "#", // plus utilisé mais requis pour compatibilité
    icon: ShieldCheckIcon,
  },

  {
    title: "Introduction à la Cybersécurité",
    issuer: "Cisco NetAcad",
    date: "Octobre 2025",
    slug: "cybersecurite-ciso",
    description:
      "Certification obtenue via Cisco Networking Academy (NetAcad), portant sur les fondamentaux de la cybersécurité et la compréhension des menaces numériques dans les environnements modernes.\n\n\n Cette certification atteste de ma compréhension globale des enjeux de la cybersécurité et de ma capacité à adopter une approche responsable et sécurisée dans les projets informatiques, en lien avec le développement, les réseaux et les systèmes. ",
    skills: [
      "Les concepts de base de la cybersécurité et de la cyberdéfense",
      "Les types de menaces et d’attaques (malwares, phishing, ingénierie sociale, ransomwares)",
      "Les principes de protection des réseaux, des systèmes et des données",
      "La gestion des risques et la notion de défense en profondeur",
      "Les enjeux éthiques et professionnels liés à la cybersécurité",
      "La découverte des métiers et parcours en cybersécurité",
    ],
    imageUrl: "/netacad.png",
    credentialLink: "#",
    icon: ShieldCheckIcon,
  },
  {
  title: "HTML Essentials",
  issuer: "Cisco NetAcad",
  date: "26 mai",
  slug: "html-essentials",
  description:
    "Formation d’introduction aux bases du HTML permettant de créer des pages web structurées, accessibles et interactives à partir de zéro. Ce cours est idéal pour les débutants souhaitant comprendre le fonctionnement du Web et poser des bases solides en développement front-end.\n\nCette formation m’a permis d’acquérir une compréhension claire de la structure d’une page web et des bonnes pratiques de développement HTML moderne.",
  skills: [
    "Compréhension de la structure d’un document HTML",
    "Utilisation des balises HTML (titres, paragraphes, listes, images, liens)",
    "Création de formulaires simples (inputs, labels, boutons)",
    "Notions de sémantique HTML et accessibilité",
    "Organisation du contenu web de manière logique et lisible",
    "Introduction aux bonnes pratiques du développement web"
  ],
  imageUrl: "/Html.png",
  credentialLink: "#",
  icon: ShieldCheckIcon,
},
];
