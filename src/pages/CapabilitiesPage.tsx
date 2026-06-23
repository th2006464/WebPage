import { useEffect } from 'react';
import { useI18n } from '@/i18n/context';
import { Shield, BarChart3, Cpu, Briefcase, Scale, Lock } from 'lucide-react';
import CapabilitiesHero from '@/components/hero/CapabilitiesHero';
import FeatureCard from '@/components/ui/FeatureCard';
import ShapeGrid from '@/components/ui/ShapeGrid';
import ScrollReveal from '@/components/ui/ScrollReveal';
import StrategyPanel from '@/components/sections/StrategyPanel';

const capabilityTiles = [
  { titleKey: 'advisoryTitle', bodyKey: 'advisoryBody' },
  { titleKey: 'managementTitle', bodyKey: 'managementBody' },
  { titleKey: 'technologyTitle', bodyKey: 'technologyBody' },
];

export default function CapabilitiesPage() {
  const { t, setPageKey } = useI18n();

  useEffect(() => { setPageKey('capabilities'); }, [setPageKey]);

  return (
    <>
      <title>{t('pageTitle')}</title>

      {/* Interactive grid background */}
      <div className="fixed inset-0 z-0" aria-hidden="true">
        <ShapeGrid
          shape="square"
          speed={0.4}
          squareSize={56}
          direction="diagonal"
          borderColor="rgba(158,132,72,0.04)"
          hoverFillColor="rgba(158,132,72,0.06)"
          hoverTrailAmount={3}
        />
      </div>

      <CapabilitiesHero />

      {/* ── Core Capabilities Grid ── */}
      <section className="relative max-w-7xl mx-auto px-6 md:px-8 pb-12">
        <ScrollReveal>
          <div className="mb-12 md:mb-16">
            <div className="w-8 h-px bg-brand/60 mb-5" />
            <h2 className="text-[11px] font-semibold tracking-[0.24em] uppercase text-brand mb-3">
              {t('sectionCoreCompetencies')}
            </h2>
            <p className="text-slate-400 text-sm max-w-lg">
              {t('sectionCoreCompetenciesDesc')}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <ScrollReveal delay={0}>
            <FeatureCard
              titleKey="card1Title"
              bodyKey="card1Body"
              icon={<Briefcase size={28} />}
            />
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <FeatureCard
              titleKey="card2Title"
              bodyKey="card2Body"
              icon={<Shield size={28} />}
            />
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <FeatureCard
              titleKey="advisoryTitle"
              bodyKey="advisoryBody"
              icon={<Scale size={28} />}
            />
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
          <ScrollReveal delay={0.15}>
            <FeatureCard
              titleKey="managementTitle"
              bodyKey="managementBody"
              icon={<BarChart3 size={28} />}
            />
          </ScrollReveal>
          <ScrollReveal delay={0.25}>
            <FeatureCard
              titleKey="technologyTitle"
              bodyKey="technologyBody"
              icon={<Cpu size={28} />}
            />
          </ScrollReveal>
        </div>
      </section>

      {/* ── Approach Banner ── */}
      <section className="relative max-w-7xl mx-auto px-6 md:px-8 py-12 md:py-16">
        <ScrollReveal>
          <div className="relative overflow-hidden rounded-3xl border border-white/[0.04] bg-white/[0.015] p-8 md:p-12">
            {/* Decorative background */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand/[0.04] rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-amber-900/[0.03] rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />
            </div>

            <div className="relative flex flex-col lg:flex-row gap-8 lg:items-center">
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 mb-4">
                  <Lock size={14} className="text-brand/60" />
                  <span className="text-[10px] font-semibold tracking-[0.24em] uppercase text-brand/60">
                    {t('sectionApproach')}
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-light tracking-tight text-white mb-3">
                  {t('approachTitle')}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed max-w-xl">
                  {t('approachDesc')}
                </p>
              </div>

              <div className="flex-shrink-0 flex gap-6 lg:gap-10">
                {[
                  { num: '100%', labelKey: 'statPrivate' },
                  { num: '24/7', labelKey: 'statOversight' },
                  { num: '0', labelKey: 'statPublicity' },
                ].map((stat) => (
                  <div key={stat.labelKey} className="text-center">
                    <div className="text-2xl md:text-3xl font-light text-white tracking-tight">
                      {stat.num}
                    </div>
                    <div className="text-[10px] tracking-[0.20em] uppercase text-slate-500 mt-1.5">
                      {t(stat.labelKey)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* ── Capability Domains ── */}
      <StrategyPanel tiles={capabilityTiles} />
    </>
  );
}
