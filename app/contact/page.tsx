// src/app/contact/page.tsx
import { Metadata } from "next";
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  ChatBubbleLeftRightIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";
import ContactForm from "@/app/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact | Portfolio Étudiant BTS SIO SLAM",
  description:
    "Contactez-moi pour discuter de projets, d'opportunités ou simplement échanger sur des sujets technologiques.",
};

const ContactPage = () => {
  return (
    <div className="pt-16 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">
            Me <span className="text-cyan-400">contacter</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Vous avez une question, une proposition ou souhaitez discuter d'un
            projet ? N'hésitez pas à me contacter.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Section Informations de contact */}
          <div>
            <div className="bg-gray-900/50 rounded-2xl p-8 border border-gray-800 mb-8">
              <h2 className="text-2xl font-bold mb-6">
                Informations de contact
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg">
                    <EnvelopeIcon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold">Email</h3>
                    <a
                      href="mailto:contact@portfolio.com"
                      className="text-cyan-400 hover:underline"
                    >
                      toddbahouna3@gmail.com
                    </a>
                    <p className="text-gray-400 mt-1">
                      Réponse sous 24-48 heures
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg">
                    <PhoneIcon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold">Téléphone</h3>
                    <a href="" className="text-cyan-400 hover:underline">
                      😁
                    </a>
                    <p className="text-gray-400 mt-1">Disponible de 9h à 18h</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg">
                    <MapPinIcon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold">Localisation</h3>
                    <p className="text-gray-300">Paris, Île-de-France</p>
                    <p className="text-gray-400 mt-1">
                      Disponible pour des opportunités en Île-de-France ou en
                      télétravail
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg">
                    <ClockIcon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold">Disponibilité</h3>
                    <p className="text-gray-300">En recherche d'alternance</p>
                    <p className="text-gray-400 mt-1">
                      Ouvert à toute opportunité dès maintenant
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="text-xl font-bold mb-4">Réseaux sociaux</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://www.linkedin.com/in/todd-bahouna-saint-698124291/"
                    target="_blank"
                    className="p-3 bg-gray-800 rounded-lg hover:bg-cyan-500/10 transition-colors"
                  >
                    <svg
                      className="h-6 w-6 text-[#0A66C2]"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>

                  <a
                    href="https://github.com/Davtdd"
                    target="_blank"
                    className="p-3 bg-gray-800 rounded-lg hover:bg-cyan-500/10 transition-colors"
                  >
                    <svg
                      className="h-6 w-6 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                    </svg>
                  </a>
                  {/* 
                  <a
                    href="https://twitter.com/"
                    target="_blank"
                    className="p-3 bg-gray-800 rounded-lg hover:bg-cyan-500/10 transition-colors"
                  >
                    <svg
                      className="h-6 w-6 text-[#1DA1F2]"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                  </a> */}
                </div>
              </div>
            </div>

            {/* Section Carte de localisation */}
            <div className="bg-gray-900/50 rounded-2xl p-6 border border-gray-800">
              <h2 className="text-xl font-bold mb-4">Localisation</h2>

              <div className="aspect-video bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-xl overflow-hidden">
                {/* Intégration Google Maps */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.0!2d2.3005!3d48.6334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1d1234567%3A0xabcdef1234567890!2sSainte-Genevi%C3%A8ve-des-Bois!5e0!3m2!1sfr!2sfr!4v0000000000000!5m2!1sfr!2sfr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>

              <p className="mt-4 text-gray-400">
                Basé à Sainte-Geneviève-des-Bois, je suis ouvert aux
                opportunités en Île-de-France ainsi qu'aux collaborations en
                télétravail.
              </p>
            </div>
          </div>

          {/* Section Formulaire de contact */}
          <div>
            <div className="bg-gray-900/50 rounded-2xl p-8 border border-gray-800">
              <div className="flex items-center gap-3 mb-6">
                <ChatBubbleLeftRightIcon className="h-8 w-8 text-cyan-500" />
                <h2 className="text-2xl font-bold">Envoyez un message</h2>
              </div>

              <p className="text-gray-400 mb-8">
                Remplissez le formulaire ci-dessous et je vous répondrai dans
                les plus brefs délais.
              </p>

              <ContactForm />
            </div>

            {/* Section FAQ */}
            <div className="bg-gray-900/50 rounded-2xl p-8 border border-gray-800 mt-8">
              <h2 className="text-2xl font-bold mb-6">Questions fréquentes</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold mb-2">
                    Quel est votre délai de réponse ?
                  </h3>
                  <p className="text-gray-400">
                    Je m'efforce de répondre à tous les messages dans un délai
                    de 24 à 48 heures. Pour les demandes urgentes, veuillez
                    utiliser le numéro de téléphone fourni.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold mb-2">
                    Êtes-vous disponible pour des missions freelance ?
                  </h3>
                  <p className="text-gray-400">
                    Actuellement, je suis principalement concentré sur mes
                    études et la recherche d'une alternance. Cependant, je suis
                    ouvert à discuter de petits projets qui pourraient
                    s'inscrire dans mon emploi du temps.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold mb-2">
                    Quel type d'opportunités recherchez-vous ?
                  </h3>
                  <p className="text-gray-400">
                    Je recherche principalement une alternance en développement
                    logiciel ou en cybersécurité, avec une orientation vers les
                    métiers de SOC analyst. Je suis particulièrement intéressé
                    par les entreprises innovantes dans le domaine de la
                    sécurité informatique.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
