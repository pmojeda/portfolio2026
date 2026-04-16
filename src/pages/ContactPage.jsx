import { useMemo, useState } from 'react';
import { useTranslation } from '../hooks/useTranslation.js';
import { SectionHeading } from '../components/SectionHeading.jsx';
import { ScrollUpButton } from '../components/ScrollUpButton.jsx';
import { SITE } from '../data/site.js';

function encodeFormBody(form) {
  return new URLSearchParams(new FormData(form)).toString();
}

export function ContactPage() {
  const { t } = useTranslation();
  const [status, setStatus] = useState('idle'); // idle | sending | success | error | dev

  const devHint = useMemo(() => import.meta.env.DEV, []);

  async function onSubmit(event) {
    event.preventDefault();

    // Netlify Forms works on the deployed domain. In Vite dev, `fetch('/')` won’t submit anywhere meaningful.
    if (import.meta.env.DEV) {
      setStatus('dev');
      return;
    }

    const form = event.currentTarget;

    setStatus('sending');
    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encodeFormBody(form),
      });

      if (!response.ok) throw new Error('Bad response');
      form.reset();
      setStatus('success');
    } catch {
      setStatus('error');
    }
  }

  return (
    <section id="contact" className="scroll-mt-28 border-t border-white/10 bg-night-900">
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-2">
        <SectionHeading title={t('contact.title')} subtitle={t('contact.subtitle')} />

        <div className="mx-auto mt-12 grid max-w-6xl gap-10 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5">
            <p className="text-sm leading-relaxed text-slate-400">
              <span className="font-semibold text-slate-200">Email: </span>
              <a className="text-white underline decoration-white/20 underline-offset-4 hover:decoration-white/60" href={`mailto:${SITE.email}`}>
                {SITE.email}
              </a>
            </p>
            {devHint ? (
              <p className="mt-4 rounded-2xl bg-night-850 p-4 text-sm leading-relaxed text-slate-300 shadow-panel">
                {t('contact.devNote')}
              </p>
            ) : null}
          </div>

          <div className="lg:col-span-7">
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              className="rounded-3xl bg-night-850 p-6 shadow-lift shadow-panel md:p-8"
              onSubmit={onSubmit}
            >
              <input type="hidden" name="form-name" value="contact" />

              <p className="hidden">
                <label>
                  Don’t fill this out: <input name="bot-field" />
                </label>
              </p>

              <div className="grid gap-4">
                <label className="grid gap-2">
                  <span className="text-xs font-semibold uppercase tracking-wide text-slate-400">{t('contact.name')}</span>
                  <input
                    className="w-full rounded-2xl border border-white/10 bg-night-900 px-4 py-3 text-sm text-white outline-none ring-accent/0 transition focus:ring-4"
                    name="name"
                    autoComplete="name"
                    required
                  />
                </label>

                <label className="grid gap-2">
                  <span className="text-xs font-semibold uppercase tracking-wide text-slate-400">{t('contact.email')}</span>
                  <input
                    className="w-full rounded-2xl border border-white/10 bg-night-900 px-4 py-3 text-sm text-white outline-none ring-accent/0 transition focus:ring-4"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                  />
                </label>

                <label className="grid gap-2">
                  <span className="text-xs font-semibold uppercase tracking-wide text-slate-400">{t('contact.message')}</span>
                  <textarea
                    className="min-h-[160px] w-full resize-y rounded-2xl border border-white/10 bg-night-900 px-4 py-3 text-sm text-white outline-none ring-accent/0 transition focus:ring-4"
                    name="message"
                    required
                  />
                </label>
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-night-900 transition enabled:hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                  disabled={status === 'sending'}
                >
                  {status === 'sending' ? t('contact.sending') : t('contact.submit')}
                </button>
                <p className="text-xs leading-relaxed text-slate-500">{t('contact.privacy')}</p>
              </div>

              {status === 'success' ? (
                <p className="mt-4 text-sm font-semibold text-emerald-300">{t('contact.success')}</p>
              ) : null}
              {status === 'error' ? (
                <p className="mt-4 text-sm font-semibold text-rose-300">{t('contact.error')}</p>
              ) : null}
              {status === 'dev' ? (
                <p className="mt-4 text-sm font-semibold text-sky-300">{t('contact.devNote')}</p>
              ) : null}
            </form>
          </div>
        </div>

        <div className="flex justify-center pt-10 md:pt-5">
          <ScrollUpButton targetId="hero" />
        </div>
      </div>
    </section>
  );
}
