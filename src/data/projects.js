// Projects: keep structure stable (id + urls + stack + image).
// Titles/descriptions are translated via `/src/i18n/*.json` using `i18nTitleKey` / `i18nDescKey`.
export const projects = [
  {
    id: 'publicSectorWeb',
    i18nTitleKey: 'projects.items.publicSectorWeb.title',
    i18nDescKey: 'projects.items.publicSectorWeb.description',
    imageSrc: '/images/projects/Turnos Anses 2026.jpg',
    demoUrl: 'https://servicioswww.anses.gob.ar/TurnosInternet/Burbujas/Prestaciones',
    repoUrl: null,
    stack: ['.NET Framework', 'ASP.NET MVC', 'Bootstrap', 'JavaScript', 'SOAP', 'SQL Server'],
  },
{
    id: 'miPortfolio',
    i18nTitleKey: 'projects.items.miPortfolio.title',
    i18nDescKey: 'projects.items.miPortfolio.description',
    imageSrc: '/images/projects/portfolio2026.jpg',
    demoUrl: null,
    repoUrl: 'https://github.com/pmojeda/Portfolio2026',
    stack: ['React', 'JavaScript', 'Tailwind CSS'],
  },
  {
    id: 'tiendaOnline',
    i18nTitleKey: 'projects.items.tiendaOnline.title',
    i18nDescKey: 'projects.items.tiendaOnline.description',
    imageSrc: '/images/projects/tiendaonline.jpg',
    demoUrl: 'https://MiTiendaSaludable.netlify.app',
    repoUrl: 'https://github.com/pmojeda/MiTiendaSaludable',
    stack: ['React', 'JavaScript', 'Tailwind CSS'],
  },
  {
    id: 'enterpriseWeb',
    i18nTitleKey: 'projects.items.enterpriseWeb.title',
    i18nDescKey: 'projects.items.enterpriseWeb.description',
    imageSrc: '/images/projects/sitiotech.jpg',
    demoUrl: null,
    repoUrl: null,
    stack: ['.NET 10', 'Web API', 'React', 'PostgreSQL'],
  },
  {
    id: 'reactSurveys',
    i18nTitleKey: 'projects.items.reactSurveys.title',
    i18nDescKey: 'projects.items.reactSurveys.description',
    imageSrc: '/images/projects/encuestas.jpg',
    demoUrl: null,
    repoUrl: null,
    stack: ['.NET 10', 'Web API', 'React', 'PostgreSQL'],
  }
];
