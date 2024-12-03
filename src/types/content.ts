export interface AboutValue {
  title: string;
  description: string;
  icon: string;
}

export interface AboutStat {
  value: string;
  label: string;
  description: string;
}

export interface TeamMember {
  name: string;
  position: string;
  bio: string;
  image: string;
}

export interface Certification {
  name: string;
  issuer: string;
  year: string;
  image: string;
}

export interface AboutData {
  title: string;
  subtitle: string;
  intro: string;
  vision: string;
  mission: string;
  values: AboutValue[];
  stats: AboutStat[];
  team: TeamMember[];
  certifications: Certification[];
  meta: {
    title: string;
    description: string;
  };
} 