import { useI18n } from '@/i18n/context';

export default function AboutHero() {
  const { t } = useI18n();

  return (
    <section className="relative pt-32 pb-24 md:pt-44 md:pb-36 overflow-hidden">
      {/* ── Elegant decorative background ── */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Concentric rings — symbolizing stewardship cycles */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-brand/[0.04]"
              style={{
                width: `${i * 200}px`,
                height: `${i * 200}px`,
                animation: `orb-drift ${24 + i * 4}s ease-in-out infinite`,
                animationDelay: `${i * 1.5}s`,
              }}
            />
          ))}
        </div>

        {/* Warm gradient washes */}
        <div className="absolute top-[5%] left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand/[0.03] rounded-full blur-[150px]" />
        <div className="absolute -bottom-[5%] left-[10%] w-[500px] h-[300px] bg-amber-900/[0.02] rounded-full blur-[120px]" />
        <div className="absolute top-[20%] right-0 w-[350px] h-[250px] bg-brand/[0.02] rounded-full blur-[100px] animate-orb-drift-2" />

        {/* Vertical accent line */}
        <div className="absolute top-0 left-[15%] w-px h-full bg-gradient-to-b from-transparent via-brand/[0.06] to-transparent" />
        <div className="absolute top-0 right-[12%] w-px h-full bg-gradient-to-b from-transparent via-brand/[0.04] to-transparent" />

        {/* Floating decorative diamonds */}
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.06]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="8%" y="25%" width="8" height="8" rx="1"
            fill="#9e8448"
            className="animate-orb-drift"
            style={{ animationDuration: '30s' }}
          />
          <rect
            x="82%" y="15%" width="6" height="6" rx="1"
            fill="#9e8448"
            className="animate-orb-drift-2"
            style={{ animationDuration: '25s', transform: 'rotate(45deg)' }}
          />
          <rect
            x="18%" y="72%" width="6" height="6" rx="1"
            fill="#9e8448"
            className="animate-orb-drift-3"
            style={{ animationDuration: '28s', transform: 'rotate(45deg)' }}
          />
          <rect
            x="70%" y="60%" width="5" height="5" rx="1"
            fill="#9e8448"
            className="animate-orb-drift"
            style={{ animationDuration: '32s', transform: 'rotate(45deg)' }}
          />
        </svg>
      </div>

      {/* ── Content ── */}
      <div className="relative max-w-7xl mx-auto px-6 md:px-8">
        <div className="max-w-3xl">
          {/* Small content area badge */}
          <div className="inline-flex items-center gap-3 mb-6 px-4 py-2 rounded-full border border-brand/[0.08] bg-brand/[0.03]">
            <div className="w-1.5 h-1.5 rounded-full bg-brand/60" />
            <span className="text-[10px] font-semibold tracking-[0.28em] uppercase text-brand/70">
              {t('navAbout')}
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tighter leading-none text-white">
            {t('heroTitle')}
          </h1>

          <div className="flex items-center gap-4 mt-6 mb-4">
            <div className="w-16 h-px bg-brand/30" />
            <span className="text-[11px] tracking-[0.24em] uppercase text-brand/60">Est. 2026</span>
          </div>

          <p className="text-base md:text-lg text-slate-300 leading-relaxed">
            {t('heroSubtitle')}
          </p>

          <p className="text-sm md:text-base text-slate-500 mt-4 max-w-2xl leading-relaxed">
            {t('heroBody')}
          </p>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-surface to-transparent pointer-events-none" />
    </section>
  );
}
