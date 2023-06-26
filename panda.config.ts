import { defineConfig } from '@pandacss/dev';

import { linkRecipe } from '@core/app/_styles/recipes';
import {
  globalCss,
  semanticTokens,
  textStyles,
  tokens,
} from '@core/app/_styles/theme';

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ['./src/**/*.{js,jsx,ts,tsx}', './pages/**/*.{js,jsx,ts,tsx}'],

  theme: {
    tokens,
    semanticTokens,
    textStyles,
    breakpoints: {
      bp1: '520px',
      bp2: '768px',
      bp3: '1040px',
      bp4: '1800px',
    },
    extend: {
      recipes: { link: linkRecipe },
      keyframes: {
        skeleton: {
          '0%': {
            backgroundPosition: '200% 0%',
          },
          '100%': {
            backgroundPosition: '-200% 0%',
          },
        },
      },
    },
  },

  globalCss,
  strictTokens: false,
  jsxFramework: 'react',
  conditions: {
    extend: {
      dark: '.dark-theme &',
      light: '.light-theme &',
    },
  },

  // The output directory for your css system
  outdir: 'foundation',
});
