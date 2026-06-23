import { useEffect } from 'react';
import { useI18n } from '@/i18n/context';
import { Target, Heart, Gem } from 'lucide-react';
import AboutHero from '@/components/hero/AboutHero';
import FeatureCard from '@/components/ui/FeatureCard';
import ShapeGrid from '@/components/ui/ShapeGrid';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function AboutPage() {
  const { t, setPageKey } = useI18n();

  useEffect(() => { setPageKey('about'); }, [setPageKey]);

  return (
    <>
      <title>{t('pageTitle')}</title>

      {/* Interactive grid background */}
      <div className="fixed inset-0 z-0" aria-hidden="true">
        <ShapeGrid
          shape="hexagon"
          speed={0.3}
          squareSize={64}
          direction="diagonal"
          borderColor="rgba(158,132,72,0.05)"
          hoverFillColor="rgba(158,132,72,0.07)"
          hoverTrailAmount={4}
        />
      </div>

      <AboutHero />

      {/* ── Mission Statement ── */}
      <section className="relative max-w-7xl mx-auto px-6 md:px-8 pb-16 md:pb-24">
        <ScrollReveal>
          <div className="relative max-w-3xl">
            {/* Large quote mark */}
            <div className="text-[120px] md:text-[160px] font-light leading-none text-brand/[0.06] select-none -mb-16 -ml-4">
              &ldquo;
            </div>

            <p className="text-xl md:text-2xl lg:text-3xl font-light leading-relaxed text-slate-200">
              {t('missionBody')}
            </p>

            <div className="flex items-center gap-4 mt-8">
              <div className="w-12 h-px bg-brand/30" />
              <span className="text-[11px] tracking-[0.24em] uppercase text-slate-500">
                {t('missionTitle')}
              </span>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* ── Presence & Stewardship Cards ── */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 pb-16 md:pb-24">
        <ScrollReveal>
          <div className="mb-12 md:mb-16">
            <div className="w-8 h-px bg-brand/60 mb-5" />
            <h2 className="text-[11px] font-semibold tracking-[0.24em] uppercase text-brand mb-3">
              {t('sectionHowWeWork')}
            </h2>
            <p className="text-slate-400 text-sm max-w-lg">
              {t('sectionHowWeWorkDesc')}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <ScrollReveal delay={0}>
            <FeatureCard
              titleKey="card1Title"
              bodyKey="card1Body"
              icon={<Target size={28} />}
            />
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <FeatureCard
              titleKey="card2Title"
              bodyKey="card2Body"
              icon={<Heart size={28} />}
            />
          </ScrollReveal>
        </div>
      </section>

      {/* ── Values Section ── */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 pb-16 md:pb-24">
        <ScrollReveal>
          <div className="mb-12 md:mb-16">
            <div className="w-8 h-px bg-brand/60 mb-5" />
            <h2 className="text-[11px] font-semibold tracking-[0.24em] uppercase text-brand mb-3">
              {t('valuesTitle')}
            </h2>
            <p className="text-slate-400 text-sm max-w-lg">
              {t('valuesBody')}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            { titleKey: 'valueDiscretion', descKey: 'valueDiscretionDesc', icon: <Gem size={22} /> },
            { titleKey: 'valuePatience', descKey: 'valuePatienceDesc', icon: <Heart size={22} /> },
            { titleKey: 'valueStewardship', descKey: 'valueStewardshipDesc', icon: <Target size={22} /> },
          ].map((v, i) => (
            <ScrollReveal key={v.titleKey} delay={i * 0.15}>
              <article className="group relative bg-white/[0.02] border border-white/[0.05] rounded-2xl p-8 md:p-10 hover:border-brand/15 transition-all duration-500 overflow-hidden">
                <div className="absolute inset-0 bg-brand/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <div className="relative mb-5 text-brand/50 group-hover:text-brand/70 transition-colors duration-500">
                  {v.icon}
                </div>
                <h3 className="relative text-[13px] font-medium tracking-[0.20em] uppercase text-white mb-3">
                  {t(v.titleKey)}
                </h3>
                <p className="relative text-sm leading-relaxed text-slate-400">
                  {t(v.descKey)}
                </p>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ── Standard Banner ── */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 pb-16 md:pb-24">
        <ScrollReveal>
          <div className="relative overflow-hidden rounded-3xl border border-brand/[0.06] bg-brand/[0.02] p-8 md:p-12 text-center">
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand/[0.03] rounded-full blur-[120px]" />
            </div>
            <div className="relative max-w-2xl mx-auto">
              <Gem size={24} className="mx-auto mb-4 text-brand/50" />
              <h3 className="text-lg md:text-xl font-light text-slate-200 mb-3 tracking-tight">
                {t('standardTitle')}
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                {t('standardBody')}
              </p>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
