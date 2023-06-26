import { forwardRef } from 'react';

import type { Props } from './types';

const MoonIcon = forwardRef<SVGSVGElement, Props>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width='15'
        height='15'
        viewBox='0 0 15 15'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        {...props}
        ref={forwardedRef}
      >
        <title>Dark Theme Icon</title>
        <path
          d='M12.97 9.97a6 6 0 0 1-7.94-7.94 6 6 0 1 0 7.94 7.94Z'
          fill={color}
        />
      </svg>
    );
  }
);

MoonIcon.displayName = 'MoonIcon';

export default MoonIcon;
