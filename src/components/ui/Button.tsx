import type { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
  onClick?: () => void;
  as?: 'button' | 'a';
  href?: string;
}

export default function Button({ children, variant = 'primary', className = '', onClick, as = 'button', href }: ButtonProps) {
  const base = 'inline-flex items-center justify-center min-h-[48px] px-8 text-[13px] font-medium tracking-[0.18em] uppercase rounded-full transition-all duration-300 cursor-pointer';

  const variants = {
    primary: 'bg-brand text-white hover:bg-brand-light shadow-lg shadow-brand/10',
    secondary: 'bg-white/5 text-slate-300 border border-white/10 hover:border-brand/30 hover:text-brand',
  };

  const cls = `${base} ${variants[variant]} ${className}`;

  if (as === 'a' && href) {
    return <a href={href} className={cls}>{children}</a>;
  }

  return <button onClick={onClick} className={cls}>{children}</button>;
}
