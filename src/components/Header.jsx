import { useMemo, useState } from 'react';
import { useTranslation } from '../hooks/useTranslation.js';
import { LanguageToggle } from './LanguageToggle.jsx';
import { SITE } from '../data/site.js';

function scrollToId(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export function Header() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  const links = useMemo(
    () => [
      { id: 'about', label: t('nav.about') },
      { id: 'experience', label: t('nav.experience') },
      { id: 'projects', label: t('nav.projects') },
      { id: 'contact', label: t('nav.contact') },
    ],
    [t],
  );

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-night-900/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
        <button
          type="button"
          className="flex items-center gap-2 text-left text-sm font-semibold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          onClick={() => scrollToId('hero')}
        >
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-accent/15 text-xs font-black tracking-tight text-white shadow-[0_0_0_1px_rgba(124,108,255,0.35)]">
            {t('brand.short')}
          </span>
          <span className="hidden sm:block">
            <span className="block leading-tight">{SITE.fullName}</span>
            <span className="block text-xs font-medium text-slate-400">Portfolio</span>
          </span>
        </button>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {links.map((l) => (
            <button
              key={l.id}
              type="button"
              className="rounded-full px-3 py-2 text-sm text-slate-300 transition hover:bg-white/5 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              onClick={() => scrollToId(l.id)}
            >
              {l.label}
            </button>
          ))}
          <div className="ml-2 pl-2">
            <LanguageToggle />
          </div>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <LanguageToggle />
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-night-850 text-white shadow-panel focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">{open ? t('nav.closeMenu') : t('nav.openMenu')}</span>
            <span aria-hidden="true" className="text-lg leading-none">
              {open ? '×' : '≡'}
            </span>
          </button>
        </div>
      </div>

      {open ? (
        <div id="mobile-menu" className="border-t border-white/10 bg-night-900/95 md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col px-4 py-3">
            {links.map((l) => (
              <button
                key={l.id}
                type="button"
                className="rounded-xl px-3 py-3 text-left text-sm text-slate-200 hover:bg-white/5"
                onClick={() => {
                  setOpen(false);
                  scrollToId(l.id);
                }}
              >
                {l.label}
              </button>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
