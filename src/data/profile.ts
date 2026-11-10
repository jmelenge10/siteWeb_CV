// ✏️  EDIT THIS FILE ONLY: all site content (and the generated CV PDF) comes from here.
// Sources: CV + LinkedIn export. No phone number or street address is published.

export const profile = {
  name: 'James Melenge Diaz',
  title: 'Cloud Architect & Sr. DevOps Engineer',
  headline: 'Public clouds and on-premises',
  tagline:
    'I design and run platforms across public clouds (AWS, GCP, Azure, Scaleway, Outscale) and on-premises: infrastructure as code, Kubernetes and delivery pipelines, with an eye on cost.',
  role: 'Cloud architect and DevOps engineer',
  current: 'Currently Sr DevOps and Cloud & Data Architect at Deloitte France.',
  location: 'France',
  email: 'jamesdiaz319@gmail.com',
  linkedin: 'https://www.linkedin.com/in/james-melenge/',
  github: 'https://github.com/jmelenge10',
  cv: '/cv.pdf',
  about: [
    '10+ years of experience delivering digital transformation: planning, designing and running cloud, data, network and security solutions that drive business value, and leading migration projects from on-premises to the cloud.',
    'Electronics, systems and telecommunications engineer turned cloud architect. Expertise in on-premises VMware, OpenShift, Linux and Kubernetes, and in public clouds (AWS, GCP, Azure, Scaleway, Outscale), with a focus on infrastructure as code, containerization and secure, scalable architectures.',
    'Trained at IMT Atlantique and HEC Paris. Fluent in Spanish, French and English.',
  ],
};

export const skills: { group: string; items: string[] }[] = [
  { group: 'Public clouds', items: ['AWS', 'GCP', 'Azure', 'Scaleway', 'Outscale'] },
  { group: 'On-premises', items: ['VMware', 'OpenShift', 'Kubernetes', 'Linux', 'Data centre networking'] },
  { group: 'Infrastructure as Code', items: ['Terraform', 'Helm'] },
  { group: 'Containers & Kubernetes', items: ['Docker', 'GKE', 'EKS', 'AKS', 'OpenShift'] },
  { group: 'CI/CD & Source control', items: ['GitLab CI/CD', 'Jenkins', 'GitHub', 'Git'] },
  { group: 'Platform & Observability', items: ['Platform Engineering', 'Prometheus', 'Grafana', 'FinOps', 'AI platforms'] },
  { group: 'Networking & Security', items: ['Citrix ADC', 'F5', 'Cisco ACI', 'Palo Alto', 'Fortinet'] },
  { group: 'Languages', items: ['Go', 'Python', 'Bash'] },
];

export const experience = [
  {
    role: 'Sr DevOps, Cloud & Data Architect',
    company: 'Deloitte France',
    period: 'Oct 2022 – Present',
    note: 'Promoted from Senior Consultant, Cloud Architect / Sr. DevOps (Nov 2022 – Sep 2024)',
    points: [
      'Design and implement cloud architectures and technical foundations across AWS, GCP and Azure, focused on reliability, security, scalability and operational efficiency.',
      'Provision and manage infrastructure and data environments with Terraform, building reusable modules to automate deployment and configuration.',
      'Build and maintain GitLab CI/CD pipelines automating infrastructure provisioning, configuration, testing and deployment.',
      'Design and run containerised environments on Docker and Kubernetes for scalable deployment and platform operations.',
      'Refactor IT and data systems to improve reliability and reduce costs; lead troubleshooting of infrastructure, networking and configuration issues in complex environments.',
    ],
  },
  {
    role: 'Cloud Architect Engineer, Sr. DevOps',
    company: 'Capgemini France',
    period: 'Nov 2021 – Nov 2022',
    points: [
      'Designed a large part of clients’ AWS infrastructure as code and led on-premises to cloud migrations.',
      'Delivered high- and low-level design documentation for cloud infrastructures on AWS, Azure and GCP, with security, observability and high availability by design.',
      'Built containerised platforms on Docker and Kubernetes (Amazon EKS, Google GKE) and CI/CD pipelines with Jenkins and GitLab.',
      'Set up complex CDN configurations, applied FinOps practices on AWS, handled security events and trained cloud, ops and dev engineers.',
    ],
  },
];

// Earlier roles, summarised.
export const earlier = [
  { period: '2021', role: 'Consulting Engineer Cloud, Telecom', company: 'setec', summary: 'Network and telecom tender studies (WAN, LAN, IoT, cloud) and cloud proofs of concept with economic business cases.' },
  { period: '2020', role: 'IT Consultant / Cloud Engineer, DevOps', company: 'Nokia', summary: 'Security, network and application design for an infrastructure migration to AWS, with the business case for budget approval.' },
  { period: '2018 – 2019', role: 'IT Consultant, Citrix', company: 'Itaú Colombia / Agilitix', summary: 'Datacenter migration and network architecture with Citrix NetScaler and F5 load balancers for banks and service providers.' },
  { period: '2016 – 2018', role: 'IT Specialist, Jr. DevOps', company: 'IBM Colombia', summary: 'Network and security administration, Cisco ACI pioneer deployment in Colombia, and a ticket-automation tool that cut handling time by 50%; architecture sessions that reduced implementation time by 40%.' },
];

// Derived from the experience above; replace with real projects (and links) when you have them.
export const projects: { name: string; description: string; stack: string[]; link?: string }[] = [
  {
    name: 'Reusable Terraform modules',
    description: 'Library of reusable modules that standardise and automate infrastructure and data environment provisioning across clouds.',
    stack: ['Terraform', 'AWS', 'GCP', 'Azure'],
  },
  {
    name: 'Multi-cloud Kubernetes platforms',
    description: 'Containerised platforms for scalable application deployment and operations on managed Kubernetes.',
    stack: ['EKS', 'GKE', 'AKS', 'Helm'],
  },
  {
    name: 'GitLab CI/CD automation',
    description: 'Pipelines covering infrastructure provisioning, configuration, testing and deployment.',
    stack: ['GitLab CI/CD', 'Jenkins', 'Docker'],
  },
  {
    name: 'Reliability & cost refactoring',
    description: 'Refactoring of IT and data systems to improve reliability and reduce costs, backed by FinOps practices.',
    stack: ['FinOps', 'Prometheus', 'Grafana'],
  },
];

export const certifications: {
  provider: string;
  items: { name: string; level: string; badge: string; tile?: boolean }[];
}[] = [
  {
    provider: 'Amazon Web Services',
    items: [
      { name: 'AWS Certified Solutions Architect – Professional', level: 'Professional', badge: '/img/certs/aws-sap.png' },
      { name: 'AWS Certified Security – Specialty', level: 'Specialty', badge: '/img/certs/aws-scs.png' },
      { name: 'AWS Certified Solutions Architect – Associate', level: 'Associate', badge: '/img/certs/aws-saa.png' },
      { name: 'AWS Partner: Security Governance at Scale (Technical)', level: 'Training', badge: '/img/certs/aws.svg', tile: true },
    ],
  },
  {
    provider: 'Google Cloud',
    items: [
      { name: 'Professional Cloud Architect', level: 'Professional', badge: '/img/certs/gcp-pca.png' },
      { name: 'Professional Cloud Network Engineer', level: 'Professional', badge: '/img/certs/gcp-pcne.png' },
      { name: 'Associate Cloud Engineer', level: 'Associate', badge: '/img/certs/gcp-ace.png' },
    ],
  },
  {
    provider: 'Microsoft Azure',
    items: [{ name: 'Microsoft Certified: Azure Administrator Associate', level: 'Associate', badge: '/img/certs/azure-associate.svg' }],
  },
  {
    provider: 'Kubernetes and FinOps',
    items: [
      { name: 'Certified Kubernetes Administrator (CKA)', level: 'Professional', badge: '/img/certs/cka.png' },
      { name: 'FinOps Certified Practitioner', level: 'Practitioner', badge: '/img/certs/finops-practitioner.png' },
    ],
  },
];

export const education = [
  { degree: 'Executive Education Program, Management', school: 'HEC Paris', period: 'Jun – Jul 2025' },
  { degree: "Master of Science in Engineering (Diplôme d'Ingénieur), Cloud Computing", school: 'IMT Atlantique (Telecom Bretagne)', period: '2019 – 2021' },
  { degree: 'Master in Mobile Telecommunications', school: 'Universidad Distrital Francisco José de Caldas, Bogotá', period: '2018 – 2019' },
  { degree: 'Electronic Engineer', school: 'Universidad Distrital Francisco José de Caldas, Bogotá', period: '2011 – 2016' },
];

export const honors = [
  'Eiffel Excellence Scholarship',
  'Undergraduate thesis awarded with honors (meritorious)',
  'First class with honors, three times',
];

export const languages = ['Spanish (native)', 'French (professional)', 'English (professional)'];
