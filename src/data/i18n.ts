import * as en from './profile';
import * as fr from './fr';

export type Lang = 'en' | 'fr';

export const content = (lang: Lang) => (lang === 'fr' ? fr : en);

// Path of a page in the given language ("" for home, "cv" for the printable CV).
export const path = (lang: Lang, page = '') => `${lang === 'fr' ? '/fr' : ''}/${page}`;

export const ui = {
  en: {
    htmlLang: 'en',
    nav: { about: 'About', skills: 'Skills', experience: 'Experience', work: 'Selected work', certifications: 'Certifications', education: 'Education', contact: 'Contact' },
    navLabel: 'Sections',
    intro: 'Introduction',
    groups: (n: number) => `${n} groups`,
    roles: (n: number) => `${n} recent roles`,
    themes: (n: number) => `${n} themes`,
    credentials: (n: number) => `${n} credentials`,
    earlier: 'Earlier experience',
    languages: 'Languages',
    contactText: 'For a role, a project or a conversation about cloud platforms, write to me.',
    downloadCv: 'Download CV (PDF)',
    cvFile: 'James-Melenge-Diaz-CV-EN.pdf',
    toLight: 'Switch to light theme',
    toDark: 'Switch to dark theme',
    switchTheme: 'Switch theme',
    built: 'Built with Astro.',
    otherLang: 'FR',
    otherLangLabel: 'Lire en français',
    diagramTitle: 'Typical delivery path',
    cvTitle: 'CV',
    cvProfile: 'Profile',
    cvExperience: 'Experience',
    cvSkills: 'Skills',
    cvCerts: 'Certifications',
    cvEducation: 'Education',
    cvHonors: 'Honors',
  },
  fr: {
    htmlLang: 'fr',
    nav: { about: 'À propos', skills: 'Compétences', experience: 'Expérience', work: 'Réalisations', certifications: 'Certifications', education: 'Formation', contact: 'Contact' },
    navLabel: 'Sections',
    intro: 'Présentation',
    groups: (n: number) => `${n} groupes`,
    roles: (n: number) => `${n} postes récents`,
    themes: (n: number) => `${n} thèmes`,
    credentials: (n: number) => `${n} certifications`,
    earlier: 'Expériences précédentes',
    languages: 'Langues',
    contactText: 'Pour un poste, un projet ou un échange sur les plateformes cloud, écrivez-moi.',
    downloadCv: 'Télécharger le CV (PDF)',
    cvFile: 'James-Melenge-Diaz-CV-FR.pdf',
    toLight: 'Passer au thème clair',
    toDark: 'Passer au thème sombre',
    switchTheme: 'Changer de thème',
    built: 'Construit avec Astro.',
    otherLang: 'EN',
    otherLangLabel: 'Read in English',
    diagramTitle: 'Chaîne de livraison type',
    cvTitle: 'CV',
    cvProfile: 'Profil',
    cvExperience: 'Expérience',
    cvSkills: 'Compétences',
    cvCerts: 'Certifications',
    cvEducation: 'Formation',
    cvHonors: 'Distinctions',
  },
};
