// src/components/HeroSection.tsx
import Link from "next/link";
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-cyan-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-blue-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-72 h-72 bg-purple-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="block">Bonjour, je suis Todd BAHOUNA SAINT</span>
              <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
                Étudiant en BTS SIO SLAM
              </span>
            </h1>

            <p className="mt-6 text-lg text-gray-300 max-w-2xl">
              Passionné par le développement logiciel, la cybersécurité ainsi
              que l’administration des systèmes et réseaux, je me spécialise
              dans la création d’applications performantes et sécurisées tout en
              maîtrisant la gestion des infrastructures informatiques, réseaux
              et systèmes. Actuellement en formation, je suis à la recherche
              d’une alternance qui me permettra de mettre en pratique ces
              compétences variées au sein d’entreprises innovantes et de
              contribuer efficacement à des projets techniques aussi bien côté
              développement que côté infrastructure.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/Cv_moi.pdf"
                target="_blank"
                className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg font-medium hover:opacity-90 transition-opacity flex items-center gap-2"
              >
                <ArrowDownTrayIcon className="h-5 w-5" />
                Voir mon CV
              </Link>

              <Link
                href="https://www.linkedin.com/in/todd-bahouna-saint-698124291/"
                target="_blank"
                className="px-8 py-3 border border-cyan-400 text-cyan-400 rounded-lg font-medium hover:bg-cyan-400/10 transition-colors"
              >
                Contactez-moi
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square w-full max-w-md mx-auto bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-full overflow-hidden border border-gray-800 flex items-center justify-center">
              <div className="w-full max-w-[500px] h-auto border-dashed rounded-xl">
                <Image
                  src="/developpeur-cybersecurite.png"
                  alt="Photo de profil"
                  width={500}
                  height={700}
                  className="w-full h-auto rounded-full shadow-lg border-4 border-cyan-500"
                />
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-gray-900 px-4 py-2 rounded-lg border border-gray-800">
              <p className="text-sm font-medium">
                <span className="text-cyan-400">
                  Développeur Full Stack(web)
                </span>{" "}
                &{" "}
                <span className="text-blue-400">
                  Administrateur Systèmes & Réseaux
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
