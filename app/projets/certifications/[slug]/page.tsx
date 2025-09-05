// src/app/projets/certifications/[slug]/page.tsx

import { notFound } from "next/navigation";
import { certifications } from "@/app/components/CertificationData";
import { Metadata } from "next";
import Image from "next/image";

interface Props {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export const generateMetadata = async ({
  params,
  searchParams,
}: Props): Promise<Metadata> => {
  const { slug } = await params;
  await searchParams; // Résolution nécessaire même si non utilisée
  const cert = certifications.find((c) => c.slug === slug);

  return {
    title: cert ? `${cert.title} | Certification` : "Certification introuvable",
    description: cert ? `Détails de la certification ${cert.title}` : "",
  };
};

const CertificationPage = async ({ params, searchParams }: Props) => {
  const { slug } = await params;
  await searchParams; // Résolution nécessaire
  const cert = certifications.find((c) => c.slug === slug);

  if (!cert) return notFound();
  return (
    <div className="pt-20 pb-20 max-w-3xl mx-auto px-4">
      <div className="bg-gray-900/50 p-8 rounded-2xl border border-gray-800">
        <div className="flex items-center gap-4 mb-6">
          <div className="p-3 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg">
            <div className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold">{cert.title}</h1>
            <p className="text-cyan-400">{cert.issuer}</p>
            <p className="text-gray-500 text-sm">{cert.date}</p>
          </div>
        </div>

        <div className="mb-6 rounded-lg overflow-hidden border border-gray-800">
          <Image
            src={cert.imageUrl}
            alt={`Image de la certification ${cert.title}`}
            width={800}
            height={450}
            className="w-full h-auto object-cover"
          />
        </div>

        <p className="text-gray-300 mb-6">{cert.description}</p>

        {cert.skills && (
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-white mb-2">
              Compétences développées :
            </h2>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              {cert.skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default CertificationPage;
