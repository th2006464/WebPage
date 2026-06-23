import { useI18n } from '@/i18n/context';

export default function CapabilitiesHero() {
  const { t } = useI18n();

  return (
    <section className="relative pt-32 pb-24 md:pt-44 md:pb-36 overflow-hidden">
      {/* ── Animated geometric grid background ── */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(158,132,72,0.4) 1px, transparent 1px),
              linear-gradient(90deg, rgba(158,132,72,0.4) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />

        {/* Floating glow orbs */}
        <div className="absolute top-[10%] left-[8%] w-[500px] h-[500px] bg-brand/[0.04] rounded-full blur-[140px] animate-orb-drift" />
        <div className="absolute top-[30%] right-[5%] w-[300px] h-[300px] bg-amber-900/[0.03] rounded-full blur-[100px] animate-orb-drift-2" />
        <div className="absolute bottom-[10%] left-[40%] w-[400px] h-[400px] bg-brand/[0.03] rounded-full blur-[120px] animate-orb-drift-3" />

        {/* Animated connecting lines */}
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.06]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="10%" y1="30%" x2="30%" y2="50%"
            stroke="#9e8448" strokeWidth="1"
            className="animate-orb-drift"
            style={{ animationDuration: '22s' }}
          />
          <line
            x1="75%" y1="15%" x2="60%" y2="60%"
            stroke="#9e8448" strokeWidth="1"
            className="animate-orb-drift-2"
            style={{ animationDuration: '26s' }}
          />
          <line
            x1="20%" y1="80%" x2="50%" y2="40%"
            stroke="#9e8448" strokeWidth="0.5"
            className="animate-orb-drift-3"
            style={{ animationDuration: '30s' }}
          />
          <line
            x1="85%" y1="70%" x2="65%" y2="35%"
            stroke="#9e8448" strokeWidth="0.5"
            className="animate-orb-drift"
            style={{ animationDuration: '28s' }}
          />
        </svg>

        {/* Data nodes */}
        {[
          { top: '18%', left: '12%', size: 4, delay: 0 },
          { top: '25%', right: '15%', size: 3, delay: 2 },
          { top: '55%', left: '22%', size: 5, delay: 1 },
          { top: '70%', right: '20%', size: 3, delay: 3 },
          { top: '40%', left: '55%', size: 4, delay: 1.5 },
        ].map((node, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-brand/20 animate-pulse"
            style={{
              top: node.top,
              left: node.left,
              right: node.right,
              width: node.size,
              height: node.size,
              animationDelay: `${node.delay}s`,
              boxShadow: '0 0 8px rgba(158,132,72,0.3)',
            }}
          />
        ))}
      </div>

      {/* ── Content ── */}
      <div className="relative max-w-7xl mx-auto px-6 md:px-8">
        <div className="max-w-3xl">
          {/* Decorative bracket */}
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-px bg-brand/30" />
            <span className="text-[10px] font-semibold tracking-[0.28em] uppercase text-brand/70">
              {t('navCapabilities')}
            </span>
            <div className="flex-1 h-px bg-brand/15" />
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tighter leading-none text-white">
            <span className="text-slate-400">{t('heroTitle').split(' ')[0]}</span>
            <br />
            {t('heroTitle').split(' ').slice(1).join(' ')}
          </h1>

          <p className="text-base md:text-lg text-slate-300 mt-6 leading-relaxed">
            {t('heroSubtitle')}
          </p>

          <p className="text-sm md:text-base text-slate-500 mt-4 max-w-xl leading-relaxed">
            {t('heroBody')}
          </p>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-surface to-transparent pointer-events-none" />
    </section>
  );
}
