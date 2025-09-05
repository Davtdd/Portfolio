// src/components/PearltreesSection.tsx
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

const PearltreesSection = () => {
  return (
    <section className="bg-gray-900/50 rounded-2xl p-8 border border-gray-800">
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="md:w-1/2">
          <h2 className="text-2xl font-bold mb-4">Ma Méthode de Veille</h2>
          <p className="text-gray-300 mb-4">
            J’utilise Pearltrees pour organiser ma veille technologique de façon
            efficace et structurée.
          </p>
          <p className="text-gray-300 mb-6">
            Cette plateforme me permet de collecter, organiser et partager des
            ressources pertinentes sur la cybersécurité dans l’industrie du jeu
            vidéo.
          </p>
          <a
            href="https://www.pearltrees.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg font-medium hover:opacity-90 transition-opacity"
          >
            Voir ma veille sur Pearltrees
            <ArrowTopRightOnSquareIcon className="h-4 w-4" />
          </a>
        </div>

        <div className="md:w-1/2 w-full">
          <div className="aspect-video bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border-2 border-dashed border-gray-700 rounded-xl flex items-center justify-center">
            <div className="text-center p-6">
              <div className="text-cyan-400 font-bold text-lg mb-2">
                Pearltrees
              </div>
              <p className="text-gray-400 text-sm">
                Collection Pearltrees
                <iframe
                  src="https://www.pearltrees.com/boobatodd?embed=2&d=2025061171"
                  width="400"
                  height="310"
                  className="block pt-[2px] text-[#818181] text-[13px]"
                  //   allowTransparency={true}
                ></iframe>
                <span className="block pt-[2px] text-[#818181] text-[13px]">
                  <a
                    href="https://www.pearltrees.com/boobatodd"
                    className="border-0"
                    target="_blank"
                  >
                    todd BAHOUNA SAINT
                  </a>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PearltreesSection;
