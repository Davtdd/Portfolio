// src/components/SkillsSection.tsx
import {
  CodeBracketIcon,
  ServerStackIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

const SkillsSection = () => {
  // Compétences techniques
  const technicalSkills = [
    { name: "JavaScript/TypeScript "},
    { name: "React/Next.js "},
    { name: "Python "},
    { name: "Base de donnee : Mysql, postgress "},
    { name: "Réseaux : OSI, TCP/IP, DHCP, DNS, NAT, ARP"},
    { name: "Sécurité Web"},
    { name: "PHP"},
    { name: "Java"},
    { name: "C#"},
  ];

  // Compétences interpersonnelles
  const softSkills = [
    { name: "Communication", icon: UserGroupIcon },
    { name: "Travail d'équipe", icon: UserGroupIcon },
    { name: "Résolution de problèmes", icon: CodeBracketIcon },
    { name: "Adaptabilité", icon: ServerStackIcon },
    { name: "Gestion de projet", icon: UserGroupIcon },
    { name: "Autonomie", icon: ServerStackIcon },
  ];

  return (
    <section id="competences" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            Mes <span className="text-cyan-400">Compétences</span>
          </h2>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            Curieux, rigoureux et à l’écoute, je développe des compétences
            techniques solides en développement, administration des systèmes et
            gestion des réseaux. Ces savoir-faire techniques s’accompagnent des
            qualités humaines indispensables pour évoluer efficacement dans les
            métiers de l’informatique, notamment en support, administration ou
            infrastructure et la gesttion de projet.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Compétences techniques */}
          <div className="bg-gray-900/50 rounded-2xl p-6 border border-gray-800">
            <div className="flex items-center gap-3 mb-6">
              <CodeBracketIcon className="h-8 w-8 text-cyan-500" />
              <h3 className="text-xl font-bold">Hard Skills</h3>
            </div>

            <div className="space-y-6">
              {technicalSkills.map((skill) => (
                <div key={skill.name} className="p-3 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-cyan-500 transition-colors">
                  <span className="font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Compétences interpersonnelles */}
          <div className="bg-gray-900/50 rounded-2xl p-6 border border-gray-800">
            <div className="flex items-center gap-3 mb-6">
              <UserGroupIcon className="h-8 w-8 text-blue-500" />
              <h3 className="text-xl font-bold">
                Soft Skills
              </h3>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {softSkills.map((skill, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center p-4 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-cyan-500 transition-colors"
                >
                  <skill.icon className="h-10 w-10 text-cyan-400 mb-2" />
                  <span className="text-center font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
