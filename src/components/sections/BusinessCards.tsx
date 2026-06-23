import StrategyCard from '@/components/ui/StrategyCard';
import ScrollReveal from '@/components/ui/ScrollReveal';

interface BusinessCardsProps {
  cards: { titleKey: string; bodyKey: string }[];
}

export default function BusinessCards({ cards }: BusinessCardsProps) {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-24">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card, i) => (
          <ScrollReveal key={card.titleKey} delay={i * 0.15}>
            <StrategyCard titleKey={card.titleKey} bodyKey={card.bodyKey} />
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
