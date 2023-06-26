import Link from 'next/link';

import { NotFoundContent } from '@core/app/_components';

import { paths as PATHS } from '@core/app/_config';

import { link } from '@foundation/recipes';
import { css, cx } from '@foundation/css';

export default function NotFound() {
  return (
    <NotFoundContent title='Writing Page Not Found'>
      <Link
        href={PATHS.writing}
        className={cx(
          link({ color: 'accent' }),
          css({ fontSize: { base: '1', bp2: '2' } })
        )}
      >
        View all writings
      </Link>
    </NotFoundContent>
  );
}
