import { defineSemanticTokens } from '@pandacss/dev';
import {
  goldDark,
  greenDark,
  slateDark,
  yellowDark,
  tomatoDark,
  gold,
  green,
  slate,
  tomato,
  yellow,
} from '@radix-ui/colors';

const colorsDark = {
  ...goldDark,
  ...greenDark,
  ...slateDark,
  ...greenDark,
  ...yellowDark,
  ...tomatoDark,
} as const;

const colorsLight = {
  ...gold,
  ...green,
  ...slate,
  ...green,
  ...yellow,
  ...tomato,
} as const;

type ColorKey = keyof typeof colorsDark;

const colors = Object.keys(colorsDark).reduce((acc, key) => {
  acc[key as ColorKey] = {
    value: {
      base: colorsLight[key as ColorKey],
      _dark: colorsDark[key as ColorKey],
    },
  };
  return acc;
}, {} as Record<ColorKey, { value: { base: string; _dark: string } }>);

const semanticTokens = defineSemanticTokens({
  colors: {
    ...colors,
    text1: {
      value: {
        base: 'black',
        _dark: 'white',
      },
    },
  },
});

export default semanticTokens;
export { colorsDark, colorsLight };
