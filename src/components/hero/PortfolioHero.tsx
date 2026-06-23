import { useI18n } from '@/i18n/context';

export default function PortfolioHero() {
  const { t } = useI18n();

  return (
    <section className="relative pt-32 pb-24 md:pt-44 md:pb-36 overflow-hidden">
      {/* ── Abstract geometric / architectural background ── */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Diagonal grid — architectural feel */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `
              repeating-linear-gradient(
                45deg,
                transparent,
                transparent 38px,
                rgba(158,132,72,0.8) 38px,
                rgba(158,132,72,0.8) 40px
              ),
              repeating-linear-gradient(
                -45deg,
                transparent,
                transparent 38px,
                rgba(158,132,72,0.6) 38px,
                rgba(158,132,72,0.6) 40px
              )
            `,
          }}
        />

        {/* Large geometric shapes */}
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px]">
          {/* Large square */}
          <div
            className="absolute inset-0 border border-brand/[0.05] rounded-3xl animate-orb-drift"
            style={{ animationDuration: '35s' }}
          />
          {/* Inner square */}
          <div
            className="absolute top-[15%] left-[15%] w-[70%] h-[70%] border border-brand/[0.04] rounded-2xl animate-orb-drift-2"
            style={{ animationDuration: '28s' }}
          />
          {/* Diamond */}
          <div
            className="absolute top-[30%] left-[30%] w-[40%] h-[40%] border border-brand/[0.06] animate-orb-drift-3"
            style={{
              animationDuration: '32s',
              transform: 'rotate(45deg)',
              borderRadius: '16px',
            }}
          />
        </div>

        {/* Left-side geometric stack */}
        <div className="absolute top-[15%] left-[3%] w-[300px] h-[400px] opacity-[0.04]">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="absolute border border-brand/30 animate-orb-drift"
              style={{
                width: `${180 - i * 40}px`,
                height: `${180 - i * 40}px`,
                left: `${i * 30}px`,
                top: `${i * 40}px`,
                animationDuration: `${30 - i * 5}s`,
                borderRadius: `${12 + i * 4}px`,
              }}
            />
          ))}
        </div>

        {/* Ambient glows */}
        <div className="absolute top-[20%] left-[30%] w-[500px] h-[500px] bg-brand/[0.03] rounded-full blur-[140px]" />
        <div className="absolute bottom-[10%] right-[20%] w-[400px] h-[400px] bg-amber-900/[0.02] rounded-full blur-[120px] animate-orb-drift-2" />

        {/* Dot pattern accent */}
        {[
          [15, 10], [25, 70], [80, 20], [60, 65], [90, 50], [10, 85],
        ].map(([x, y], i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full bg-brand/10"
            style={{ left: `${x}%`, top: `${y}%` }}
          />
        ))}
      </div>

      {/* ── Content ── */}
      <div className="relative max-w-7xl mx-auto px-6 md:px-8">
        <div className="max-w-3xl">
          {/* Accent bar */}
          <div className="flex items-center gap-3 mb-6">
            <div className="h-8 w-px bg-brand/40" />
            <span className="text-[10px] font-semibold tracking-[0.28em] uppercase text-brand/70">
              {t('navPortfolio')}
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tighter leading-none text-white">
            {t('heroTitle')}
          </h1>

          <p className="text-base md:text-lg text-slate-300 mt-6 leading-relaxed">
            {t('heroSubtitle')}
          </p>

          <p className="text-sm md:text-base text-slate-500 mt-4 max-w-2xl leading-relaxed">
            {t('heroBody')}
          </p>

          {/* Key metrics strip */}
          <div className="flex flex-wrap gap-8 mt-10 pt-10 border-t border-white/[0.04]">
            {[
              { value: '3', label: 'Continents' },
              { value: '12+', label: 'Jurisdictions' },
              { value: '∞', label: 'Tenor' },
            ].map((metric) => (
              <div key={metric.label}>
                <div className="text-2xl md:text-3xl font-light text-white tracking-tight">
                  {metric.value}
                </div>
                <div className="text-[11px] tracking-[0.20em] uppercase text-slate-500 mt-1">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-surface to-transparent pointer-events-none" />
    </section>
  );
}
