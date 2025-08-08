// src/components/CyberSecuritySection.tsx
import {
  ShieldCheckIcon,
  LockClosedIcon,
  ChartBarIcon,
} from "@heroicons/react/24/outline";

const CyberSecuritySection = () => {
  const cyberSecurityPoints = [
    {
      icon: ShieldCheckIcon,
      title: "Sensibilisation aux enjeux",
      description:
        "Conscient des risques croissants du numérique, je m’intéresse activement aux bonnes pratiques de sécurisation des applications afin de contribuer à un environnement digital plus sûr.",
    },
    {
      icon: LockClosedIcon,
      title: "Pratiques de codage sécurisé",
      description:
        "Bonne maîtrise des principes OWASP, avec une attention particulière à la protection contre les injections SQL, les attaques XSS, ainsi qu’à la mise en place de systèmes d’authentification robustes.",
    },
    {
      icon: ChartBarIcon,
      title: "Orientation SOC",
      description:
        "Mon ambition professionnelle est de devenir analyste SOC (Security Operations Center), un rôle clé dans la surveillance, la détection et la réponse aux incidents de sécurité, afin de protéger efficacement les systèmes et les données.",
    },
  ];

  return (
    <section id="cybersecurite" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            Passion pour la <span className="text-cyan-400">Cybersécurité</span>
          </h2>
          <p className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto">
            Un domaine essentiel et en constante évolution dans lequel je
            souhaite me spécialiser afin de contribuer à la protection des
            systèmes, des réseaux et des données sensibles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cyberSecurityPoints.map((item, index) => (
            <div
              key={index}
              className="bg-gradient-to-b from-gray-900 to-gray-900/50 rounded-2xl p-8 border border-gray-800 hover:border-cyan-500 transition-colors"
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
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-2/3">
              <h3 className="text-2xl font-bold mb-4">Pourquoi le SOC ?</h3>
              <p className="text-gray-300 mb-4">
                Le Security Operations Center est le cœur de la défense
                informatique d’une organisation. En tant qu’analyste SOC, ma
                mission sera de surveiller en continu les systèmes, d’analyser
                les alertes de sécurité et de coordonner la réponse aux
                incidents.
              </p>
              <p className="text-gray-300">
                Ce rôle stratégique requiert des compétences techniques pointues
                ainsi qu’une forte capacité d’analyse, deux domaines dans
                lesquels je m’engage à me perfectionner pour apporter une réelle
                valeur ajoutée.
              </p>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-2xl opacity-20 animate-pulse"></div>
                <div className="relative w-48 h-48 rounded-full bg-gray-800 border border-cyan-500/30 flex items-center justify-center">
                  <ShieldCheckIcon className="h-24 w-24 text-cyan-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CyberSecuritySection;
