// src/app/components/CertificationData.ts
import { AcademicCapIcon, ShieldCheckIcon } from "@heroicons/react/24/outline";

export const certifications = [
  {
    title: "Certificat Réseau Cisco",
    issuer: "Cisco Networking Academy",
    date: "Juin 2024",
    slug: "certificat-reseau-cisco",
    description:
      "Formation approfondie sur les réseaux informatiques, incluant les protocoles, le routage et la configuration des équipements Cisco.",
    skills: [
      "Configuration de routeurs",
      "Analyse de trafic",
      "Sécurité réseau",
    ],
    imageUrl: "/certifications/cisco.png",
    credentialLink: "#", // plus utilisé mais requis pour compatibilité
    icon: ShieldCheckIcon,
  },
  {
    title: "Introduction à la Cybersécurité",
    issuer: "OpenClassrooms",
    date: "Mai 2024",
    slug: "cybersecurite-openclassrooms",
    description:
      "Découverte des principes de base de la cybersécurité, gestion des risques, sécurité des systèmes et des données.",
    skills: [
      "Sécurité des données",
      "Détection de vulnérabilités",
      "Prévention des attaques",
    ],
    imageUrl: "/certifications/cyber.png",
    credentialLink: "#",
    icon: AcademicCapIcon,
  },
];
