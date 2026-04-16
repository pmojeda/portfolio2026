import { motion } from 'framer-motion';
import { useTranslation } from '../hooks/useTranslation.js';
import { SectionHeading } from '../components/SectionHeading.jsx';
import { experience } from '../data/experience.js';

export function ExperiencePage() {
  const { t } = useTranslation();

  return (
    <section
      id="experience"
      className="scroll-mt-28 border-t border-white/10 bg-night-950"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-20">
        <SectionHeading
          title={t('experience.title')}
          subtitle={t('experience.subtitle')}
        />

        <div className="mx-auto mt-12 max-w-6xl">
          <div className="relative">
            <div
              className="absolute left-[7px] top-2 bottom-2 w-px bg-white/10"
              aria-hidden="true"
            />
            <ol className="space-y-10">
              {experience.map((item) => {
                const base = `about.experience.${item.id}`;
                return (
                  <motion.li
                    key={item.id}
                    className="relative pl-8"
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-90px' }}
                    transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <div
                      className="absolute left-0 top-2 h-3 w-3 rounded-full bg-accent shadow-[0_0_0_4px_rgba(124,108,255,0.12)]"
                      aria-hidden="true"
                    />
                    <p className="text-xs font-semibold uppercase tracking-wide text-accent">
                      {t(`${base}.period`)}
                    </p>
                    <p className="mt-2 text-base font-semibold text-white">
                      {t(`${base}.role`)}
                    </p>
                    <p className="mt-1 text-sm text-slate-300">
                      {t(`${base}.company`)}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-slate-400">
                      {t(`${base}.body`)}
                    </p>
                  </motion.li>
                );
              })}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

