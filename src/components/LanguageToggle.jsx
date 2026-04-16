import { useTranslation } from '../hooks/useTranslation.js';

export function LanguageToggle({ className = '' }) {
  const { locale, setLocale, t } = useTranslation();

  return (
    <div className={`flex items-center gap-1 ${className}`} role="group" aria-label={t('language.label')}>
      <button
        type="button"
        className={[
          'rounded-full px-3 py-1 text-xs font-semibold transition',
          locale === 'es'
            ? 'bg-accent text-white shadow-[0_0_0_1px_rgba(124,108,255,0.35)]'
            : 'text-slate-300 hover:text-white',
        ].join(' ')}
        onClick={() => setLocale('es')}
      >
        {t('language.es')}
      </button>
      <button
        type="button"
        className={[
          'rounded-full px-3 py-1 text-xs font-semibold transition',
          locale === 'en'
            ? 'bg-accent text-white shadow-[0_0_0_1px_rgba(124,108,255,0.35)]'
            : 'text-slate-300 hover:text-white',
        ].join(' ')}
        onClick={() => setLocale('en')}
      >
        {t('language.en')}
      </button>
    </div>
  );
}
