import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useI18n } from '@/i18n/context';

interface NavItem {
  key: string;
  href: string;
}

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  navItems: NavItem[];
}

export default function MobileMenu({ open, onClose, navItems }: MobileMenuProps) {
  const { t } = useI18n();

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[60] md:hidden"
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-surface/95 backdrop-blur-xl" onClick={onClose} />

          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-5 right-5 text-slate-400 hover:text-white transition-colors p-2"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>

          {/* Menu links */}
          <nav className="relative flex flex-col items-center justify-center h-full gap-8">
            {navItems.map((item, i) => (
              <motion.div
                key={item.key}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: i * 0.08, duration: 0.3 }}
              >
                <Link
                  to={item.href}
                  onClick={onClose}
                  className="text-xl font-light tracking-[0.20em] uppercase text-slate-300 hover:text-brand transition-colors duration-300"
                >
                  {t(item.key)}
                </Link>
              </motion.div>
            ))}
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
