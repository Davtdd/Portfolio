// src/components/CallToActionSection.tsx
import {
  ArrowDownTrayIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/outline";

const CallToActionSection = () => {
  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-r from-cyan-900/10 to-blue-900/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            Intéressé par mon <span className="text-cyan-400">profil</span> ?
          </h2>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            N’hésitez pas à me contacter pour discuter de projets,
            d’opportunités ou simplement échanger sur des sujets technologiques.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <a
              href="/Cv_moi.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center p-8 bg-gray-900 rounded-2xl border border-gray-800 hover:border-cyan-500 transition-colors group"
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 mb-6">
                <ArrowDownTrayIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Télécharger mon CV</h3>
              <p className="text-gray-400 text-center">
                Consultez mon curriculum vitae pour plus de détails sur mon
                parcours et mes compétences.
              </p>
              <span className="mt-4 text-cyan-400 group-hover:underline">
                Télécharger
              </span>
            </a>

            <a
              href="https://www.linkedin.com/in/todd-bahouna-saint-698124291/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center p-8 bg-gray-900 rounded-2xl border border-gray-800 hover:border-cyan-500 transition-colors group"
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 mb-6">
                <ChatBubbleLeftRightIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Contactez-moi</h3>
              <p className="text-gray-400 text-center">
                N’hésitez pas à m’envoyer un message sur LinkedIn pour échanger
                sur d’éventuelles collaborations ou opportunités.
              </p>
              <span className="mt-4 text-cyan-400 group-hover:underline">
                Me contacter
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
