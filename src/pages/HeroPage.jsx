import { motion } from 'framer-motion';
import { useTranslation } from '../hooks/useTranslation.js';
import { SITE } from '../data/site.js';
import { ScrollDownButton } from '../components/ScrollDownButton.jsx';

function scrollToId(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export function HeroPage() {
  const { t } = useTranslation();

  return (
    <section
      id="hero"
      className="scroll-mt-28 bg-grid-fade"
      aria-label={t('hero.kicker')}
    >
      <div className="mx-auto max-w-6xl px-4 pb-16 pt-14 md:px-6 md:pb-20 md:pt-20">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <motion.p
              className="text-xs font-semibold uppercase tracking-[0.22em] text-accent"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              {t('hero.kicker')}
            </motion.p>

            <motion.h1
              className="mt-4 text-balance text-4xl font-semibold tracking-tight text-white md:text-6xl"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent">
                {SITE.fullName}
              </span>
            </motion.h1>

            <motion.p
              className="mt-4 max-w-xl text-sm font-semibold text-slate-200 md:text-base"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            >
              {t('hero.role')}
            </motion.p>

            <motion.p
              className="mt-4 max-w-2xl text-pretty text-sm leading-relaxed text-slate-400 md:text-base"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            >
              {t('hero.lead')}
            </motion.p>

            <motion.div
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
            >
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-night-900 transition hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                onClick={() => scrollToId('projects')}
              >
                {t('hero.ctaProjects')}
              </button>

              <a
                className="inline-flex items-center justify-center rounded-full bg-transparent px-5 py-3 text-sm font-semibold text-white shadow-[0_0_0_1px_rgba(148,163,184,0.18)] transition hover:shadow-[0_0_0_1px_rgba(124,108,255,0.45)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                href="/cv.pdf"
                download
              >
                {t('hero.ctaCv')}
              </a>
            </motion.div>
          </div>

          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative overflow-hidden rounded-3xl bg-night-850 shadow-lift shadow-panel">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/25 via-transparent to-cyan-300/10" />
              <div className="relative p-7 md:p-8">
                <div className="flex items-center justify-between gap-4">
                  <div>                    
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                      {t('hero.panel.kicker')}
                    </p>
                    <p className="mt-2 text-lg font-semibold text-white">{t('hero.panel.title')}</p>
                  </div>
                  {/*
                    <div className="hidden sm:block rounded-2xl bg-night-900/40 px-3 py-2 text-xs text-slate-300 shadow-panel">
                      {t('hero.panel.badge')}
                    </div>
                  */}
                </div>

                <div className="mt-6 grid gap-3">
                  {[t('hero.panel.b1'), t('hero.panel.b2'), t('hero.panel.b3')].map((line, idx) => (
                    <div key={idx} className="rounded-2xl bg-night-900/35 p-4 shadow-panel">
                      <p className="text-sm text-slate-200">{line}</p>
                    </div>
                  ))}
                </div>

                <p className="mt-6 text-xs leading-relaxed text-slate-500">{t('hero.panel.note')}</p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="flex justify-center pt-10 md:pt-5">
          <ScrollDownButton targetId="about" />
        </div>
      </div>
    </section>
  );
}
