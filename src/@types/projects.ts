export interface Technology {
  name: string;
  icon: string;
  color: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: Technology[];
  image: string;
  color: 'cyan' | 'red';
  year: string;
  video?: string;
  link?: string;
  features?: string[];
  github?: string;
}