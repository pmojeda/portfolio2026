import { motion } from 'framer-motion';
import { useTranslation } from '../hooks/useTranslation.js';

function ChevronDown({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 15.5 6 9.5l1.4-1.4 4.6 4.6 4.6-4.6L18 9.5l-6 6Z"
        fill="currentColor"
      />
    </svg>
  );
}

/**
 * Botón explícito de “scroll down”: el usuario entiende que puede hacer click
 * para ir a la siguiente sección (mejor que un texto pasivo).
 */
export function ScrollDownButton({ targetId = 'about', className = '' }) {
  const { t } = useTranslation();

  function scroll() {
    document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  const label = t('hero.scrollDown.label');

  return (
    <motion.button
      type="button"
      className={[
        'group inline-flex flex-col items-center gap-2 rounded-2xl border border-white/15 bg-night-850/60 px-5 py-3 text-slate-300 shadow-panel backdrop-blur-sm',
        'transition hover:border-accent/40 hover:bg-night-800/80 hover:text-white',
        'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent',
        className,
      ].join(' ')}
      onClick={scroll}
      aria-label={t('hero.scrollHint')}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      {label ? (
        <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-slate-500 transition group-hover:text-slate-300">
          {label}
        </span>
      ) : null}
      <span className="relative flex h-4 w-4 items-center justify-center rounded-full bg-night-900/60 shadow-[inset_0_0_0_1px_rgba(148,163,184,0.12)]">
        <motion.span
          className="flex flex-col items-center justify-center text-accent"
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="h-6 w-6 opacity-90" />
        </motion.span>
      </span>
    </motion.button>
  );
}
