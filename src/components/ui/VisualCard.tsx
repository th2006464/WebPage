import { useI18n } from '@/i18n/context';

interface VisualCardProps {
  titleKey: string;
  bodyKey: string;
}

export default function VisualCard({ titleKey, bodyKey }: VisualCardProps) {
  const { t } = useI18n();

  return (
    <article className="relative bg-white/[0.02] border border-white/[0.05] rounded-[32px] p-9 hover:border-brand/15 transition-all duration-500 group overflow-hidden">
      <div className="absolute top-0 right-0 w-48 h-48 bg-brand/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none" />
      <h3 className="relative text-[15px] font-medium tracking-[0.25em] uppercase text-white mb-4">
        {t(titleKey)}
      </h3>
      <p className="relative text-sm leading-relaxed text-slate-400">
        {t(bodyKey)}
      </p>
    </article>
  );
}
