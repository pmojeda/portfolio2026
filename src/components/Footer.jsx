import { useMemo } from 'react';
import { useTranslation } from '../hooks/useTranslation.js';
import { SITE } from '../data/site.js';
import { IconMail, IconLinkedIn, IconGitHub } from './icons.jsx';

export function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  const rights = useMemo(() => t('footer.rights').replace('{year}', String(year)), [t, year]);

  const items = [
    { href: `mailto:${SITE.email}`, label: t('footer.socialEmail'), Icon: IconMail },
    { href: SITE.linkedinUrl, label: t('footer.socialLinkedIn'), Icon: IconLinkedIn },
    { href: SITE.githubUrl, label: t('footer.socialGitHub'), Icon: IconGitHub },
  ];

  return (
    <footer className="border-t border-white/10 bg-night-950">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 md:flex-row md:items-center md:justify-between md:px-6">
        <div>
          <p className="text-sm font-semibold text-white">{SITE.fullName}</p>
          <p className="mt-1 text-sm text-slate-400">{t('footer.location')}</p>
          <p className="mt-4 text-xs text-slate-500">{rights}</p>
        </div>

        <div className="flex justify-center gap-3 md:hidden">
          {items.map(({ href, label, Icon }) => (
            <a
              key={href}
              href={href}
              target={href.startsWith('mailto:') ? undefined : '_blank'}
              rel={href.startsWith('mailto:') ? undefined : 'noreferrer'}
              aria-label={label}
              className="grid h-11 w-11 place-items-center rounded-xl bg-night-850 text-slate-200 shadow-panel transition hover:text-white hover:shadow-[0_0_0_1px_rgba(124,108,255,0.35)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
