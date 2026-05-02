// src/app/veille/page.tsx
import { Metadata } from "next";
import PearltreesSection from "@/app/components/PearltreesSection";

export const metadata: Metadata = {
  title: "Veille Informatique | Cybersécurité dans le jeu vidéo",
  description:
    "Ma veille technologique sur la cybersécurité dans l'industrie du jeu vidéo",
};

export default function VeillePage() {
  return (
    <div className="pt-16 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">
            Veille <span className="text-cyan-400">Technologique</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Mise en place d’une veille technologique active dans le secteur IT
          </p>
        </div>

        <PearltreesSection />

        {/* Section détaillée sur le thème */}
        <div className="mt-20 bg-gray-900/50 rounded-2xl p-8 border border-gray-800">
  <h2 className="text-2xl font-bold mb-6">
    Les dangers de l&#39;IA sur nos systèmes d&#39;exploitation et applications.
  </h2>

  <div className="prose prose-invert max-w-none">
  <a
    href="/intelligence artificielle pose des risques croissants pour la sécurité des systèmes et applications.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="block bg-zinc-900 hover:bg-zinc-800 transition rounded-2xl p-6 border border-zinc-700 shadow-lg"
  >
    <div className="flex items-center gap-4">
      {/* Icône PDF */}
      <div className="text-red-500 text-4xl">
        📄
      </div>

      {/* Contenu */}
      <div>
        <h3 className="text-xl font-bold">
          Veille : IA et cybersécurité
        </h3>
        <p className="text-zinc-400">
          Intelligence artificielle et risques croissants pour la sécurité des systèmes et applications.
        </p>
      </div>
    </div>
  </a>
</div>
</div>
      </div>
    </div>
  );
}
