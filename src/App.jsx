import { lazy, Suspense } from 'react';
import { Header } from './components/Header.jsx';
import { SocialRail } from './components/SocialRail.jsx';
import { Footer } from './components/Footer.jsx';
import { HeroPage } from './pages/HeroPage.jsx';
import { AboutPage } from './pages/AboutPage.jsx';
import { ExperiencePage } from './pages/ExperiencePage.jsx';
import { ContactPage } from './pages/ContactPage.jsx';
import { useTranslation } from './hooks/useTranslation.js';

// Lazy-load the heaviest section (project cards + images) to keep the initial bundle smaller.
const ProjectsPage = lazy(() => import('./pages/ProjectsPage.jsx'));

function ProjectsSection() {
  const { t } = useTranslation();

  return (
    <Suspense
      fallback={
        <div className="border-t border-white/10 bg-night-950 py-24 text-center text-sm text-slate-500">
          {t('common.loading')}
        </div>
      }
    >
      <ProjectsPage />
    </Suspense>
  );
}

export default function App() {
  return (
    <div className="min-h-dvh bg-night-900">
      <SocialRail />
      <Header />
      <main>
        <HeroPage />
        <AboutPage />
        <ExperiencePage />
        <ProjectsSection />
        <ContactPage />
      </main>
      <Footer />
    </div>
  );
}
