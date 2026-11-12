import * as en from './profile';
import * as fr from './fr';

export type Lang = 'en' | 'fr';

import type { Content } from './types';

// Both languages must have the same shape; this assignment is the check.
const all: Record<Lang, Content> = { en, fr };
export const content = (lang: Lang): Content => all[lang];

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
    skip: 'Skip to content',
    verify: 'Verify',
    verifyLabel: (name: string) => `Verify the credential: ${name}`,
    ogLocale: 'en_GB',
    notFoundTitle: 'Page not found',
    notFoundText: 'This address does not exist on this site.',
    backHome: 'Back to the home page',
    diagram: {
      desc: 'Code in Git goes through a GitLab CI/CD pipeline to Terraform, which provisions public clouds (AWS, Google Cloud, Azure, Scaleway, Outscale) and on-premises infrastructure (VMware, OpenShift, Linux). Kubernetes runs on top, and Prometheus and Grafana observe every environment.',
      git: 'Git repository',
      clouds: 'Public clouds',
      observability: 'Prometheus and Grafana across every environment',
      observabilityShort: ['Prometheus and Grafana', 'across every environment'],
      caption: 'A typical delivery path in my work: code, pipeline, Terraform, then Kubernetes on public clouds and on-premises.',
    },
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
    skip: 'Aller au contenu',
    verify: 'Vérifier',
    verifyLabel: (name: string) => `Vérifier la certification : ${name}`,
    ogLocale: 'fr_FR',
    notFoundTitle: 'Page introuvable',
    notFoundText: 'Cette adresse n’existe pas sur ce site.',
    backHome: 'Retour à l’accueil',
    diagram: {
      desc: 'Le code dans Git passe par un pipeline GitLab CI/CD jusqu’à Terraform, qui provisionne les clouds publics (AWS, Google Cloud, Azure, Scaleway, Outscale) et l’infrastructure on-premises (VMware, OpenShift, Linux). Kubernetes tourne par-dessus, et Prometheus et Grafana observent chaque environnement.',
      git: 'Dépôt Git',
      clouds: 'Clouds publics',
      observability: 'Prometheus et Grafana sur tous les environnements',
      observabilityShort: ['Prometheus et Grafana', 'sur tous les environnements'],
      caption: 'Une chaîne de livraison type dans mon travail : code, pipeline, Terraform, puis Kubernetes sur les clouds publics et on-premises.',
    },
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
