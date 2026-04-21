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
    <p>
      L&#39;intelligence artificielle pose des risques croissants pour la sécurité des systèmes d&#39;exploitation et applications, en amplifiant les cyberattaques et en introduisant de nouvelles vulnérabilités. Des menaces comme le code généré par IA vulnérable et l&#39;automatisation des attaques.
    </p><br />

    <strong><h3>Menaces Principales</h3><br /></strong>

    <p>
      L&#39;IA facilite le phishing sophistiqué via deepfakes et emails personnalisés, rendant les attaques plus convaincantes et massives. Les malwares polymorphes auto-évolutifs échappent aux antivirus traditionnels en modifiant leur code dynamiquement. L&#39;empoisonnement de données biaise les modèles IA intégrés aux OS ou apps, faussant les détections de sécurité.
    </p><br />

    <p>
      <strong>Vulnérabilités dans le Code :</strong> 70% des entreprises détectent des failles dans le code généré par IA, avec 20% subissant des incidents graves dus à une inspection insuffisante. Les outils comme Copilot reproduisent des vulnérabilités de leurs données d&#39;entraînement, comme des injections SQL. L&#39;&quot;IA fantôme&quot; (outils non autorisés) crée des angles morts, augmentant les risques dans les apps.
    </p><br />

    <p>
      <strong>Attaques sur Systèmes :</strong> Les bots IA scannent massivement les failles zero-day dans les OS et apps, exploitant-les en minutes. Les attaques adversariales trompent les IA embarquées (ex. : reconnaissance dans Android/iOS), menaçant la stabilité. Prompt injection exploite les chatbots ou assistants dans les applications.
    </p><br />

    <p>
      <strong>Mesures Recommandées :</strong> Renforcez les revues de code et formations pour contrer les failles IA. Adoptez des SIEM IA pour détecter anomalies en temps réel. Contrôlez l&#39;usage d&#39;IA via politiques internes.
    </p>
  </div>
</div>
      </div>
    </div>
  );
}
