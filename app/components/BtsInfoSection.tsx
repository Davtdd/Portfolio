// src/components/BtsInfoSection.tsx
import {
  CodeBracketIcon,
  ServerIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/outline";

const BtsInfoSection = () => {
  const btsDetails = [
    {
      icon: AcademicCapIcon,
      title: "Qu'est-ce que le BTS SIO?",
      description:
        "Le Brevet de Technicien Supérieur Services Informatiques aux Organisations forme des professionnels capables de répondre aux besoins informatiques des entreprises. Il se décline en deux options : SLAM (Solutions Logicielles et Applications Métiers) et SISR (Solutions d'Infrastructure, Systèmes et Réseaux).",
    },
    {
      icon: CodeBracketIcon,
      title: "Option SLAM",
      description:
        "L’option SLAM se concentre sur le développement logiciel. Elle forme des spécialistes capables de concevoir, développer, tester et maintenir des solutions applicatives robustes. Les compétences acquises couvrent la programmation, la gestion de bases de données, le développement web et mobile, ainsi que les bases de la cybersécurité applicative.",
    },
    {
      icon: ServerIcon,
      title: "Débouchés professionnels",
      description:
        "Cette formation permet d’accéder à des postes variés tels que développeur d’applications, programmeur analyste, chargé d’études informatiques, technicien d’études informatiques ou intégrateur web. Elle offre également de belles opportunités de poursuite d’études, notamment en licence professionnelle ou en école d’ingénieurs.",
    },
  ];

  return (
    <section id="bts-sio" className="py-20 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            Le <span className="text-cyan-400">BTS SIO</span> Option SLAM
          </h2>
          <p className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto">
            Une formation technique de deux ans qui prépare aux métiers du
            développement logiciel
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {btsDetails.map((item, index) => (
            <div
              key={index}
              className="bg-gray-800/20 rounded-2xl p-8 border border-gray-800 hover:border-cyan-500 transition-colors"
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 mb-6">
                <item.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-gray-400">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-cyan-900/20 to-blue-900/20 rounded-2xl p-8 border border-cyan-800/50">
          <h3 className="text-2xl font-bold mb-4">
            Pourquoi avoir choisi SLAM?
          </h3>
          <p className="text-gray-300">
            J’ai choisi l’option SLAM car elle correspond parfaitement à ma
            passion pour la création logicielle et la résolution de
            problématiques techniques concrètes. Cette spécialisation me permet
            d’acquérir des compétences solides en développement d’applications
            tout en intégrant des aspects essentiels tels que la sécurité des
            applications, la gestion de projet et l’analyse des besoins
            utilisateurs. Fort d’une expérience de deux années en Licence ASWR
            (Administration des Systèmes, du Web et des Réseaux), j’ai pu
            développer des compétences pratiques en systèmes, réseaux et
            administration, que je complète aujourd’hui par une approche
            approfondie du développement logiciel. Passionné par la
            cybersécurité, les systèmes et les réseaux, je m’investis activement
            pour approfondir mes connaissances dans ces domaines complémentaires
            et en constante évolution. Le programme du BTS SIO SLAM, qui couvre
            des technologies modernes et variées, me prépare ainsi efficacement
            aux exigences et aux réalités du marché de l’emploi dans le secteur
            informatique.
          </p>
          <p className="text-gray-300 mt-4">
            Le programme du BTS SIO SLAM couvre des technologies modernes et
            variées, me préparant efficacement aux réalités du marché du travail
            dans le secteur informatique.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BtsInfoSection;
