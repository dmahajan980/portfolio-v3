import { MoonIcon, SunIcon, SystemIcon } from '@core/app/_components';

import type { Theme } from '@core/app/_types';

export const ICON_SVG_COMPONENTS: Record<
  Theme,
  { label: string; icon: () => JSX.Element }
> = {
  dark: {
    label: 'dark theme',
    icon: () => <MoonIcon />,
  },
  system: {
    label: 'system theme',
    icon: () => <SystemIcon />,
  },
  light: {
    label: 'light theme',
    icon: () => <SunIcon />,
  },
};
