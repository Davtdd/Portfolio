// src/components/Footer.tsx
import Link from "next/link";
import {
  LinkedinIcon,
  GithubIcon,
  MailIcon,
  //   TwitterIcon,
  //   InstagramIcon,
} from "@/app/components/SocialIcons";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-800 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Portfolio</h3>
            <p className="text-gray-400 mb-6">
              Portfolio professionnel d’un étudiant en BTS SIO option SLAM,
              passionné par le développement et la cybersécurité.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://www.linkedin.com/in/todd-bahouna-saint-698124291/"
                target="_blank"
                className="text-gray-400 hover:text-cyan-400"
              >
                <LinkedinIcon className="h-6 w-6" />
              </Link>
              <Link
                href="https://github.com/Davtdd"
                target="_blank"
                className="text-gray-400 hover:text-cyan-400"
              >
                <GithubIcon className="h-6 w-6" />
              </Link>
              <Link
                href="mailto:toddbahouna3@gmail.com"
                className="text-gray-400 hover:text-cyan-400"
              >
                <MailIcon className="h-6 w-6" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Navigation</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  Accueil
                </Link>
              </li>
              <li>
                <Link
                  href="/projets"
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  Projets
                </Link>
              </li>
              <li>
                <Link
                  href="/veille"
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  Veille Informatique
                </Link>
              </li>
              <li>
                <Link
                  href="/a-propos"
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  À propos
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <address className="not-italic text-gray-400 space-y-3">
              <p>Étudiant en BTS SIO SLAM</p>
              <p>France</p>
              <p>
                <Link
                  href="mailto:toddbahouna3@gmail.com"
                  className="hover:text-cyan-400"
                >
                  toddbahouna3@gmail.com
                </Link>
              </p>
              {/* <p>
                <Link href="tel:+33123456789" className="hover:text-cyan-400">
                  +33 1 23 45 67 89
                </Link>
              </p> */}
            </address>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>
            © {currentYear} Todd BAHOUNA SAINT — Étudiant BTS SIO SLAM —
            Passionné par les systèmes, le développement et la cybersécurité
            (oui, c’est un peu beaucoup, je sais😁). Tous droits réservés.
          </p>
          <p className="mt-2">Conçu avec Next.js, Tailwind CSS et passion.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
