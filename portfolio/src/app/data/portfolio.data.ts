export interface TechItem {
  name: string;
  logo: string;
  description: string;
}

export const skills = [
  'ASP.NET Core',
  'C#',
  'REST API',
  'Entity Framework',
  'SQL Server / Azure SQL',
  'CI/CD',
  'Tests unitaires',
  'Architecture DDD',
  'SignalR',
  'Azure DevOps',
  'Azure Pipelines',
  'Clean Code'
];

export const techStack: TechItem[] = [
  { name: 'Angular', logo: 'angular.png', description: 'UI web moderne, composants réactifs.' },
  { name: '.NET', logo: 'dotnet.png', description: 'Backend sécurisé et performant.' },
  { name: 'TypeScript', logo: 'typescript.png', description: 'Typage statique, code maintenable.' },
  { name: 'RxJS', logo: 'rxjs.png', description: 'Programmation réactive et flux data.' },
  { name: 'Azure', logo: 'azure.png', description: 'Cloud, déploiement et services managés.' },
  { name: 'SQL Server', logo: 'sqlserver.png', description: 'Base de données et architecture data.' }
];

export const experience = [
  {
    period: '2024 – Aujourd’hui',
    title: 'Développeur Fullstack',
    company: 'Société digitale',
    details:
      'Conception d’applications Angular + ASP.NET Core, création de dashboards métiers et optimisation des performances.'
  },
  {
    period: '2022 – 2024',
    title: 'Ingénieur logiciel',
    company: 'Agence SaaS',
    details:
      'Développement de microservices .NET, APIs sécurisées et automatisation des déploiements Azure.'
  },
  {
    period: '2020 – 2022',
    title: 'Développeur frontend',
    company: 'Startup innovante',
    details:
      'Réalisations d’interfaces utilisateur réactives, amélioration de l’UX et mise en place de tests unitaires.'
  }
];

export const projects = [
  {
    title: 'Plateforme de gestion client',
    description:
      'Application fullstack Angular + ASP.NET Core pour piloter les ventes, les contacts et les tableaux de bord métier.',
    tech: 'Angular · ASP.NET Core · Entity Framework · Azure'
  },
  {
    title: 'Tableau de bord opérationnel',
    description:
      'Dashboard métier en temps réel avec API REST, authentification et visualisation de données pour les équipes produit.',
    tech: 'Angular · .NET 8 · SignalR · Azure DevOps'
  },
  {
    title: 'Solution RH automatisée',
    description:
      'Portail RH avec formulaires réactifs, intégration backend et déploiement CI/CD pour améliorer l’expérience collaborateur.',
    tech: 'Angular · ASP.NET Core · Azure Pipelines · SQL Server'
  }
];

export const education = [
  {
    period: '2023 – 2025',
    title: 'Master MIAGE',
    institution: 'Université de Picardie Jules Verne',
    details: 'Méthodes informatiques appliquées à la gestion, génie logiciel et architecture des systèmes d’information.'
  },
  {
    period: '2021 – 2023',
    title: 'Licence Informatique',
    institution: 'Université locale',
    details: 'Fondamentaux du développement logiciel, bases de données, et projets pratiques full-stack.'
  }
];

export const certifications = [
  {
    title: 'Microsoft Certified: Azure Fundamentals',
    issuer: 'Microsoft',
    link: '#',
    year: '2025'
  },
  {
    title: 'Coursera – Front-End Development',
    issuer: 'Meta',
    link: '#',
    year: '2024'
  },
  {
    title: 'Coursera – Data Structures',
    issuer: 'University of Michigan',
    link: '#',
    year: '2024'
  }
];

export const contact = {
  email: 'votre.email@example.com',
  linkedin: 'linkedin.com/in/votre-profil',
  github: 'github.com/votre-profil'
};
