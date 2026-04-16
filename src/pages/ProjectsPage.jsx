import { useTranslation } from '../hooks/useTranslation.js';
import { SectionHeading } from '../components/SectionHeading.jsx';
import { ProjectCard } from '../components/ProjectCard.jsx';
import { projects } from '../data/projects.js';

function ProjectsPage() {
  const { t } = useTranslation();

  return (
    <section id="projects" className="scroll-mt-28 border-t border-white/10 bg-night-950">
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-20">
        <SectionHeading title={t('projects.title')} subtitle={t('projects.subtitle')} />

        <div className="mx-auto mt-12 grid max-w-6xl gap-6">
          {projects.map((p, idx) => (
            <ProjectCard key={p.id} project={p} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsPage;
