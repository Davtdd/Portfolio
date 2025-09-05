// src/components/AboutSection.tsx
import {
  UserIcon,
  AcademicCapIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
// import Image from "next/image";

const AboutSection = () => {
  return (
    <section id="a-propos" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-2xl transform rotate-3"></div>
              <div className="relative aspect-square bg-gray-800 border-2 border-dashed border-gray-700 rounded-2xl overflow-hidden">
                {/* Image de l'étudiant */}
                {/* <Image
                  src="/moi3.jpg"
                  alt="Photo de profil"
                  width={500}
                  height={700}
                  className="w-full h-auto rounded-full shadow-lg border-1 border-cyan-500"
                /> */}
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              À propos de <span className="text-cyan-400">moi</span>
            </h2>

            <p className="text-gray-300 mb-6">
              Actuellement en BTS SIO, option SLAM, je développe mes compétences
              en programmation et conception d’applications tout en m’appuyant
              sur un solide bagage en administration des systèmes et réseaux,
              acquis lors de ma formation précédente en licence ASWR. Cette
              double expertise me permet d’avoir une vision complète des
              environnements informatiques, aussi bien côté développement que
              côté infrastructure. Passionné par les défis techniques et la
              résolution de problèmes, je m’efforce de rester polyvalent et
              curieux, prêt à intervenir sur différents aspects d’un système
              d’information. Cette approche me permet de mieux comprendre les
              enjeux globaux des projets informatiques et d’apporter des
              solutions adaptées et efficaces.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <UserIcon className="h-6 w-6 text-cyan-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold">Identité</h3>
                  <p className="text-gray-400">
                    {" "}
                    Todd BAHOUNA SAINT : Étudiant en BTS SIO SLAM
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <AcademicCapIcon className="h-6 w-6 text-cyan-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold">Formation</h3>
                  <p className="text-gray-400">
                    BTS Services Informatiques aux Organisations - Option SLAM -
                    F2I
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPinIcon className="h-6 w-6 text-cyan-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold">Localisation</h3>
                  <p className="text-gray-400">France</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-bold mb-4">Mon parcours</h3>
              <p className="text-gray-300">
                Issu d’un baccalauréat général avec spécialité Sciences
                naturelles, j’ai commencé ma formation en informatique au Congo
                Brazzaville, en intégrant une Licence en Administration des
                Systèmes, du Web et des Réseaux (ASWR). Ce cursus m’a permis de
                développer de solides compétences techniques en infrastructure,
                réseaux et services web. À mon arrivée en France, j’ai choisi de
                compléter ce parcours en intégrant un BTS SIO (Services
                Informatiques aux Organisations), avec pour objectif d’ancrer
                mes compétences dans les référentiels français, et de me
                confronter directement aux réalités du terrain à travers des
                projets concrets et des stages en entreprise. Ce parcours me
                permet aujourd’hui de conjuguer maîtrise technique, adaptabilité
                et connaissance des attentes professionnelles locales, dans une
                logique de montée en compétences continue.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
