export interface Contact {
  phone: string;
  email: string;
  linkedin?: string;
  github?: string;
  portfolio?: string;
}

export interface Skill {
  name: string;
  category: 'Technical' | 'Soft';
}

export interface Experience {
  company: string;
  title: string;
  duration: string;
  responsibilities: string[];
}

export interface Project {
  name: string;
  technologies: string[];
  description: string;
  role?: string;
  link?: string;
}

export interface Education {
  degree: string;
  university: string;
  yearOfCompletion: number;
}

export interface Certification {
  name: string;
  issuedBy: string;
  year: number;
}

export interface OpenSourceContribution {
  project: string;
  description: string;
  link: string;
}

export interface ResumeConfig {
  personalInfo: {
    fullName: string;
    title: string;
    location: string;
    summary: string;
  };
  contact: Contact;
  skills: Skill[];
  workExperience: Experience[];
  projects: Project[];
  education: Education[];
  certifications?: Certification[];
  openSourceContributions?: OpenSourceContribution[];
  languages?: { language: string; proficiency: string }[];
  additionalInfo?: {
    awards?: string[];
    interests?: string[];
  };
}

export const resumeConfig: ResumeConfig = {
  personalInfo: {
    fullName: 'Ravi Teja',
    title: 'Software Developer',
    location: 'India',
    summary:
      'Experienced Software Developer with a strong background web development. Skilled in multiple programming languages and frameworks, with a proven track record of developing innovative AI-driven solutions and enhancing operational efficiency through cutting-edge technologies.',
  },
  contact: {
    phone: '+91 8847819634',
    email: 'andrew.sameh@example.com',
    linkedin: '/in/andrewsameh',
    github: '/andrewsameh',
    portfolio: 'https://andrewsameh.dev',
  },
  skills: [
    // Technical Skills
    { name: 'JavaScript', category: 'Technical' },
    { name: 'TypeScript', category: 'Technical' },
    { name: 'React', category: 'Technical' },
    { name: 'Tailwind', category: 'Technical' },
    { name: '', category: 'Technical' },
    { name: 'Next.js', category: 'Technical' },
    { name: 'AWS', category: 'Technical' },
    { name: 'Azure', category: 'Technical' },
    { name: 'Python', category: 'Technical' },

    // Soft Skills
    { name: 'Problem Solving', category: 'Soft' },
    { name: 'Team Collaboration', category: 'Soft' },
    { name: 'Communication', category: 'Soft' },
    { name: 'Adaptability', category: 'Soft' },
  ],
  workExperience: [
    {
      company: 'Valsoft - Aspire Software',
      title: 'Software Developer',
      duration: 'Jan 2022 - Present',
      responsibilities: [
        'Developed microservices using Python and GoLang',
        'Integrated AI-driven solutions into existing applications',
        'Optimized cloud infrastructure reducing operational costs by 20%',
      ],
    },
    {
      company: 'FlairsTech',
      title: 'Full Stack Developer',
      duration: 'Jun 2020 - Dec 2021',
      responsibilities: [
        'Created responsive web applications using Next.js and TypeScript',
        'Implemented state management solutions with Redux',
        'Conducted code reviews and mentored junior developers',
      ],
    },
  ],
  projects: [
    {
      name: 'FlowPandas',
      technologies: ['Python', 'Microservices'],
      description: 'Developed a data processing microservice to streamline workflow management',
      role: 'Lead Developer',
    },
    {
      name: 'AI Voice Assistant',
      technologies: ['Python', 'Machine Learning', 'NLP'],
      description:
        'Built an intelligent voice-based assistant with natural language processing capabilities',
      role: 'Full Stack Developer',
    },
  ],
  education: [
    {
      degree: 'Bachelor of Computer Science',
      university: 'Cairo University',
      yearOfCompletion: 2019,
    },
  ],
  certifications: [
    {
      name: 'AWS Certified Developer - Associate',
      issuedBy: 'Amazon Web Services',
      year: 2022,
    },
  ],
  languages: [
    { language: 'Telegu', proficiency: 'Native' },
    { language: 'English', proficiency: 'Full Professional Proficiency' },
    { language: 'Hindi', proficiency: 'Speak' },
    { language: 'Odia', proficiency: 'Speak' },
  ],
  additionalInfo: {
    awards: ['Best Innovative Project - University Hackathon 2018'],
    interests: ['Open Source Contribution', 'Machine Learning', 'Tech Innovation'],
  },
};
