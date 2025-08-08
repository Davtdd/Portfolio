// src/app/components/CertificationCard.tsx
import Link from "next/link";

interface CertificationCardProps {
  title: string;
  issuer: string;
  date: string;
  slug: string;
  Icon: React.ElementType;
}

const CertificationCard = ({
  title,
  issuer,
  date,
  slug,
  Icon,
}: CertificationCardProps) => {
  return (
    <Link href={`/projets/certifications/${slug}`}>
      <div className="bg-gray-900/50 rounded-2xl p-6 border border-gray-800 hover:border-cyan-500 transition-colors cursor-pointer">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg">
            <Icon className="h-6 w-6 text-white" />
          </div>
          <div>
            <h3 className="font-bold text-lg">{title}</h3>
            <p className="text-cyan-400 text-sm">{issuer}</p>
            <p className="text-gray-500 text-sm mt-1">{date}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CertificationCard;
