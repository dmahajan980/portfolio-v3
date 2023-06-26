import { ReactNode } from 'react';
import Balancer from 'react-wrap-balancer';

import BackToLink from './BackToLink';

import { css } from '@foundation/css';
import { stack, grid } from '@foundation/patterns';

const ProseLayout = ({ children }: { children: ReactNode }) => {
  return (
    <article
      className={grid({
        gap: 'xl',
        h: 'min-content',
        alignItems: 'start',
        w: 'full',
        columns: 1,
      })}
    >
      {children}
    </article>
  );
};

const ProseLayoutContent = ({ children }: { children: ReactNode }) => {
  return <div className={css({ overflow: 'hidden' })}>{children}</div>;
};

interface ProseLayoutHeaderProps {
  backTo:
    | {
        hasLink: true;
        href: string;
        content: string;
      }
    | {
        hasLink: false;
      };
  children?: ReactNode;
  headline?: string;
  description?: string | null;
}

const ProseLayoutHeader = ({
  backTo = { hasLink: false },
  children,
  description,
  headline,
}: ProseLayoutHeaderProps) => {
  return (
    <div
      className={css({
        pb: 'xl',
        borderBottom: '1px dashed',
        borderColor: 'slate8',
        w: 'full',
      })}
    >
      <div>
        {backTo.hasLink ? (
          <BackToLink href={backTo.href}>{backTo.content}</BackToLink>
        ) : null}
        <div className={stack({ gap: 'm' })}>
          {headline != null && (
            <h1 className={css({ textStyle: 'heading' })}>
              <Balancer>{headline}</Balancer>
            </h1>
          )}
          {description != null && (
            <p
              className={css({
                textStyle: 'base',
                fontSize: '1',
                lineHeight: 'body',
                maxWidth: '50ch',
              })}
            >
              {description}
            </p>
          )}
          {children}
        </div>
      </div>
    </div>
  );
};

export default ProseLayout;
export { ProseLayoutContent, ProseLayoutHeader };
