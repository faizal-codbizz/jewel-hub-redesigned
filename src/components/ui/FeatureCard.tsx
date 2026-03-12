import { CheckCircle2 } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  bullets: string[];
}

const FeatureCard = ({ icon: Icon, title, description, bullets }: FeatureCardProps) => {
  return (
    <div className="bg-white p-8 rounded-2xl border border-slate-100 hover:border-[#00468B]/20 hover:shadow-xl hover:shadow-[#00468B]/5 transition-all duration-300 group">
      <div className="w-12 h-12 rounded-xl bg-[#00468B]/5 flex items-center justify-center mb-6 group-hover:bg-[#00468B] transition-colors">
        <Icon className="w-6 h-6 text-[#00468B] group-hover:text-white transition-colors" />
      </div>
      <h3 className="text-xl font-semibold text-[#00468B] mb-3">{title}</h3>
      <p className="text-slate-600 mb-6 leading-relaxed font-light">{description}</p>
      <ul className="space-y-3">
        {bullets.map((bullet, index) => (
          <li key={index} className="flex items-start gap-3 text-sm text-slate-700 font-medium">
            <CheckCircle2 className="w-5 h-5 text-[#00468B] shrink-0" />
            {bullet}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FeatureCard;