import { motion } from 'framer-motion';

export function SectionHeading({ kicker, title, subtitle }) {
  return (
    <motion.div
      className="mx-auto max-w-3xl text-center"
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      {kicker ? (
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">{kicker}</p>
      ) : null}
      <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-white md:text-4xl">
        {title}
      </h2>
      {subtitle ? <p className="mt-4 text-pretty text-sm leading-relaxed text-slate-400 md:text-base">{subtitle}</p> : null}
    </motion.div>
  );
}
