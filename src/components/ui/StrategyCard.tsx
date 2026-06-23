import { useI18n } from '@/i18n/context';

interface StrategyCardProps {
  titleKey: string;
  bodyKey: string;
}

export default function StrategyCard({ titleKey, bodyKey }: StrategyCardProps) {
  const { t } = useI18n();

  return (
    <article className="group bg-surface-card/50 border border-white/[0.04] rounded-2xl p-8 md:p-10 hover:border-brand/20 hover:bg-surface-hover transition-all duration-500">
      <div className="w-8 h-px bg-brand/60 mb-6 group-hover:w-12 transition-all duration-500" />
      <h3 className="text-[13px] font-medium tracking-[0.28em] uppercase text-brand mb-4">
        {t(titleKey)}
      </h3>
      <p className="text-sm leading-relaxed text-slate-400">
        {t(bodyKey)}
      </p>
    </article>
  );
}
