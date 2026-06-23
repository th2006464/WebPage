import { useI18n } from '@/i18n/context';

interface SectionTitleProps {
  titleKey: string;
  subtitleKey?: string;
}

export default function SectionTitle({ titleKey, subtitleKey }: SectionTitleProps) {
  const { t } = useI18n();

  return (
    <div className="mb-12 md:mb-16">
      <div className="w-8 h-px bg-brand/60 mb-5" />
      <h2 className="text-[11px] font-semibold tracking-[0.24em] uppercase text-brand mb-3">
        {t(titleKey)}
      </h2>
      {subtitleKey && (
        <p className="text-slate-400 text-sm max-w-lg">
          {t(subtitleKey)}
        </p>
      )}
    </div>
  );
}
