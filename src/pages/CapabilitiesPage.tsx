import { useEffect } from 'react';
import { useI18n } from '@/i18n/context';
import PageHero from '@/components/hero/PageHero';
import VisualCard from '@/components/ui/VisualCard';
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

      <PageHero
        titleKey="heroTitle"
        subtitleKey="heroSubtitle"
        bodyKey="heroBody"
      />

      {/* Visual Cards */}
      <section className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <ScrollReveal>
            <VisualCard titleKey="card1Title" bodyKey="card1Body" />
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <VisualCard titleKey="card2Title" bodyKey="card2Body" />
          </ScrollReveal>
        </div>
      </section>

      {/* Capabilities */}
      <StrategyPanel tiles={capabilityTiles} />
    </>
  );
}
