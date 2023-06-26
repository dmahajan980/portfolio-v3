const paths = {
  base: process.env.NEXT_PUBLIC_URL ?? 'https://www.hunterjennings.dev', // TODO: might want to make this VERCEL_URL
  github: 'https://github.com/dmahajan980',
  twitter: 'https://twitter.com/dmahajan980',
  cv: 'https://divyanshu.mahajan.read.cv',
  email: 'mailto:divyanshumahajan98@gmail.com',
  home: '/',
  writing: '/writing',
  work: '/work',
} as const;

export default paths;
