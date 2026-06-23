export type Lang = 'en' | 'zh';

export interface NavItem {
  key: string;
  labelKey: string;
  href: string;
}

export interface StrategyCardData {
  titleKey: string;
  bodyKey: string;
}

export interface VisualCardData {
  titleKey: string;
  bodyKey: string;
}

export interface BannerData {
  titleKey: string;
  bodyKey: string;
}
