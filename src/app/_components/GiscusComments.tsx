'use client';

import Giscus from '@giscus/react';
import { useTheme } from 'next-themes';

import type { Theme } from '@core/app/_types';

const GiscusComments = () => {
  const { theme } = useTheme();

  return (
    <Giscus
      repo='dmahajan980/portfolio-v3'
      mapping='pathname'
      repoId={process.env.REPO_ID ?? ''}
      category='Comment'
      categoryId={process.env.CATEGORY_ID ?? ''}
      strict='0'
      reactionsEnabled='1'
      emitMetadata='0'
      inputPosition='top'
      theme={THEME_LOOKUP[theme as Theme]}
      loading='lazy'
      lang='en'
    />
  );
};

const THEME_LOOKUP = {
  light: 'light',
  dark: 'dark',
  system: 'preferred_color_scheme',
} as const;

export default GiscusComments;
