// src/app/a-propos/page.tsx
import { Metadata } from "next";
import {
  UserIcon,
  AcademicCapIcon,
  MapPinIcon,
  BriefcaseIcon,
  LightBulbIcon,
  CodeBracketIcon,
  ServerIcon,
} from "@heroicons/react/24/outline";
import Timeline from "@/app/components/Timeline";
import Image from "next/image";

export const metadata: Metadata = {
  title: "À propos | Portfolio Étudiant BTS SIO SLAM",
  description:
    "En savoir plus sur mon parcours, mes compétences et mes aspirations professionnelles.",
};

const AboutPage = () => {
  const skills = [
    { name: "Développement Web", level: 85 },
    { name: "Bases de données", level: 75 },
    { name: "Réseaux informatiques", level: 65 },
    { name: "Cybersécurité (connaissance)", level: 70 },
    { name: "Gestion de projet", level: 60 },
    { name: "UI/UX Design", level: 55 },
  ];

  const interests = [
    { name: "Cybersécurité", icon: LightBulbIcon },
    { name: "Développement Full Stack", icon: CodeBracketIcon },
    { name: "Cloud Computing", icon: ServerIcon },
    { name: "Intelligence Artificielle", icon: LightBulbIcon },
    { name: "Jeux Vidéo", icon: LightBulbIcon },
    { name: "Technologies Émergentes", icon: LightBulbIcon },
  ];

  const timelineEvents = [
    {
      date: "2024 – Présent",
      title: "BTS Services Informatiques aux Organisations (SIO) – Option SLAM",
      institution: "F2I",
      description: `
    Formation complète axée sur le développement de solutions logicielles et d'applications métiers,
    incluant l’analyse, la conception, la programmation, et la maintenance.
    Parallèlement, acquisition de compétences en administration réseau, gestion des infrastructures,
    protocoles réseaux, sécurité informatique, et dépannage.
    Cette formation permet d’acquérir une double expertise en développement logiciel et en réseaux,
    essentielle pour répondre aux besoins IT des organisations modernes.
  `,
    },
    {
      date: "3 juin - août 2025",
      title: "Stage Développeur Web",
      institution: "A'Numerique",
      description: `
    - Développement d’un application de Gestion de facture(Next.js + PostgreSQL), déployé sur Vercel.
    
    - Conception et réalisation d’une Plateforme Web d’Agrégation d’Informations (alternances, stages, formations, salons d'emploi, spectacles, événements) destinée à faciliter l’accès à l’information pour les étudiants, chercheurs d’emploi et alternants.
    
    Missions principales :
    • Participation au développement Fullstack avec Next.js (React), TypeScript, Tailwind CSS, Python, PrismaORM et PostgreSQL.
    • Veille technologique et étude des meilleures solutions pour le scraping, extraction et traitement de données.
    • Conception d’une architecture robuste pour une mise à jour des données en temps réel.
    • Implémentation de fonctionnalités clés : recherche, filtrage, notifications événementielles, intégration réseaux sociaux.
    • Tests unitaires et d’intégration pour assurer qualité et performance.
    • Rédaction d’une documentation technique détaillée.
    • Déploiement automatisé et optimisation de l’expérience utilisateur.
    
    Objectif du projet :
    Offrir une plateforme scalable et intuitive pour centraliser et rendre accessibles les informations essentielles sur les formations et événements en France, répondant à un besoin crucial des publics ciblés.
  `,
    },
    {
      date: "Octobre 2023 – Juin 2024",
      title: "Technicien Réseaux",
      institution: "Congo Télécom",
      description: `
      • Supervision et maintenance du réseau, gestion du filtrage IP et des pare-feux.
      • Réduction des incidents liés à la sécurité de 30 % grâce à une surveillance proactive et des interventions ciblées.
      • Collaboration avec les équipes techniques pour optimiser la performance réseau.
    `,
    },
    {
      date: "Octobre 2022 – Septembre 2023",
      title: "Développeur Web",
      institution: "Groupe Eneo",
      description: `
      • Développement d’applications web avec Next.js et Node.js, intégration d’architectures modernes.
      • Participation à la conception et à l’implémentation de solutions techniques adaptées aux besoins métiers.
      • Contribution à l’amélioration continue des plateformes existantes via optimisation du code et déploiements.
    `,
    },

    {
      date: "2022 – 2024",
      title:
        "Licence ASWR – Administration des Systèmes, du Web et des Réseaux",
      institution: "Institut universitaire de Brazzaville (IUB)",
      description: `
    Formation complète dédiée à l'administration des systèmes informatiques, la gestion des réseaux, 
    ainsi qu'au développement et à la maintenance des applications web. 
    Acquis solides en gestion d’infrastructures, sécurisation des réseaux, 
    déploiement d'environnements cloud et optimisation des systèmes d'information.
  `,
    },
    {
      date: "2021 - 2022",
      title: "Baccalauréat Général",
      institution: "Lycée Général-Chaminade",
      description: "Spécialités Science Naturelle.",
    },
  ];

  return (
    <div className="pt-16 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">
            À <span className="text-cyan-400">propos</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Découvrez mon parcours, mes compétences et mes centres d’intérêt.
          </p>
        </div>

        {/* Section Présentation */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold mb-6">Qui suis-je ?</h2>

              <p className="text-gray-300 mb-4">
                Étudiant en deuxième année de BTS Services Informatiques aux
                Organisations (SIO), option SLAM (Solutions Logicielles et
                Applications Métiers), je développe une expertise technique
                solide à la fois en développement logiciel et en administration
                des réseaux. <br /> Mon parcours académique et mes expériences
                pratiques m’ont permis de maîtriser la conception, le
                développement d’applications ainsi que les fondamentaux de la
                sécurité informatique et de la gestion des infrastructures
                réseau.
              </p>

              <p className="text-gray-300 mb-4">
                Passionné par les technologies depuis mon adolescence, où j’ai
                commencé à créer des sites web et des applications simples, je
                souhaite désormais orienter ma carrière vers la cybersécurité,
                en tirant parti de mes compétences polyvalentes pour répondre
                aux défis actuels en protection des systèmes d’information.{" "}
                <br /> Si vous recherchez un alternant motivé, curieux et prêt à
                s’investir pleinement dans des projets concrets, je serais ravi
                d’échanger sur les opportunités au sein de votre entreprise.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
                <div className="flex items-center gap-3">
                  <UserIcon className="h-5 w-5 text-cyan-400" />
                  <span>21 ans</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPinIcon className="h-5 w-5 text-cyan-400" />
                  <span>Sainte-Geneviève-des-Bois, France</span>
                </div>
                <div className="flex items-center gap-3">
                  <AcademicCapIcon className="h-5 w-5 text-cyan-400" />
                  <span>BTS SIO SLAM</span>
                </div>
                <div className="flex items-center gap-3">
                  <BriefcaseIcon className="h-5 w-5 text-cyan-400" />
                  <span>En recherche d’alternance</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-900/50 rounded-2xl p-6 border border-gray-800">
              <div className="aspect-square w-full max-w-xs mx-auto rounded-2xl overflow-hidden">
                <div className="bg-#111111-250 ">
                  <Image
                    src="/moi3.jpg"
                    alt="Photo de profil"
                    width={500}
                    height={700}
                    className="w-full h-auto rounded-full shadow-lg border-1 border-cyan-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section Compétences */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold mb-8">Mes compétences</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-900/50 rounded-2xl p-6 border border-gray-800">
              <h3 className="text-xl font-bold mb-6">Techniques</h3>

              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-cyan-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2.5">
                      <div
                        className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2.5 rounded-full"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-900/50 rounded-2xl p-6 border border-gray-800">
              <h3 className="text-xl font-bold mb-6">Centres d’intérêt</h3>

              <div className="grid grid-cols-2 gap-4">
                {interests.map((interest, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center justify-center p-4 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-cyan-500 transition-colors"
                  >
                    <interest.icon className="h-10 w-10 text-cyan-400 mb-2" />
                    <span className="text-center font-medium">
                      {interest.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section Parcours */}
        <section style={{ whiteSpace: "pre-line" }}>
          <h2 className="text-2xl font-bold mb-8">Mon parcours</h2>
          <Timeline events={timelineEvents} />
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
