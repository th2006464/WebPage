import { useI18n } from '@/i18n/context';

interface PageHeroProps {
  titleKey: string;
  subtitleKey: string;
  bodyKey: string;
}

export default function PageHero({ titleKey, subtitleKey, bodyKey }: PageHeroProps) {
  const { t } = useI18n();

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand/3 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-8">
        <div className="max-w-3xl">
          <div className="w-8 h-px bg-brand/60 mb-6" />
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tighter leading-none text-white">
            {t(titleKey)}
          </h1>
          <p className="text-base md:text-lg text-slate-300 mt-6 leading-relaxed">
            {t(subtitleKey)}
          </p>
          <p className="text-sm md:text-base text-slate-500 mt-4 max-w-2xl leading-relaxed">
            {t(bodyKey)}
          </p>
        </div>
      </div>
    </section>
  );
}
