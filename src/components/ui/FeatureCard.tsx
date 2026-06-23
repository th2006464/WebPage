import type { ReactNode } from 'react';
import { useI18n } from '@/i18n/context';

interface FeatureCardProps {
  titleKey: string;
  bodyKey: string;
  icon: ReactNode;
  accent?: string;
}

export default function FeatureCard({ titleKey, bodyKey, icon, accent }: FeatureCardProps) {
  const { t } = useI18n();

  return (
    <article className="group relative bg-white/[0.02] border border-white/[0.05] rounded-2xl p-8 md:p-10 hover:border-brand/20 transition-all duration-500 overflow-hidden">
      {/* Hover glow */}
      <div className="absolute inset-0 bg-brand/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Accent stripe top */}
      <div
        className="absolute top-0 left-0 right-0 h-px transition-all duration-500 group-hover:h-0.5"
        style={{ background: accent || 'linear-gradient(90deg, transparent, #9e8448, transparent)', opacity: 0.4 }}
      />

      {/* Icon */}
      <div className="relative mb-6 text-brand/70 group-hover:text-brand transition-colors duration-500">
        {icon}
      </div>

      {/* Title */}
      <h3 className="relative text-[15px] font-medium tracking-[0.15em] uppercase text-white mb-3">
        {t(titleKey)}
      </h3>

      {/* Body */}
      <p className="relative text-sm leading-relaxed text-slate-400 group-hover:text-slate-300 transition-colors duration-500">
        {t(bodyKey)}
      </p>

      {/* Bottom hover accent */}
      <div className="absolute bottom-0 left-4 right-4 h-px bg-brand/10 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
    </article>
  );
}
