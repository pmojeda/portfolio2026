import { motion } from 'framer-motion';
import { useTranslation } from '../hooks/useTranslation.js';
import { space } from 'postcss/lib/list';

export function ProjectCard({ project, index }) {
  const { t } = useTranslation();

  const title = t(project.i18nTitleKey);
  const description = t(project.i18nDescKey);

  return (
    <motion.article
      className="group relative overflow-hidden rounded-2xl bg-night-850 shadow-panel"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-90px' }}
      transition={{ duration: 0.55, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100">
        <div className="absolute -left-24 -top-24 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="grid gap-0 md:grid-cols-12">
        <div className="relative md:col-span-5">
          <div className="aspect-[16/10] w-full bg-night-800">
            <img
              src={project.imageSrc}
              alt=""
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover opacity-90 transition group-hover:opacity-100"
            />
          </div>
        </div>

        <div className="relative p-6 md:col-span-7">
          <h3 className="text-lg font-semibold tracking-tight text-white md:text-xl">{title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-slate-400">{description}</p>

          <div className="mt-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{t('projects.stack')}</p>
            <ul className="mt-2 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <li
                  key={tech}
                  className="rounded-full bg-night-800 px-3 py-1 text-xs text-slate-200 shadow-panel"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            {project.demoUrl ? (
              <a
                className="inline-flex items-center justify-center rounded-full bg-white px-4 py-2 text-xs font-semibold text-night-900 transition hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
              >
                {t('projects.demo')}
              </a>
            ) : (
              <span
                className="inline-flex items-center justify-center rounded-full bg-night-800 px-4 py-2 text-xs font-semibold text-slate-500 shadow-panel"
                title={t('projects.missingDemo')}
              >
                {t('projects.missingDemo')}
              </span>
            )}

            {project.repoUrl ? (
              <a
                className="inline-flex items-center justify-center rounded-full bg-transparent px-4 py-2 text-xs font-semibold text-white shadow-[0_0_0_1px_rgba(148,163,184,0.18)] transition hover:shadow-[0_0_0_1px_rgba(124,108,255,0.45)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                href={project.repoUrl}
                target="_blank"
                rel="noreferrer"
              >
                {t('projects.repo')}
              </a>
            ) : (
              <span
                className="inline-flex items-center justify-center rounded-full bg-night-800 px-4 py-2 text-xs font-semibold text-slate-500 shadow-panel"
                title={t('projects.missingRepo')}
              >
                {t('projects.missingRepo')}
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}
