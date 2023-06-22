export const PATHS = {
  github: 'https://github.com/h-jennings',
  twitter: 'https://twitter.com/jennings_hunter',
  cv: 'https://read.cv/hunterjennings',
  seagulls: 'https://www.elegantseagulls.com/',
  breakline: 'https://breakline.org/',
  email: 'mailto:jenningsdhunter@gmail.com',
  base: process.env.NEXT_PUBLIC_URL ?? 'https://www.hunterjennings.dev', // TODO: might want to make this VERCEL_URL
  home: '/',
  about: '/about',
  writing: '/writing',
  now: '/now',
  work: '/work',
  writings: 'data/writings',
  data: 'data',
  og: 'https://www.hunterjennings.dev/api/og',
} as const;
