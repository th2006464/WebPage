import { useI18n } from '@/i18n/context';
import Button from '@/components/ui/Button';
import { ArrowDown, ChevronRight } from 'lucide-react';

const VIDEO_URL = 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_091828_e240eb17-6edc-4129-ad9d-98678e3fd238.mp4';

export default function VideoHero() {
  const { t } = useI18n();

  const scrollToContent = () => {
    document.getElementById('main-content')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1920' height='1080'%3E%3Crect fill='%230a0f1a' width='1920' height='1080'/%3E%3C/svg%3E"
      >
        <source src={VIDEO_URL} type="video/mp4" />
      </video>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-surface/70 via-surface/40 to-surface/90" />

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center px-6">
        <div className="text-center max-w-4xl">
          <span className="text-xs font-semibold tracking-[0.24em] uppercase text-brand mb-6 block">
            {t('heroTagline')}
          </span>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tighter leading-none text-white">
            <span className="block text-slate-400">{t('heroLine1')}</span>
            <span className="block text-white -mt-1">{t('heroLine2')}</span>
          </h1>

          <p className="text-base md:text-lg text-slate-400 mt-8 max-w-2xl mx-auto leading-relaxed">
            {t('heroSubtitle')}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
            <Button as="a" href="mailto:contact@foxtang.com">
              {t('btnBrief')}
              <ChevronRight size={16} className="ml-1" />
            </Button>
            <Button variant="secondary" as="a" href="/capabilities">
              {t('btnExplore')}
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        type="button"
        onClick={scrollToContent}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-500 hover:text-brand transition-colors duration-300 animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown size={20} />
      </button>
    </section>
  );
}
