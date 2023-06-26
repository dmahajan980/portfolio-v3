'use client';

import dynamic from 'next/dynamic';
import { LayoutGroup } from 'framer-motion';

import { ICON_SVG_COMPONENTS } from './IconComponents';

import { circle, grid } from '@foundation/patterns';

import type { Theme } from '@core/app/_types';

const IconButton = dynamic(() => import('./IconButton'), {
  ssr: false,
  loading: () => <div className={circle({ size: 20, bgColor: 'slate5' })} />,
});

const ThemeToggle = () => {
  return (
    <div
      className={grid({
        gap: '5px',
        gridTemplateColumns: 'repeat(3, 20px)',
        justifyContent: 'center',
        alignItems: 'center',
        rounded: 'pill',
        bgColor: 'slate3',
        h: 30,
        w: 90,
      })}
    >
      <LayoutGroup>
        {Object.keys(ICON_SVG_COMPONENTS).map((key) => (
          <IconButton key={key} icon={key as Theme} />
        ))}
      </LayoutGroup>
    </div>
  );
};

export default ThemeToggle;
