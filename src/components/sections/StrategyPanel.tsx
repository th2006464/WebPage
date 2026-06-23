import StrategyCard from '@/components/ui/StrategyCard';
import ScrollReveal from '@/components/ui/ScrollReveal';

interface StrategyPanelProps {
  tiles: { titleKey: string; bodyKey: string }[];
}

export default function StrategyPanel({ tiles }: StrategyPanelProps) {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-24">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {tiles.map((tile, i) => (
          <ScrollReveal key={tile.titleKey} delay={i * 0.15}>
            <StrategyCard titleKey={tile.titleKey} bodyKey={tile.bodyKey} />
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
