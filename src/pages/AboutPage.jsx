import { motion } from 'framer-motion';
import { useTranslation } from '../hooks/useTranslation.js';
import { SectionHeading } from '../components/SectionHeading.jsx';
import { services } from '../data/services.js';
import { stack } from '../data/stack.js';
import { SITE } from '../data/site.js';

function ServiceIcon({ id }) {
  const common = 'h-5 w-5';
  if (id === 'web') {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M5 6.5h14l-1.2 12H6.2L5 6.5Z"
          stroke="currentColor"
          strokeWidth="1.6"
          opacity="0.9"
        />
        <path
          d="M8 9h8M8 12h6"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (id === 'services') {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M8 7.5a3.5 3.5 0 0 1 8 0V10H8V7.5Z"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <path
          d="M6.5 10h11v8h-11v-8Z"
          stroke="currentColor"
          strokeWidth="1.6"
          opacity="0.95"
        />
        <path
          d="M12 13v2.5"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  return (
    <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M5.5 18.5V7.8c0-.7.6-1.3 1.3-1.3h10.4c.7 0 1.3.6 1.3 1.3v10.7"
        stroke="currentColor"
        strokeWidth="1.6"
        opacity="0.95"
      />
      <path
        d="M8 15l2-2 2 2 4-5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function AboutPage() {
  const { t } = useTranslation();

  return (
    <section id="about" className="scroll-mt-28 border-t border-white/10 bg-night-900">
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-20">
        <SectionHeading title={t('about.title')} subtitle={t('about.subtitle')} />

        {/* Resumen + stack, con foto lateral (placeholder cuadrado). */}
        <div className="mx-auto mt-8 grid max-w-6xl items-start gap-10 lg:grid-cols-12 lg:gap-12">
          <motion.div
            className="lg:col-span-4"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-90px' }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative aspect-square overflow-hidden rounded-3xl border border-white/10 bg-night-850 shadow-lift shadow-panel">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/15 via-transparent to-cyan-300/10" />
              <img
                src="/images/Mi Perfil v3.png"
                alt={SITE.fullName}
                loading="lazy"
                className="relative h-full w-full object-cover opacity-95"
              />
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-8"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-90px' }}
            transition={{ duration: 0.55, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          >
            <h3 className="text-xl font-semibold text-white">{t('about.summaryTitle')}</h3>
            <p className="mt-4 text-sm leading-relaxed text-slate-400 md:text-base">
              {t('about.summaryP1')}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-slate-400 md:text-base">
              {t('about.summaryP2')}
            </p>

            <div className="mt-6">
              <h3 className="text-lg font-semibold text-white">{t('about.stackTitle')}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {stack.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-full bg-night-850 px-3 py-1 text-xs text-slate-200 shadow-panel ring-1 ring-white/5"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Servicios ofrecidos. */}
        <div className="mx-auto mt-12 max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <h3 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
              {t('about.servicesTitle')}
            </h3>
            <p className="mt-3 text-sm text-slate-400 md:text-base">
              {t('about.servicesSubtitle')}
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {services.map((s, idx) => (
              <motion.div
                key={s.id}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-night-850/40 p-6 shadow-panel backdrop-blur-sm transition hover:-translate-y-0.5 hover:border-accent/40"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-90px' }}
                transition={{ duration: 0.55, delay: idx * 0.05, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100">
                  <div className="h-full w-full bg-gradient-to-br from-accent/25 via-transparent to-cyan-300/10" />
                </div>

                <div className="relative flex items-start gap-4">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-accent/15 text-accent ring-1 ring-accent/25">
                    <ServiceIcon id={s.id} />
                  </div>
                  <div>
                    <p className="text-base font-semibold text-white">
                      {t(`about.services.${s.id}.title`)}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-slate-400">
                      {t(`about.services.${s.id}.body`)}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
