import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { useI18n } from '@/i18n/context';
import MobileMenu from './MobileMenu';

const navItems = [
  { key: 'navHome', href: '/' },
  { key: 'navAbout', href: '/about' },
  { key: 'navCapabilities', href: '/capabilities' },
  { key: 'navPortfolio', href: '/portfolio' },
  { key: 'navContact', href: '/#contact' },
];

export default function Header() {
  const { t, lang, setLang } = useI18n();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-surface/90 backdrop-blur-xl border-b border-white/[0.04]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-4 flex items-center justify-between">
          {/* Brand */}
          <Link to="/" className="flex items-center gap-3.5 group">
            <div className="w-9 h-9 rounded-lg overflow-hidden bg-brand/10 border border-brand/20 group-hover:border-brand/40 transition-all duration-300">
              <img src="/logo.png" alt="FOXTANG" className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="flex flex-col gap-0.5">
              <strong className="text-[15px] font-normal tracking-[0.40em] uppercase text-brand">
                FOXTANG
              </strong>
              <span className="text-[10px] tracking-[0.22em] uppercase text-slate-500">
                Private Holdings
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = item.href === '/'
                ? location.pathname === '/'
                : location.pathname.startsWith(item.href);
              return (
                <Link
                  key={item.key}
                  to={item.href}
                  className={`${isActive ? 'nav-link-active' : 'nav-link'}`}
                >
                  {t(item.key)}
                </Link>
              );
            })}
          </nav>

          {/* Language Switch + Mobile Toggle */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2.5">
              <button
                type="button"
                onClick={() => setLang('en')}
                className={`text-[11px] tracking-[0.10em] uppercase px-3 py-1.5 rounded-full border transition-all duration-300 ${
                  lang === 'en'
                    ? 'border-brand/25 text-brand'
                    : 'border-white/8 text-slate-500 hover:border-brand/20 hover:text-brand'
                }`}
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => setLang('zh')}
                className={`text-[11px] tracking-[0.10em] uppercase px-3 py-1.5 rounded-full border transition-all duration-300 ${
                  lang === 'zh'
                    ? 'border-brand/25 text-brand'
                    : 'border-white/8 text-slate-500 hover:border-brand/20 hover:text-brand'
                }`}
              >
                中文
              </button>
            </div>

            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              className="md:hidden text-slate-400 hover:text-white transition-colors"
              aria-label="Open menu"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} navItems={navItems} />
    </>
  );
}
