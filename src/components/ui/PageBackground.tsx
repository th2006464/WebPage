import { useEffect, useRef } from 'react';

interface PageBackgroundProps {
  /** Accent color for orbs, defaults to brand gold */
  accent?: string;
}

/**
 * Wraps inner pages with ambient effects:
 * - Floating gradient orbs (slow drift CSS animations)
 * - Mouse-tracking subtle glow
 * - All effects are pointer-events-none, never blocking content
 */
export default function PageBackground({ accent = '#9e8448' }: PageBackgroundProps) {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const glow = glowRef.current;
    if (!glow) return;

    let raf = 0;
    let mx = -9999;
    let my = -9999;

    function onMove(e: MouseEvent) {
      mx = e.clientX;
      my = e.clientY;
    }

    function animate() {
      glow!.style.setProperty('--mx', `${mx}px`);
      glow!.style.setProperty('--my', `${my}px`);
      raf = requestAnimationFrame(animate);
    }

    window.addEventListener('mousemove', onMove, { passive: true });
    raf = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Floating golden orbs */}
      <div
        className="absolute w-[700px] h-[700px] rounded-full blur-[140px] opacity-[0.04] animate-orb-drift"
        style={{ background: accent, top: '-15%', left: '-10%' }}
      />
      <div
        className="absolute w-[500px] h-[500px] rounded-full blur-[120px] opacity-[0.03] animate-orb-drift-2"
        style={{ background: accent, bottom: '-10%', right: '-8%' }}
      />
      <div
        className="absolute w-[400px] h-[400px] rounded-full blur-[100px] opacity-[0.025] animate-orb-drift-3"
        style={{ background: accent, top: '60%', left: '55%' }}
      />

      {/* Mouse-tracking glow */}
      <div
        ref={glowRef}
        className="absolute w-[600px] h-[600px] rounded-full blur-[160px] opacity-[0.03] transition-[width,height] duration-1000"
        style={{
          background: accent,
          transform: 'translate(calc(var(--mx, -9999px) - 50%), calc(var(--my, -9999px) - 50%))',
          willChange: 'transform',
        }}
      />
    </div>
  );
}
