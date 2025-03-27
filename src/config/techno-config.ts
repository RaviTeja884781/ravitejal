import {
  Tailwind,
  OpenAi,
  TypeScript,
  claude,
  JavaScript,
  Java,
  React,
  SchadCn,
  Css,
  Node,
  Bootstrap,
  Zustand,
  ReduxToolKit,
  Git,
  GitHub,
  Bash,
  Linux,
  PostMan,
  Vercel,
  Jira,
  Vite,
  VsCode,
} from '../assets/technologies';

export const technoConfig = {
  title: "Technologies I've worked with",
  tabTriggers: [
    { value: 'mostUsed', label: 'Most Used' },
    { value: 'languages', label: 'Languages' },
    { value: 'webDev', label: 'Web Dev' },
    { value: 'devopsTools', label: 'DevOps & Tools' },
  ],
  tabContent: [
    {
      value: 'mostUsed',
      label: 'Most Used',
      content: [
        { icon: TypeScript, tooltip: 'TypeScript' },
        { icon: JavaScript, tooltip: 'JavaScript' },
        { icon: Tailwind, tooltip: 'Tailwind' },
        { icon: OpenAi, tooltip: 'OpenAi' },
        { icon: claude, tooltip: 'claude' },
        { icon: SchadCn, tooltip: 'SchadCn' },
        { icon: Zustand, tooltip: 'Zustand' },
      ],
    },
    {
      value: 'languages',
      label: 'Languages',
      content: [
        { icon: TypeScript, tooltip: 'TypeScript' },
        { icon: JavaScript, tooltip: 'JavaScript' },
        { icon: Java, tooltip: 'Java' },
      ],
    },
    {
      value: 'webDev',
      label: 'Web Dev',
      content: [
        { icon: React, tooltip: 'React' },
        { icon: Css, tooltip: 'Css' },
        { icon: Tailwind, tooltip: 'Tailwind' },
        { icon: SchadCn, tooltip: 'SchadCn' },
        { icon: Node, tooltip: 'Node' },
        { icon: Bootstrap, tooltip: 'Bootstrap' },
        { icon: Zustand, tooltip: 'Zustand' },
        { icon: ReduxToolKit, tooltip: 'ReduxToolKit' },
      ],
    },
    {
      value: 'devopsTools',
      label: 'DevOps & Tools',
      content: [
        { icon: Git, tooltip: 'Git' },
        { icon: GitHub, tooltip: 'GitHub' },
        { icon: Bash, tooltip: 'Bash' },
        { icon: Linux, tooltip: 'Linux' },
        { icon: PostMan, tooltip: 'PostMan' },
        { icon: Vercel, tooltip: 'Vercel' },
        { icon: Jira, tooltip: 'Jira' },
        { icon: Vite, tooltip: 'Vite' },
        { icon: VsCode, tooltip: 'VsCode' },
      ],
    },
  ],
};
