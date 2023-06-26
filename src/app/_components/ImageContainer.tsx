'use client';

import { ReactNode } from 'react';

import { css } from '@foundation/css';
import { stack } from '@foundation/patterns';

interface Props {
  caption?: string;
  children?: ReactNode;
}

const ImageContainer = ({ caption, children }: Props) => {
  return (
    <div className={stack({ gap: 'xs', py: 'xs' })}>
      <div
        className={css({
          rounded: 'card',
          bgColor: 'slate8',
          overflow: 'hidden',
        })}
      >
        {children}
      </div>
      {caption !== null ? (
        <p className={css({ fontSize: '1', color: 'text2', pb: 'm' })}>
          {caption}
        </p>
      ) : null}
    </div>
  );
};

export default ImageContainer;
