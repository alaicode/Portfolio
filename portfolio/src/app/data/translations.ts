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
  profileTitle: 'Full Stack Software Engineer · .NET | Angular | Blazor | Azure | Cloud Architecture | AI-powered Applications',
  heroBtnProjects: 'My projects',
  heroBtnContact: 'Contact me',
  heroBtnCV: 'Download CV',
  heroScrollHint: 'Scroll',
  profileSummary:
    'Full Stack Software Engineer based in Mauritius, originally from Madagascar, specialized in .NET and modern frontend technologies (Angular, Blazor), focused on building maintainable and scalable applications. Experienced in designing professional software solutions with clean architecture principles, cloud-native practices and AI-powered integrations, using modern software engineering practices.',

  // ── Stats labels (index-matched with stats array) ───────
  statsLabels: ['Years of experience', 'Companies', 'Projects delivered', 'Technologies'],

  // ── Skills section ──────────────────────────────────────
  skillsEyebrow: 'Skills',
  skillsTitle: 'Mastered technologies',
  skillsDesc: 'Full stack expertise across the .NET ecosystem, Angular, cloud architecture and AI-powered application engineering.',
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
  projectsDesc: 'Full stack .NET and Angular projects showcasing software architecture, distributed systems and AI-powered applications.',
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
  footerRole: 'Full Stack Software Engineer · .NET Ecosystem',
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
  profileTitle: "Ingénieur logiciel Full Stack · .NET | Angular | Blazor | Azure | Architecture Cloud | Applications intégrant l'IA",
  heroBtnProjects: 'Mes projets',
  heroBtnContact: 'Me contacter',
  heroBtnCV: 'Télécharger le CV',
  heroScrollHint: 'Défiler',
  profileSummary:
    "Ingénieur logiciel Full Stack basé à Maurice, originaire de Madagascar, spécialisé dans l'écosystème .NET et les technologies frontend modernes (Angular, Blazor), je conçois des applications professionnelles maintenables et évolutives. Mon approche repose sur l'architecture logicielle, les bonnes pratiques d'ingénierie, les plateformes cloud et l'intégration de solutions basées sur l'intelligence artificielle.",

  // ── Stats labels ────────────────────────────────────────
  statsLabels: ["Ans d'expérience", 'Entreprises', 'Projets livrés', 'Technologies'],

  // ── Skills section ──────────────────────────────────────
  skillsEyebrow: 'Compétences',
  skillsTitle: 'Technologies maîtrisées',
  skillsDesc: "Expertise Full Stack couvrant l'écosystème .NET, Angular, l'architecture cloud et l'ingénierie de solutions intégrant l'IA.",
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
  projectsDesc: "Projets Full Stack .NET et Angular illustrant l'architecture logicielle, les systèmes distribués et les applications intégrant l'IA.",
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
  footerRole: "Ingénieur logiciel Full Stack · Écosystème .NET",
};

export const translations = { en, fr };
export type UI = typeof en;
