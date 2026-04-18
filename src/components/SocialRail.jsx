import { useTranslation } from '../hooks/useTranslation.js';
import { SITE } from '../data/site.js';
import { IconMail, IconLinkedIn, IconGitHub } from './icons.jsx';

export function SocialRail() {
  const { t } = useTranslation();

  const items = useArrayItems([
    {
      href: `mailto:${SITE.email}`,
      label: t('footer.socialEmail'),
      Icon: IconMail,
    },
    {
      href: SITE.linkedinUrl,
      label: t('footer.socialLinkedIn'),
      Icon: IconLinkedIn,
    },
    {
      href: SITE.githubUrl,
      label: t('footer.socialGitHub'),
      Icon: IconGitHub,
    },
  ]);

  return (
    <aside className="hidden md:fixed md:left-4 md:top-1/2 md:z-50 md:-translate-y-1/2 md:flex md:flex-col md:gap-3">
      {items.map(({ href, label, Icon }) => (
        <a
          key={href}
          href={href}
          target={href.startsWith('mailto:') ? undefined : '_blank'}
          rel={href.startsWith('mailto:') ? undefined : 'noreferrer'}
          aria-label={label}
          className="grid h-11 w-11 place-items-center rounded-xl bg-night-850/70 text-slate-200 shadow-panel backdrop-blur transition hover:text-white hover:shadow-[0_0_0_1px_rgba(124,108,255,0.35)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          <Icon className="h-5 w-5" />
        </a>
      ))}
    </aside>
  );
}

function useArrayItems(items) {
  // Helper small enough to keep JSX readable; keeps allocation stable.
  return items;
}

