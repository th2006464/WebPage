import { createContext, useContext, useState, useCallback, useMemo, type ReactNode } from 'react';
import translations from './translations';
import type { Lang } from '@/types';

type PageKey = 'home' | 'about' | 'capabilities' | 'portfolio';

interface I18nContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: string) => string;
  pageKey: PageKey;
  setPageKey: (key: PageKey) => void;
}

const I18nContext = createContext<I18nContextValue | null>(null);

function getStoredLang(): Lang {
  try {
    const stored = localStorage.getItem('foxtang-lang');
    if (stored === 'en' || stored === 'zh') return stored;
  } catch { /* localStorage not available */ }
  return 'en';
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(getStoredLang);
  const [pageKey, setPageKey] = useState<PageKey>('home');

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    try { localStorage.setItem('foxtang-lang', l); } catch { /* noop */ }
  }, []);

  const t = useCallback((key: string): string => {
    return translations[pageKey]?.[lang]?.[key] ?? key;
  }, [lang, pageKey]);

  const value = useMemo(() => ({ lang, setLang, t, pageKey, setPageKey }), [lang, setLang, t, pageKey]);

  return (
    <I18nContext.Provider value={value}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n(): I18nContextValue {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useI18n must be used within I18nProvider');
  return ctx;
}
