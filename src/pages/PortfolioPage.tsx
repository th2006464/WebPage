import { useEffect } from 'react';
import { useI18n } from '@/i18n/context';
import { Building2, Network, Handshake, TrendingUp, Globe, ShieldCheck } from 'lucide-react';
import PortfolioHero from '@/components/hero/PortfolioHero';
import FeatureCard from '@/components/ui/FeatureCard';
import ScrollReveal from '@/components/ui/ScrollReveal';

const portfolioAreas = [
  {
    titleKey: 'assetTitle',
    bodyKey: 'assetBody',
    icon: <Building2 size={28} />,
  },
  {
    titleKey: 'techTitle',
    bodyKey: 'techBody',
    icon: <Network size={28} />,
  },
  {
    titleKey: 'participationTitle',
    bodyKey: 'participationBody',
    icon: <Handshake size={28} />,
  },
];

export default function PortfolioPage() {
  const { t, setPageKey } = useI18n();

  useEffect(() => { setPageKey('portfolio'); }, [setPageKey]);

  return (
    <>
      <title>{t('pageTitle')}</title>

      <PortfolioHero />

      {/* ── Portfolio Approach Diagram ── */}
      <section className="relative max-w-7xl mx-auto px-6 md:px-8 pb-12">
        <ScrollReveal>
          <div className="mb-12 md:mb-16">
            <div className="w-8 h-px bg-brand/60 mb-5" />
            <h2 className="text-[11px] font-semibold tracking-[0.24em] uppercase text-brand mb-3">
              Investment Philosophy
            </h2>
            <p className="text-slate-400 text-sm max-w-lg">
              Three pillars that define every allocation decision.
            </p>
          </div>
        </ScrollReveal>

        {/* Three-pillar layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            { icon: <TrendingUp size={24} />, title: 'Endurance', desc: 'We seek assets that compound through cycles, not headlines. Durability matters more than velocity.' },
            { icon: <Globe size={24} />, title: 'Diversification', desc: 'Across continents, jurisdictions, and asset classes — insulation from any single point of failure.' },
            { icon: <ShieldCheck size={24} />, title: 'Privacy', desc: 'Structures designed to protect ownership, preserve control, and keep our principals\' interests confidential.' },
          ].map((pillar, i) => (
            <ScrollReveal key={pillar.title} delay={i * 0.15}>
              <div className="group relative bg-white/[0.02] border border-white/[0.05] rounded-2xl p-8 md:p-10 hover:border-brand/15 transition-all duration-500 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand/[0.03] rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none" />
                <div className="relative flex flex-col items-center text-center">
                  <div className="mb-5 text-brand/60 group-hover:text-brand transition-colors duration-500">
                    {pillar.icon}
                  </div>
                  <h3 className="text-[15px] font-medium tracking-[0.20em] uppercase text-white mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-400">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ── Asset Categories ── */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 pb-12">
        <ScrollReveal>
          <div className="mb-12 md:mb-16">
            <div className="w-8 h-px bg-brand/60 mb-5" />
            <h2 className="text-[11px] font-semibold tracking-[0.24em] uppercase text-brand mb-3">
              Asset Classes
            </h2>
            <p className="text-slate-400 text-sm max-w-lg">
              A disciplined allocation across enduring categories.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <ScrollReveal delay={0}>
            <FeatureCard
              titleKey="card1Title"
              bodyKey="card1Body"
              icon={<Building2 size={28} />}
            />
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <FeatureCard
              titleKey="card2Title"
              bodyKey="card2Body"
              icon={<Network size={28} />}
            />
          </ScrollReveal>
        </div>
      </section>

      {/* ── Portfolio Domains ── */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 pb-16 md:pb-24">
        <ScrollReveal>
          <div className="mb-12 md:mb-16">
            <div className="w-8 h-px bg-brand/60 mb-5" />
            <h2 className="text-[11px] font-semibold tracking-[0.24em] uppercase text-brand mb-3">
              Domains
            </h2>
            <p className="text-slate-400 text-sm max-w-lg">
              Where we deploy our capital — selectively, deliberately, quietly.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {portfolioAreas.map((area, i) => (
            <ScrollReveal key={area.titleKey} delay={i * 0.15}>
              <FeatureCard
                titleKey={area.titleKey}
                bodyKey={area.bodyKey}
                icon={area.icon}
              />
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ── Allocation Visualization Bar ── */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 pb-24 md:pb-32">
        <ScrollReveal>
          <div className="relative overflow-hidden rounded-2xl border border-white/[0.04] bg-white/[0.015] p-8 md:p-10">
            <div className="flex items-center gap-3 mb-8">
              <TrendingUp size={18} className="text-brand/60" />
              <span className="text-[11px] font-semibold tracking-[0.24em] uppercase text-brand/70">
                Allocation Philosophy
              </span>
            </div>

            {/* Visual bars */}
            <div className="space-y-5">
              {[
                { label: 'Core Equity', pct: '40%', width: 40, color: 'bg-brand/60' },
                { label: 'Infrastructure', pct: '35%', width: 35, color: 'bg-brand/40' },
                { label: 'Technology Platforms', pct: '25%', width: 25, color: 'bg-brand/25' },
              ].map((item) => (
                <div key={item.label} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-400 tracking-[0.15em] uppercase">
                      {item.label}
                    </span>
                    <span className="text-xs text-slate-500 font-mono">
                      {item.pct}
                    </span>
                  </div>
                  <div className="h-1.5 bg-white/[0.04] rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-1000 ${item.color}`}
                      style={{ width: `${item.width}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
