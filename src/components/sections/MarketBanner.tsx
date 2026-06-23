import { useI18n } from '@/i18n/context';
import ScrollReveal from '@/components/ui/ScrollReveal';

interface MarketBannerProps {
  banners: { titleKey: string; bodyKey: string }[];
}

export default function MarketBanner({ banners }: MarketBannerProps) {
  const { t } = useI18n();

  return (
    <section className="max-w-7xl mx-auto px-6 md:px-8 py-8 md:py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {banners.map((banner, i) => (
          <ScrollReveal key={banner.titleKey} delay={i * 0.2}>
            <div className="bg-white/[0.015] border border-white/[0.04] rounded-2xl p-7 md:p-9 hover:border-brand/15 transition-all duration-500">
              <span className="text-[11px] font-semibold tracking-[0.24em] uppercase text-brand block mb-3">
                {t(banner.titleKey)}
              </span>
              <strong className="text-base md:text-lg font-normal leading-relaxed text-slate-300 block">
                {t(banner.bodyKey)}
              </strong>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
