import { useI18n } from '@/i18n/context';

export default function Footer() {
  const { t } = useI18n();

  return (
    <footer id="contact" className="border-t border-white/[0.04] mt-24">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div className="space-y-1.5">
          <strong className="text-xs tracking-[0.28em] uppercase text-brand">
            {t('contactTitle')}
          </strong>
          <p className="text-sm text-slate-500 max-w-md">
            {t('contactBody')}
          </p>
        </div>
        <div className="space-y-1.5 text-right">
          <a
            href="mailto:contact@foxtang.com"
            className="text-sm text-slate-400 hover:text-brand transition-colors duration-300"
          >
            contact@foxtang.com
          </a>
          <p className="text-xs text-slate-600">
            {t('copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
}
