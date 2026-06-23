import { useEffect } from 'react';
import { useI18n } from '@/i18n/context';
import VideoHero from '@/components/hero/VideoHero';
import VisualCard from '@/components/ui/VisualCard';
import ScrollReveal from '@/components/ui/ScrollReveal';
import StrategyPanel from '@/components/sections/StrategyPanel';
import MarketBanner from '@/components/sections/MarketBanner';
import BusinessCards from '@/components/sections/BusinessCards';

const strategyTiles = [
  { titleKey: 'tile1Title', bodyKey: 'tile1Body' },
  { titleKey: 'tile2Title', bodyKey: 'tile2Body' },
  { titleKey: 'tile3Title', bodyKey: 'tile3Body' },
];

const bannerItems = [
  { titleKey: 'banner1Title', bodyKey: 'banner1Body' },
  { titleKey: 'banner2Title', bodyKey: 'banner2Body' },
];

const businessCards = [
  { titleKey: 'profile1Title', bodyKey: 'profile1Body' },
  { titleKey: 'profile2Title', bodyKey: 'profile2Body' },
  { titleKey: 'profile3Title', bodyKey: 'profile3Body' },
];

export default function HomePage() {
  const { t, setPageKey } = useI18n();

  useEffect(() => { setPageKey('home'); }, [setPageKey]);

  return (
    <>
      <title>{t('pageTitle')}</title>

      <VideoHero />

      <div id="main-content">
        {/* Visual Cards */}
        <section className="max-w-7xl mx-auto px-6 md:px-8 -mt-20 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <ScrollReveal>
              <VisualCard titleKey="visual1Title" bodyKey="visual1Body" />
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <VisualCard titleKey="visual2Title" bodyKey="visual2Body" />
            </ScrollReveal>
          </div>
        </section>

        {/* Strategy */}
        <StrategyPanel tiles={strategyTiles} />

        {/* Market Banners */}
        <MarketBanner banners={bannerItems} />

        {/* Business */}
        <BusinessCards cards={businessCards} />
      </div>
    </>
  );
}
