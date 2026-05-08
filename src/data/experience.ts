export type ExperienceItem = {
  org: string;
  role: string;
  period: string;
  href?: string;
  detail?: string;
  bullets?: string[];
};

export const experience: ExperienceItem[] = [
  {
    org: 'Dnotitia',
    role: 'Deep Learning Engineer',
    period: 'May 2025 — Present',
    href: 'https://www.dnotitia.com/',
    detail: 'LLM inference efficiency and multilingual multimodal retrieval.',
  },
  {
    org: 'Buzzni',
    role: 'Deep Learning Research Engineer',
    period: 'Jul 2023 — Apr 2025',
    href: 'https://www.buzzni.com/',
    detail: 'Multimodal short-form video AI and product-search embedding models for enterprise Korean retailers.',
  },
  {
    org: 'Seoul National University',
    role: 'M.S. in Artificial Intelligence',
    period: 'Mar 2021 — Aug 2023',
    href: 'https://eng.snu.ac.kr/',
    detail: 'Advised by Prof. Nojun Kwak at MIPAL.',
  },
  {
    org: 'Kyung Hee University',
    role: 'B.E. in Computer Science / B.A. in International Studies',
    period: 'Mar 2017 — Feb 2021',
    href: 'https://www.khu.ac.kr/',
  },
];
