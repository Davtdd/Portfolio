// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Todd Bahouna Saint | Portfolio Développeur & réseau et des systèmes",
  description:
    "Portfolio de Todd Bahouna Saint – Développeur web et réseau et des systèmes.",
  keywords: [
    "Todd BAHOUNA Saint",
    "Todd BAHOUNA SAINT",
    "Todd Bahouna Saint portfolio",
    "Todd BAHOUNA SAINT portfolio",
    "David Bahouna Saint",
    "David Bahouna Saint portfolio",
    "David BAHOUNA SAINT portfolio",
    "David Bahouna  portfolio",
    "Todd Bahouna  portfolio",
    "portfolio développeur",
    "cybersécurité",
    "Next.js",
    "développeur web",
    "React",
    "freelance",
    "frontend",
    "backend",
    "Vercel",
    "Python",
    "PHP",
    "C#",
    "Dart",
    "API",
    "API REST",
    "PostgreSQL",
    "MySQL",
    "MongoDB",
    "TailwindCSS",
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "GitHub",
    "Git",
    "Linux",
    "Ubuntu",
    "Debian",
    "Kali Linux",
    "Réseaux",
    "Sécurité informatique",
    "Firewall",
    "VPN",
    "Sécurité réseau",
    "Sécurité des données",
    "Veille technologique",
    "Gestion de projet",
    "Agile",
    "Scrum",
    "Communication",
    "Travail en équipe",
    "Résolution de problèmes",
    "Innovation",
    "Créativité",
    "Apprentissage continu",
    "Adaptabilité",
    "Proactivité",
    "Esprit d'initiative",
    "Organisation",
    "Gestion du temps",
    "Todd Bahouna Saint développeur",
    "David Bahouna Saint développeur",
    "Todd Bahouna Saint cybersécurité",
    "Todd Bahouna Saint admin réseau",
    "David Bahouna Saint admin réseau",
    "David Bahouna Saint technicien réseau",
    "Todd Bahouna Saint technicien réseau",
    "Todd Bahouna Saint support IT",
    "Todd Bahouna Saint support reseau",
    "Todd Bahouna Saint administrateur système",
    "David Bahouna Saint administrateur système",
    "David Bahouna Saint administrateur reseau",
    "Todd Bahouna Saint administrateur reseau",
    "Todd Bahouna Saint cybersécurité",
    "David Bahouna Saint cybersécurité",
    "Portfolio Todd Bahouna Saint",
    "Portfolio David Bahouna Saint",
    "Développeur web Todd Bahouna Saint",
    "Développeur web David Bahouna Saint",
    "Freelance Todd Bahouna Saint",
    "Freelance David Bahouna Saint",
  ],
  authors: [{ name: "Todd Bahouna Saint" }],
  creator: "Todd Bahouna Saint",
  metadataBase: new URL("https://todd-Bahouna-portfolio.vercel.app"),
  openGraph: {
    title:
      "Todd Bahouna Saint | Portfolio Développeur & réseau et des systèmes",
    description:
      "Portfolio de Todd Bahouna Saint – Développeur web et réseau et des systèmes.",
    url: "https://todd-Bahouna-portfolio.vercel.app",
    siteName: "Todd Bahouna Saint Portfolio",
    images: [
      {
        url: "/portfolio.png", // Image 1200x630 recommandée
        width: 1200,
        height: 630,
        alt: "Aperçu du portfolio de Todd Bahouna Saint",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },

  icons: {
    icon: "/fav.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body
        className={`${inter.className} bg-[#111111] text-white antialiased`}
      >
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
