export interface SkillCategory {
  label: string;
  icon: string;
  color: string;
  gradient: string;
  items: string[];
}

export const profile = {
  name: 'Tokiniaina Randrianarimanana',
  firstName: 'Tokiniaina',
  lastName: 'Randrianarimanana',
  initials: 'TR',
  title: 'Developpeur Full Stack Senior',
  subtitle: '.NET / Angular',
  stackTags: ['.NET', 'Angular'],
  location: 'Maurice',
  phone: '+230 5507 1220',
  email: 'randrianarimanana.toki@gmail.com',
  linkedin: 'linkedin.com/in/tokiniaina-randrianarimanana',
  github: 'github.com/toki-dev',
  availability: 'Disponible pour de nouvelles opportunites',
  footerRole: 'Full Stack Senior .NET / Angular',
  summary:
    "Developpeur Full Stack Senior avec plus de 5 ans d'experience dans la conception, le developpement et la maintenance d'applications web evolutives, performantes et orientees metier. Solide expertise en C#, ASP.NET Core, Angular et TypeScript avec une forte culture Agile/Scrum.",
};

export const stats = [
  { value: '5+', label: "Ans d'experience" },
  { value: '4', label: 'Entreprises' },
  { value: '10+', label: 'Projets livres' },
  { value: '15+', label: 'Technologies' },
];

export const techLogos = [
  { name: 'Angular',    slug: 'angular',        color: '#DD0031', bg: 'rgba(221,0,49,0.12)'   },
  { name: '.NET',       slug: 'dotnet',         color: '#512BD4', bg: 'rgba(81,43,212,0.12)'  },
  { name: 'TypeScript', slug: 'typescript',     color: '#3178C6', bg: 'rgba(49,120,198,0.12)' },
  { name: 'C#',         slug: 'csharp',         color: '#68217A', bg: 'rgba(104,33,122,0.12)' },
  { name: 'Docker',     slug: 'docker',         color: '#2496ED', bg: 'rgba(36,150,237,0.12)' },
  { name: 'Kubernetes', slug: 'kubernetes',     color: '#326CE5', bg: 'rgba(50,108,229,0.12)' },
  { name: 'PostgreSQL', slug: 'postgresql',     color: '#4169E1', bg: 'rgba(65,105,225,0.12)' },
  { name: 'Redis',      slug: 'redis',          color: '#DC382D', bg: 'rgba(220,56,45,0.12)'  },
  { name: 'Azure',      slug: 'microsoftazure', imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg',                        color: '#0078D4', bg: 'rgba(0,120,212,0.12)'  },
  { name: 'AWS',        slug: 'amazonaws',      imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original.svg', color: '#FF9900', bg: 'rgba(255,153,0,0.12)'  },
  { name: 'Kafka',      slug: 'apachekafka',    color: '#a78bfa', bg: 'rgba(167,139,250,0.12)'},
  { name: 'GitHub',     slug: 'github',         color: '#f8fafc', bg: 'rgba(248,250,252,0.08)'},
  { name: 'RxJS',       slug: 'reactivex',      color: '#B7178C', bg: 'rgba(183,23,140,0.12)' },
  { name: 'SQL Server', slug: 'microsoftsqlserver', color: '#CC2927', bg: 'rgba(204,41,39,0.12)'  },
];

export const skillCategories: SkillCategory[] = [
  {
    label: 'Langages & Frameworks',
    icon: '💻',
    color: '#60a5fa',
    gradient: 'linear-gradient(135deg, #3b82f6, #6366f1)',
    items: ['C#', '.NET', 'ASP.NET Core', 'Entity Framework Core', 'TypeScript', 'Angular', 'AngularJS'],
  },
  {
    label: 'Backend & API',
    icon: '⚙️',
    color: '#a78bfa',
    gradient: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
    items: ['API REST', 'Minimal APIs', 'LINQ', 'MediatR', 'CQRS', 'AutoMapper', 'FluentValidation', 'Swagger/OpenAPI'],
  },
  {
    label: 'Frontend',
    icon: '🎨',
    color: '#34d399',
    gradient: 'linear-gradient(135deg, #10b981, #14b8a6)',
    items: ['Angular', 'RxJS', 'Reactive Forms', 'Angular Material', 'PrimeNG', 'AuthGuard', 'HttpInterceptor'],
  },
  {
    label: 'Architecture',
    icon: '🏗️',
    color: '#fbbf24',
    gradient: 'linear-gradient(135deg, #f59e0b, #ef4444)',
    items: ['Microservices', 'Clean Architecture', 'Onion Architecture', 'Principes SOLID', 'Design Patterns', 'Saga Pattern'],
  },
  {
    label: 'Bases de donnees',
    icon: '🗄️',
    color: '#f87171',
    gradient: 'linear-gradient(135deg, #ef4444, #f97316)',
    items: ['SQL Server', 'PostgreSQL', 'Oracle', 'MongoDB', 'Redis', 'Kafka'],
  },
  {
    label: 'Cloud & DevOps',
    icon: '☁️',
    color: '#38bdf8',
    gradient: 'linear-gradient(135deg, #0ea5e9, #3b82f6)',
    items: ['AWS', 'Microsoft Azure', 'Docker', 'Kubernetes', 'Git', 'GitHub Actions', 'Azure DevOps', 'CI/CD'],
  },
  {
    label: 'Tests & Qualite',
    icon: '✅',
    color: '#4ade80',
    gradient: 'linear-gradient(135deg, #22c55e, #10b981)',
    items: ['xUnit', 'NUnit', 'Cypress', 'JMeter', 'SonarQube', 'Tests unitaires', "Tests d'integration", 'Tests E2E'],
  },
];

export const projects = [
  {
    title: 'ExpenseFlow',
    category: 'Web Application',
    icon: '💰',
    description: "Application complete de gestion des notes de frais avec integration OCR pour la capture automatique des recus. Architecture Onion, tests E2E et pipeline CI/CD Azure DevOps.",
    descriptionEn: 'Full expense management app with OCR integration for automatic receipt capture. Onion Architecture, E2E testing and Azure DevOps CI/CD pipeline.',
    tech: ['Angular 16', '.NET 8', 'SQL Server', 'OCR API', 'Cypress', 'Azure DevOps'],
    color: '#a78bfa',
    gradient: 'linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%)',
    github: 'github.com/toki-dev/expense-flow',
    featured: true,
  },
  {
    title: 'MicroCore Gateway',
    category: 'API / Architecture',
    icon: '🔌',
    description: "Gateway API pour orchestrer une architecture microservices event-driven avec Kafka, mise en cache Redis et monitoring JMeter. Deploye sur AWS avec Docker et Kubernetes.",
    descriptionEn: 'API gateway orchestrating an event-driven microservices architecture with Kafka, Redis caching and JMeter monitoring. Deployed on AWS with Docker and Kubernetes.',
    tech: ['.NET 9', 'Kafka', 'Redis', 'Docker', 'Kubernetes', 'AWS', 'JMeter'],
    color: '#60a5fa',
    gradient: 'linear-gradient(135deg, #3b82f6 0%, #0ea5e9 100%)',
    github: 'github.com/toki-dev/microcore-gateway',
    featured: true,
  },
  {
    title: 'ContractHub B2B',
    category: 'Web Application',
    icon: '📋',
    description: "Plateforme B2B de gestion des contrats clients avec tableaux de bord metier, rapports analytiques et workflow de validation. Interface PrimeNG avec authentification OAuth2.",
    descriptionEn: 'B2B platform for customer contract management with business dashboards, analytical reports and approval workflow. PrimeNG interface with OAuth2 authentication.',
    tech: ['Angular 13', '.NET 6', 'PrimeNG', 'PostgreSQL', 'Identity Server 4'],
    color: '#34d399',
    gradient: 'linear-gradient(135deg, #10b981 0%, #14b8a6 100%)',
    github: 'github.com/toki-dev/contract-hub',
    featured: false,
  },
  {
    title: 'StockOps Intranet',
    category: 'Intranet',
    icon: '📦',
    description: "Application intranet de gestion de la production, du stock et des commandes pour une entreprise manufacturiere. Securisation des donnees et optimisation des requetes Oracle.",
    descriptionEn: 'Intranet application for production, stock and order management for a manufacturing company. Data security and Oracle query optimization.',
    tech: ['.NET 5', 'Angular 13', 'Oracle', 'SQL Server', 'CI/CD'],
    color: '#fbbf24',
    gradient: 'linear-gradient(135deg, #f59e0b 0%, #f97316 100%)',
    github: 'github.com/toki-dev/stockops',
    featured: false,
  },
  {
    title: 'HR Automation Portal',
    category: 'Web Application',
    icon: '👥',
    description: "Portail RH moderne avec formulaires reactifs Angular, automatisation des processus onboarding/offboarding, notifications temps reel SignalR et pipeline CI/CD complet.",
    descriptionEn: 'Modern HR portal with reactive Angular forms, onboarding/offboarding automation, SignalR real-time notifications and a complete CI/CD pipeline.',
    tech: ['Angular 18', '.NET 9', 'SignalR', 'Azure', 'Docker', 'GitHub Actions'],
    color: '#f87171',
    gradient: 'linear-gradient(135deg, #ef4444 0%, #ec4899 100%)',
    github: 'github.com/toki-dev/hr-portal',
    featured: true,
  },
];

export const certifications = [
  {
    title: 'AZ-900: Microsoft Azure Fundamentals',
    issuer: 'Microsoft',
    issuerColor: '#0078D4',
    issuerBg: 'rgba(0,120,212,0.12)',
    issuerSlug: 'microsoftazure',
    year: '2024',
    level: 'Foundational',
    levelColor: '#4ade80',
    link: 'https://learn.microsoft.com/certifications/azure-fundamentals/',
    icon: '☁️',
  },
  {
    title: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    issuerColor: '#FF9900',
    issuerBg: 'rgba(255,153,0,0.12)',
    issuerSlug: 'amazonaws',
    year: '2025',
    level: 'Foundational',
    levelColor: '#4ade80',
    link: 'https://aws.amazon.com/certification/certified-cloud-practitioner/',
    icon: '⚡',
  },
  {
    title: 'Professional Scrum Master I (PSM I)',
    issuer: 'Scrum.org',
    issuerColor: '#009FDA',
    issuerBg: 'rgba(0,159,218,0.12)',
    issuerSlug: 'scrumorg',
    year: '2023',
    level: 'Professional',
    levelColor: '#60a5fa',
    link: 'https://www.scrum.org/professional-scrum-certifications',
    icon: '🏃',
  },
  {
    title: 'Docker Certified Associate',
    issuer: 'Docker Inc.',
    issuerColor: '#2496ED',
    issuerBg: 'rgba(36,150,237,0.12)',
    issuerSlug: 'docker',
    year: '2023',
    level: 'Associate',
    levelColor: '#a78bfa',
    link: 'https://training.docker.com/certification',
    icon: '🐳',
  },
  {
    title: 'Angular & NgRx - The Complete Guide',
    issuer: 'Angular University',
    issuerColor: '#DD0031',
    issuerBg: 'rgba(221,0,49,0.12)',
    issuerSlug: 'angular',
    year: '2022',
    level: 'Advanced',
    levelColor: '#fbbf24',
    link: 'https://angular-university.io',
    icon: '🅰️',
  },
];

export const experience = [
  {
    period: '2025 – Present',
    title: 'Developpeur Full Stack Senior',
    company: 'Accenture',
    location: 'Maurice',
    color: '#60a5fa',
    tech: ['.NET 9', 'Angular 18', 'SQL Server', 'PostgreSQL', 'Redis', 'Kafka', 'Docker', 'AWS', 'JMeter'],
    details: [
      "Conception et developpement d'API REST evolutives dans une architecture microservices.",
      "Definition de l'architecture systeme, des modeles de donnees et des flux d'integration entre services distribues.",
      'Developpement Angular avec RxJS, amelioration de la maintenabilite et de la scalabilite.',
      'Optimisation des performances API avec JMeter, mise en cache Redis et architecture Kafka.',
      'Travail Agile/Scrum avec JIRA, Clean Architecture, SOLID et controles qualite SonarQube.',
    ],
    titleEn: 'Senior Full Stack Developer',
    detailsEn: [
      'Design and development of scalable REST APIs in a microservices architecture.',
      'System architecture definition, data models and integration flows between distributed services.',
      'Angular development with RxJS, improving maintainability and scalability.',
      'API performance optimization with JMeter, Redis caching and Kafka architecture.',
      'Agile/Scrum with JIRA, Clean Architecture, SOLID and SonarQube quality controls.',
    ],
  },
  {
    period: '2023 – 2025',
    title: 'Developpeur Full Stack',
    company: 'Novity',
    location: 'Maurice',
    color: '#a78bfa',
    tech: ['.NET 8', 'Angular 16', 'SQL Server', 'Cypress', 'Azure DevOps'],
    details: [
      "Developpement d'une application de gestion de notes de frais avec Onion Architecture.",
      "Migration d'applications AngularJS vers Angular, modernisation des interfaces.",
      "Integration de fonctionnalites OCR pour automatiser le traitement des recus.",
      "Mise en place de tests unitaires, d'integration et E2E avec suivi Agile via Azure DevOps.",
    ],
    titleEn: 'Full Stack Developer',
    detailsEn: [
      'Development of an expense report management application with Onion Architecture.',
      'Migration of AngularJS applications to Angular, modernizing interfaces.',
      'Integration of OCR features to automate receipt processing.',
      'Unit, integration and E2E test setup with Agile tracking via Azure DevOps.',
    ],
  },
  {
    period: '2022 – 2023',
    title: 'Developpeur Full Stack',
    company: 'Wylog',
    location: 'Madagascar',
    color: '#34d399',
    tech: ['.NET 6', 'Angular 13', 'PrimeNG', 'PostgreSQL', 'Identity Server 4', 'AuthGuard'],
    details: [
      "Developpement d'une application B2B pour optimiser la valeur des contrats clients.",
      "Contribution a une application desktop ETL pour le traitement interne des donnees.",
      'Support client, retours utilisateurs et ameliorations continues en environnement Agile.',
    ],
    titleEn: 'Full Stack Developer',
    detailsEn: [
      'Development of a B2B application to optimize the value of customer contracts.',
      'Contribution to a desktop ETL application for internal data processing.',
      'Customer support, user feedback and continuous improvements in an Agile environment.',
    ],
  },
  {
    period: '2021 – 2022',
    title: 'Developpeur Full Stack',
    company: 'Esokia',
    location: 'Madagascar',
    color: '#fbbf24',
    tech: ['.NET 5', 'Angular 13', 'Oracle', 'SQL Server'],
    details: [
      'Applications web et intranet pour la gestion de la production, du stock et des commandes.',
      'Conception architecture backend, services applicatifs et structures de donnees.',
      "Mise en place de processus CI/CD et suivi des environnements de production.",
    ],
    titleEn: 'Full Stack Developer',
    detailsEn: [
      'Web and intranet applications for production, stock and order management.',
      'Backend architecture design, application services and data structures.',
      'CI/CD process setup and production environment monitoring.',
    ],
  },
];

export const education = [
  {
    period: '2021 – 2023',
    title: 'Master MBDS',
    institution: "Universite Cote d'Azur",
    location: 'France',
    icon: '🎓',
    color: '#60a5fa',
    details: [
      'Specialisation en Mobilite, Big Data et Integration de Systemes.',
      "Formation axee sur le developpement logiciel, l'analyse de donnees et la modelisation des processus metier.",
      "Realisation de projets en developpement full stack et conception d'applications d'entreprise.",
    ],
    titleEn: 'Master MBDS',
    detailsEn: [
      'Specialization in Mobility, Big Data and Systems Integration.',
      'Training focused on software development, data analysis and business process modeling.',
      'Full-stack development projects and enterprise application design.',
    ],
  },
  {
    period: '2018 – 2021',
    title: "Licence Developpement d'Applications",
    institution: 'IT University',
    location: 'Madagascar',
    icon: '📚',
    color: '#a78bfa',
    details: [
      "Specialisation en developpement d'applications web et desktop.",
      'Experience pratique en .NET, Angular et gestion de bases de donnees.',
    ],
    titleEn: 'Software Development Degree',
    detailsEn: [
      'Specialization in web and desktop application development.',
      'Practical experience in .NET, Angular and database management.',
    ],
  },
];

export const contact = {
  email: 'randrianarimanana.toki@gmail.com',
  phone: '+230 5507 1220',
  linkedin: 'linkedin.com/in/tokiniaina-randrianarimanana',
  github: 'github.com/toki-dev',
  location: 'Maurice',
  linkedinName: 'Tokiniaina Randrianarimanana',
  githubHandle: 'toki-dev',
};

export const languages = [
  { name: 'Français', flagCode: 'fr', level: 'Courant', percent: 100 },
  { name: 'Anglais', flagCode: 'gb', level: 'Professionnel', percent: 80 },
];

export const softSkills = [
  { icon: '🧩', text: 'Resolution de problemes' },
  { icon: '🤝', text: 'Collaboration Agile' },
  { icon: '🚀', text: 'Autonomie & initiative' },
  { icon: '📝', text: 'Documentation technique' },
];

export const sectionDescriptions = {
  skills: "5+ ans d'experience couvrant le backend, le frontend, le cloud et les tests.",
  experience: '4 experiences chez des acteurs varies, de la startup a la multinationale.',
  certifications: 'Certifications validant mon expertise technique et mes pratiques professionnelles.',
  projects: 'Projets full-stack illustrant mon expertise en architecture, performance et qualite.',
  contact: 'Disponible pour des missions freelance ou des opportunites CDI. Repondons rapidement.',
};
