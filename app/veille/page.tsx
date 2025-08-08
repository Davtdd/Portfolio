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
            Surveillance active des innovations en cybersécurité appliquée au
            domaine du jeu vidéo
          </p>
        </div>

        <PearltreesSection />

        {/* Section détaillée sur le thème */}
        <div className="mt-20 bg-gray-900/50 rounded-2xl p-8 border border-gray-800">
          <h2 className="text-2xl font-bold mb-6">
            La Cybersécurité dans le Jeu Vidéo
          </h2>

          <div className="prose prose-invert max-w-none">
            <p>
              L'industrie du jeu vidéo représente aujourd'hui un marché de plus
              de 200 milliards de dollars, dépassant les industries du cinéma et
              de la musique combinées. Cette croissance exponentielle
              s'accompagne de nouveaux défis en matière de sécurité.
            </p>

            <h3>Enjeux principaux</h3>
            <ul>
              <li>
                <strong>Protection des données utilisateurs</strong> : avec des
                millions de comptes créés quotidiennement
              </li>
              <li>
                <strong>Sécurité des transactions</strong> : achats in-game et
                microtransactions
              </li>
              <li>
                <strong>Lutte contre la triche</strong> : outils anti-cheat et
                préservation de l'équité compétitive
              </li>
              <li>
                <strong>Sécurité des infrastructures</strong> : protection
                contre les DDoS et attaques de serveurs
              </li>
              <li>
                <strong>Protection de la propriété intellectuelle</strong> :
                lutte contre le piratage et les fuites
              </li>
            </ul>

            <h3>Évolutions récentes</h3>
            <p>
              Les éditeurs déploient désormais des solutions de sécurité
              avancées comme :
            </p>
            <ul>
              <li>Kernels anti-cheat (Easy Anti-Cheat, BattlEye)</li>
              <li>Analyse comportementale des joueurs</li>
              <li>Chiffrement de bout en bout pour les communications</li>
              <li>Systèmes de détection d'intrusion spécifiques</li>
            </ul>

            <h3>Perspectives d'avenir</h3>
            <p>L'avenir de la cybersécurité dans le jeu vidéo passera par :</p>
            <ul>
              <li>
                L'intégration de l'IA pour détecter les comportements anormaux
              </li>
              <li>
                Le développement de blockchain pour sécuriser les actifs
                numériques
              </li>
              <li>
                Une collaboration accrue entre éditeurs et chercheurs en
                sécurité
              </li>
              <li>
                La mise en place de standards de sécurité pour l'industrie
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
