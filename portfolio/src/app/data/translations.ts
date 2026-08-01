export type Lang = 'en' | 'fr';

const en = {
  // ── Navbar ──────────────────────────────────────────────
  navSkills: 'Skills',
  navProjects: 'Projects',
  navExperience: 'Experience',
  navEducation: 'Education',
  navCertifications: 'Certifications',
  navContact: 'Contact',
  navAvailable: 'Available',

  // ── Hero ────────────────────────────────────────────────
  heroAvailability: 'Available for new opportunities',
  heroRelocation: 'Open to relocation',
  heroGreeting: "Hello, I'm",
  profileTitle: 'Senior Full Stack Developer',
  heroBtnProjects: 'My projects',
  heroBtnContact: 'Contact me',
  heroBtnCV: 'Download CV',
  heroScrollHint: 'Scroll',
  profileSummary:
    'Senior Full Stack Developer with 5+ years of experience designing, developing and maintaining scalable, high-performance business web applications. Strong expertise in C#, ASP.NET Core, Angular and TypeScript with a solid Agile/Scrum culture.',

  // ── Stats labels (index-matched with stats array) ───────
  statsLabels: ['Years of experience', 'Companies', 'Projects delivered', 'Technologies'],

  // ── Skills section ──────────────────────────────────────
  skillsEyebrow: 'Skills',
  skillsTitle: 'Mastered technologies',
  skillsDesc: '5+ years of experience covering backend, frontend, cloud and testing.',
  skillsBehavioural: 'Soft skills',
  skillsLanguages: 'Languages',
  skillsCatHint: 'Click on a category to explore',
  softSkills: [
    { icon: '🧩', text: 'Problem solving' },
    { icon: '🤝', text: 'Agile collaboration' },
    { icon: '🚀', text: 'Autonomy & initiative' },
    { icon: '📝', text: 'Technical documentation' },
  ],

  // ── Projects section ────────────────────────────────────
  projectsEyebrow: 'Projects',
  projectsTitle: 'Key achievements',
  projectsDesc: 'Full-stack projects showcasing expertise in architecture, performance and quality.',
  projectsFeatured: '⭐ Featured',
  projectsViewGithub: 'View on GitHub',
  projectsViewDemo: 'Demo',

  // ── Experience section ──────────────────────────────────
  experienceEyebrow: 'Experience',
  experienceTitle: 'Professional journey',
  experienceDesc: '4 experiences across diverse companies, from startup to multinational.',

  // ── Education section ───────────────────────────────────
  educationEyebrow: 'Education',
  educationTitle: 'Academic background',

  // ── Certifications section ──────────────────────────────
  certificationsEyebrow: 'Certifications',
  certificationsTitle: 'Certifications & recognition',
  certificationsDesc: 'Certifications validating technical expertise and professional practices.',
  certificationsViewLink: 'View certification →',

  // ── Contact section ─────────────────────────────────────
  contactEyebrow: 'Contact',
  contactTitle: "Let's work together",
  contactDesc: 'Available for freelance or permanent positions. I respond quickly.',
  contactPhoneLabel: 'Phone',
  contactCopyHint: 'Click to copy',
  contactCopied: '✓ Copied!',
  contactCallDirect: 'Call directly',
  contactViewProfile: 'View profile →',
  contactViewRepos: 'View my repos →',

  // ── Footer ──────────────────────────────────────────────
  footerRole: 'Senior Full Stack Developer .NET / Angular',
};

const fr = {
  // ── Navbar ──────────────────────────────────────────────
  navSkills: 'Compétences',
  navProjects: 'Projets',
  navExperience: 'Expérience',
  navEducation: 'Formation',
  navCertifications: 'Certifications',
  navContact: 'Contact',
  navAvailable: 'Disponible',

  // ── Hero ────────────────────────────────────────────────
  heroAvailability: 'Disponible pour de nouvelles opportunités',
  heroRelocation: 'Ouvert à la mobilité',
  heroGreeting: 'Bonjour, je suis',
  profileTitle: 'Développeur Full Stack Senior',
  heroBtnProjects: 'Mes projets',
  heroBtnContact: 'Me contacter',
  heroBtnCV: 'Télécharger le CV',
  heroScrollHint: 'Défiler',
  profileSummary:
    "Développeur Full Stack Senior avec plus de 5 ans d'expérience dans la conception, le développement et la maintenance d'applications web évolutives, performantes et orientées métier. Solide expertise en C#, ASP.NET Core, Angular et TypeScript avec une forte culture Agile/Scrum.",

  // ── Stats labels ────────────────────────────────────────
  statsLabels: ["Ans d'expérience", 'Entreprises', 'Projets livrés', 'Technologies'],

  // ── Skills section ──────────────────────────────────────
  skillsEyebrow: 'Compétences',
  skillsTitle: 'Technologies maîtrisées',
  skillsDesc: "5+ ans d'expérience couvrant le backend, le frontend, le cloud et les tests.",
  skillsBehavioural: 'Compétences comportementales',
  skillsLanguages: 'Langues',
  skillsCatHint: 'Cliquez sur une catégorie pour explorer',
  softSkills: [
    { icon: '🧩', text: 'Résolution de problèmes' },
    { icon: '🤝', text: 'Collaboration Agile' },
    { icon: '🚀', text: 'Autonomie & initiative' },
    { icon: '📝', text: 'Documentation technique' },
  ],

  // ── Projects section ────────────────────────────────────
  projectsEyebrow: 'Projets',
  projectsTitle: 'Réalisations clés',
  projectsDesc: 'Projets full-stack illustrant mon expertise en architecture, performance et qualité.',
  projectsFeatured: '⭐ Featured',
  projectsViewGithub: 'Voir sur GitHub',
  projectsViewDemo: 'Démo',

  // ── Experience section ──────────────────────────────────
  experienceEyebrow: 'Expérience',
  experienceTitle: 'Parcours professionnel',
  experienceDesc: '4 expériences chez des acteurs variés, de la startup à la multinationale.',

  // ── Education section ───────────────────────────────────
  educationEyebrow: 'Formation',
  educationTitle: 'Parcours académique',

  // ── Certifications section ──────────────────────────────
  certificationsEyebrow: 'Certifications',
  certificationsTitle: 'Certifications & reconnaissances',
  certificationsDesc: 'Certifications validant mon expertise technique et mes pratiques professionnelles.',
  certificationsViewLink: 'Voir la certification →',

  // ── Contact section ─────────────────────────────────────
  contactEyebrow: 'Contact',
  contactTitle: 'Travaillons ensemble',
  contactDesc: 'Disponible pour des missions freelance ou des opportunités CDI. Répondons rapidement.',
  contactPhoneLabel: 'Téléphone',
  contactCopyHint: 'Cliquer pour copier',
  contactCopied: '✓ Copié !',
  contactCallDirect: 'Appeler directement',
  contactViewProfile: 'Voir le profil →',
  contactViewRepos: 'Voir mes repos →',

  // ── Footer ──────────────────────────────────────────────
  footerRole: 'Développeur Full Stack Senior .NET / Angular',
};

export const translations = { en, fr };
export type UI = typeof en;
