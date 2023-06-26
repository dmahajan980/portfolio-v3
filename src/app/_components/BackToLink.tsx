import { ReactNode } from 'react';
import Link from 'next/link';

import { ArrowLeftIcon } from './icons';

import { css } from '@foundation/css';
import { hstack, linkBox, linkOverlay } from '@foundation/patterns';
import { token } from '@foundation/tokens';

interface Props {
  children?: ReactNode;
  href: string;
}

const BackToLink = ({ children, href }: Props) => {
  return (
    <div className={linkBox()}>
      <div
        className={hstack({
          gap: 'xs',
          mb: 'm',
        })}
      >
        <ArrowLeftIcon color={token('colors.text1')} width={15} aria-hidden />
        <Link className={linkOverlay({ display: 'flex' })} href={href}>
          <span
            className={css({ textStyle: 'base', lineHeight: 'tight' })}
            style={{ fontSize: 12 }}
          >
            {children}
          </span>
        </Link>
      </div>
    </div>
  );
};

export default BackToLink;
