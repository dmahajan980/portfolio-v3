import Link from 'next/link';

import { paths as PATHS } from '@core/app/_config';

import { css, cx } from '@foundation/css';
import { flex } from '@foundation/patterns';
import { link } from '@foundation/recipes';

import ThemeToggle from './ThemeToggle';

const Navigation = () => {
  return (
    <nav
      className={css({
        gridArea: 'nav',
        pt: { base: 'm', bp1: 'xl' },
        pb: '2xl',
      })}
    >
      <div
        className={flex({
          w: 'full',
          justify: 'space-between',
          align: 'center',
        })}
      >
        <Link
          href={PATHS.home}
          aria-label='logo link'
          className={cx(
            link({ color: 'primary' }),
            css({ display: 'inline-block', userSelect: 'none' })
          )}
        >
          <span
            className={css({
              textStyle: 'base',
              fontSize: '1',
              lineHeight: 'tight',
            })}
            role='presentation'
          >
            D—M
          </span>
        </Link>
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navigation;
