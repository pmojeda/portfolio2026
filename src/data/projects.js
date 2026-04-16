// Projects: keep structure stable (id + urls + stack + image).
// Titles/descriptions are translated via `/src/i18n/*.json` using `i18nTitleKey` / `i18nDescKey`.
export const projects = [
  {
    id: 'publicSectorWeb',
    i18nTitleKey: 'projects.items.publicSectorWeb.title',
    i18nDescKey: 'projects.items.publicSectorWeb.description',
    imageSrc: '/images/projects/turnos.jpg',
    demoUrl: null,
    repoUrl: null,
    stack: ['.NET Framework', 'ASP.NET MVC', 'WCF', 'SQL Server', 'Javascript'],
  },
  {
    id: 'fitShop',
    i18nTitleKey: 'projects.items.fitShop.title',
    i18nDescKey: 'projects.items.fitShop.description',
    imageSrc: '/images/projects/tienda.jpg',
    demoUrl: 'https://pmojeda.github.io/FitShopOjeda/',
    repoUrl: 'https://github.com/pmojeda/FitShopOjeda',
    stack: ['React', 'JavaScript'],
  },
  {
    id: 'enterpriseWeb',
    i18nTitleKey: 'projects.items.enterpriseWeb.title',
    i18nDescKey: 'projects.items.enterpriseWeb.description',
    imageSrc: '/images/projects/sitiotech.jpg',
    demoUrl: null,
    repoUrl: null,
    stack: ['.NET 8', 'Web API', 'React', 'SQL Server'],
  },
  {
    id: 'reactSurveys',
    i18nTitleKey: 'projects.items.reactSurveys.title',
    i18nDescKey: 'projects.items.reactSurveys.description',
    imageSrc: '/images/projects/encuestas.jpg',
    demoUrl: null,
    repoUrl: null,
    stack: ['.NET 8', 'Web API', 'React', 'SQL Server'],
  },
];
