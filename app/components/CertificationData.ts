// src/app/components/CertificationData.ts
import { ShieldCheckIcon } from "@heroicons/react/24/outline";

export const certifications = [
  {
    title: "Certification SecNumacadémie",
    issuer: "SecNumacadémie",
    date: "Septembre 2025",
    slug: "secnumacademie",
    description:
      "Certification SecNumacadémie : Todd Messie David BAHOUNA SAINT a suivi avec succès les quatre modules du MOOC SecNumacadémie, obtenant d’excellents scores aux évaluations. Cette formation atteste de ses compétences en cybersécurité, sensibilisation aux risques numériques et bonnes pratiques informatiques, renforçant son profil professionnel dans le domaine IT.",
    skills: ["Sécurité réseau"],
    imageUrl: "/SecNumacadémie.png",
    credentialLink: "#", // plus utilisé mais requis pour compatibilité
    icon: ShieldCheckIcon,
  },
  // {
  //   title: "Introduction à la Cybersécurité",
  //   issuer: "OpenClassrooms",
  //   date: "Mai 2024",
  //   slug: "cybersecurite-openclassrooms",
  //   description:
  //     "Découverte des principes de base de la cybersécurité, gestion des risques, sécurité des systèmes et des données.",
  //   skills: [
  //     "Sécurité des données",
  //     "Détection de vulnérabilités",
  //     "Prévention des attaques",
  //   ],
  //   imageUrl: "/certifications/cyber.png",
  //   credentialLink: "#",
  //   icon: AcademicCapIcon,
  // },
];
