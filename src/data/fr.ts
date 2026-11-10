// French content. Same shape as profile.ts (English). Shared, language-neutral data is reused from there.
// No phone number or street address is published.
import { profile as en, certifications as enCerts, projects as enProjects } from './profile';

export const profile = {
  ...en,
  title: 'Architecte cloud et ingénieur DevOps senior',
  headline: 'Clouds publics et on-premises',
  tagline:
    'Je conçois et exploite des plateformes sur les clouds publics (AWS, GCP, Azure, Scaleway, Outscale) et on-premises : infrastructure as code, Kubernetes et chaînes de livraison, avec un œil sur les coûts.',
  role: 'Architecte cloud et ingénieur DevOps',
  current: 'Actuellement Sr DevOps et Cloud & Data Architect chez Deloitte France.',
  location: 'France',
  cv: '/cv-fr.pdf',
  about: [
    'Plus de 10 ans d’expérience dans la transformation numérique : planifier, concevoir et exploiter des solutions cloud, data, réseau et sécurité qui apportent de la valeur métier, et piloter des migrations de l’on-premises vers le cloud.',
    'Ingénieur en électronique, systèmes et télécommunications devenu architecte cloud. Expertise on-premises (VMware, OpenShift, Linux, Kubernetes) et sur les clouds publics (AWS, GCP, Azure, Scaleway, Outscale), avec un accent sur l’infrastructure as code, la conteneurisation et les architectures sûres et évolutives.',
    'Formé à IMT Atlantique et à HEC Paris. Courant en espagnol, français et anglais.',
  ],
};

export const skills: { group: string; items: string[] }[] = [
  { group: 'Clouds publics', items: ['AWS', 'GCP', 'Azure', 'Scaleway', 'Outscale'] },
  { group: 'On-premises', items: ['VMware', 'OpenShift', 'Kubernetes', 'Linux', 'Réseau datacenter'] },
  { group: 'Infrastructure as Code', items: ['Terraform', 'Helm'] },
  { group: 'Conteneurs et Kubernetes', items: ['Docker', 'GKE', 'EKS', 'AKS', 'OpenShift'] },
  { group: 'CI/CD et gestion de sources', items: ['GitLab CI/CD', 'Jenkins', 'GitHub', 'Git'] },
  { group: 'Plateforme et observabilité', items: ['Platform Engineering', 'Prometheus', 'Grafana', 'FinOps', 'Plateformes IA'] },
  { group: 'Réseau et sécurité', items: ['Citrix ADC', 'F5', 'Cisco ACI', 'Palo Alto', 'Fortinet'] },
  { group: 'Langages', items: ['Go', 'Python', 'Bash'] },
];

export const experience = [
  {
    role: 'Sr DevOps, Cloud & Data Architect',
    company: 'Deloitte France',
    period: 'Oct. 2022 – Aujourd’hui',
    note: 'Promu depuis Senior Consultant, Cloud Architect / Sr. DevOps (nov. 2022 – sept. 2024)',
    points: [
      'Conception et mise en œuvre d’architectures cloud et de fondations techniques sur AWS, GCP et Azure, axées sur la fiabilité, la sécurité, l’évolutivité et l’efficacité opérationnelle.',
      'Provisionnement et gestion d’infrastructures et d’environnements data avec Terraform, en construisant des modules réutilisables pour automatiser le déploiement et la configuration.',
      'Construction et maintenance de pipelines GitLab CI/CD qui automatisent le provisionnement, la configuration, les tests et le déploiement de l’infrastructure.',
      'Conception et exploitation d’environnements conteneurisés sur Docker et Kubernetes pour un déploiement évolutif et l’exploitation de la plateforme.',
      'Refonte de systèmes IT et data pour améliorer la fiabilité et réduire les coûts ; pilotage du dépannage des problèmes d’infrastructure, de réseau et de configuration dans des environnements complexes.',
    ],
  },
  {
    role: 'Cloud Architect Engineer, Sr. DevOps',
    company: 'Capgemini France',
    period: 'Nov. 2021 – nov. 2022',
    points: [
      'Conception d’une grande part de l’infrastructure AWS de clients en infrastructure as code et pilotage de migrations de l’on-premises vers le cloud.',
      'Rédaction des dossiers de conception haut et bas niveau d’infrastructures cloud sur AWS, Azure et GCP, avec sécurité, observabilité et haute disponibilité dès la conception.',
      'Construction de plateformes conteneurisées sur Docker et Kubernetes (Amazon EKS, Google GKE) et de pipelines CI/CD avec Jenkins et GitLab.',
      'Mise en place de configurations CDN complexes, application des pratiques FinOps sur AWS, traitement d’événements de sécurité et formation d’ingénieurs cloud, ops et dev.',
    ],
  },
];

export const earlier = [
  { period: '2021', role: 'Consulting Engineer Cloud, Telecom', company: 'setec', summary: 'Études d’appels d’offres réseau et télécom (WAN, LAN, IoT, cloud) et preuves de concept cloud avec business cases économiques.' },
  { period: '2020', role: 'IT Consultant / Cloud Engineer, DevOps', company: 'Nokia', summary: 'Conception sécurité, réseau et applications pour une migration d’infrastructure vers AWS, avec le business case pour l’approbation du budget.' },
  { period: '2018 – 2019', role: 'IT Consultant, Citrix', company: 'Itaú Colombia / Agilitix', summary: 'Migration de datacenter et architecture réseau avec Citrix NetScaler et répartiteurs de charge F5 pour des banques et des fournisseurs de services.' },
  { period: '2016 – 2018', role: 'IT Specialist, Jr. DevOps', company: 'IBM Colombia', summary: 'Administration réseau et sécurité, déploiement pionnier de Cisco ACI en Colombie, outil d’automatisation de tickets qui a réduit le temps de traitement de 50 % ; sessions d’architecture qui ont réduit le temps de mise en œuvre de 40 %.' },
];

// Derived from the experience above; replace with real projects (and links) when you have them.
const projectText = [
  { name: 'Modules Terraform réutilisables', description: 'Bibliothèque de modules réutilisables qui standardisent et automatisent le provisionnement des infrastructures et des environnements data sur plusieurs clouds.' },
  { name: 'Plateformes Kubernetes multi-cloud', description: 'Plateformes conteneurisées pour le déploiement et l’exploitation évolutifs d’applications sur Kubernetes managé.' },
  { name: 'Automatisation GitLab CI/CD', description: 'Pipelines couvrant le provisionnement, la configuration, les tests et le déploiement de l’infrastructure.' },
  { name: 'Fiabilité et réduction des coûts', description: 'Refonte de systèmes IT et data pour améliorer la fiabilité et réduire les coûts, appuyée par les pratiques FinOps.' },
];
export const projects: { name: string; description: string; stack: string[]; link?: string }[] = enProjects.map((p, i) => ({
  ...p,
  ...projectText[i],
}));

const levels: Record<string, string> = {
  Professional: 'Professionnel',
  Specialty: 'Spécialité',
  Associate: 'Associé',
  Training: 'Formation',
  Practitioner: 'Praticien',
};
export const certifications = enCerts.map((g) => ({
  ...g,
  provider: g.provider === 'Kubernetes and FinOps' ? 'Kubernetes et FinOps' : g.provider,
  items: g.items.map((c) => ({ ...c, level: levels[c.level] ?? c.level })),
}));

export const education = [
  { degree: 'Formation continue, Management', school: 'HEC Paris', period: 'Juin – juil. 2025' },
  { degree: 'Diplôme d’ingénieur, Cloud Computing', school: 'IMT Atlantique (Telecom Bretagne)', period: '2019 – 2021' },
  { degree: 'Master en télécommunications mobiles', school: 'Universidad Distrital Francisco José de Caldas, Bogotá', period: '2018 – 2019' },
  { degree: 'Ingénieur électronicien', school: 'Universidad Distrital Francisco José de Caldas, Bogotá', period: '2011 – 2016' },
];

export const honors = [
  'Bourse d’excellence Eiffel',
  'Mémoire de fin d’études distingué (mention méritoire)',
  'Distinction de premier rang avec mention, trois fois',
];

export const languages = ['Espagnol (langue maternelle)', 'Français (professionnel)', 'Anglais (professionnel)'];
