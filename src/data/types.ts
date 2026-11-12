// Shape shared by the English (profile.ts) and French (fr.ts) content.
// i18n.ts checks both files against it, so a missing or misspelt field fails `npm run check`.

export type ProjectId = 'terraform-modules' | 'k8s-platforms' | 'gitlab-cicd' | 'reliability-cost';

export interface Certification {
  name: string;
  level: string;
  badge: string;
  /** Show the badge on a white tile (for plain logos). */
  tile?: boolean;
  /** Public verification page (the "Credential URL" on LinkedIn). */
  url?: string;
}

export interface Content {
  profile: {
    name: string;
    title: string;
    headline: string;
    tagline: string;
    role: string;
    current: string;
    location: string;
    email: string;
    linkedin: string;
    github: string;
    cv: string;
    about: string[];
  };
  skills: { group: string; items: string[] }[];
  experience: { role: string; company: string; period: string; note?: string; points: string[] }[];
  earlier: { period: string; role: string; company: string; summary: string }[];
  projects: { id: ProjectId; name: string; description: string; stack: string[]; link?: string }[];
  certifications: { provider: string; items: Certification[] }[];
  education: { degree: string; school: string; period: string }[];
  honors: string[];
  languages: string[];
}
