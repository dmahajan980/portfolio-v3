import { ReactNode, Suspense } from 'react';
import Link from 'next/link';

import {
  ArrowRightIcon,
  ScrollAreaRoot,
  ScrollAreaScrollbar,
  ScrollAreaThumb,
  ScrollAreaViewport,
  VisuallyHiddenRoot,
} from '@core/app/_components';

import {
  parseDateToLongDateString,
  sortArrayByDateDesc,
} from '@core/app/_utils';

import { paths as PATHS, author } from '@core/app/_config';
import { allPosts } from '@content';

import { flex, grid, hstack, stack } from '@foundation/patterns';
import { css, cx } from '@foundation/css';
import { link } from '@foundation/recipes';
import { token } from '@foundation/tokens';
import {
  barStyles,
  rootStyles,
  thumbStyles,
  viewportStyles,
} from '@core/app/_styles/patterns';

// import { getProjects } from './_utils/helpers/projects.helpers';
// import { ProjectCard, ProjectCardLoadingUI } from './_components/project-card';
import {} from './_components/ScrollArea';

export default function Home() {
  return (
    <div>
      <VisuallyHiddenRoot>
        <h1>Home</h1>
      </VisuallyHiddenRoot>
      <div className={stack({ gap: '3xl' })}>
        <IntroductionSection />
        <WorkSection>
          {/* <Suspense fallback={<ProjectGridLoadingUI />}> */}
          {/* TODO: add fallback */}
          {/* @ts-expect-error - Async Server Component */}
          {/* <ProjectGrid /> */}
          {/* </Suspense> */}
        </WorkSection>
        <WritingsSection />
        <ConnectSection />
      </div>
    </div>
  );
}

const IntroductionSection = () => {
  return (
    <section className={stack({ gap: 'xl' })}>
      <div className={stack({ gap: 'm' })}>
        <h2
          className={css({
            textStyle: 'serif',
            lineHeight: 'tight',
          })}
          aria-label={`Who is ${author.name}`}
        >
          {author.name}
        </h2>
        <p className={css({ textStyle: 'base' })}>{author.longDescription}</p>
      </div>
      <div className={stack({ gap: 'xs' })}>
        <h2
          className={css({ textStyle: 'base', color: 'text2', fontSize: '1' })}
          aria-label="What I'm up to now"
        >
          Now
        </h2>
        <p className={css({ textStyle: 'base' })}>
          Currently working as {author.jobTitle} in the{' '}
          <Link
            className={link({ underline: true, color: 'accent' })}
            href={author.teamUrl}
            target='_blank'
          >
            {author.team}
          </Link>{' '}
          team at{' '}
          <Link
            className={link({ underline: true, color: 'accent' })}
            href={author.companyUrl}
            target='_blank'
          >
            {author.company}
          </Link>
          .
        </p>
      </div>
    </section>
  );
};

const WorkSection = ({ children }: { children?: ReactNode }) => {
  return (
    <section className={stack({ gap: 's' })}>
      <div className={flex({ justify: 'space-between', align: 'center' })}>
        <h2 className={css({ textStyle: 'base', lineHeight: 'tight' })}>
          Selected work
        </h2>
        <ArrowLink href={PATHS.work}>view all</ArrowLink>
      </div>
      {children}
    </section>
  );
};

// const ProjectGrid = async () => {
//   const { projects } = await getProjects(3);

//   return (
//     <ScrollAreaRoot className={rootStyles}>
//       <ScrollAreaScrollbar className={barStyles} orientation='horizontal'>
//         <ScrollAreaThumb className={thumbStyles} />
//       </ScrollAreaScrollbar>
//       <ScrollAreaViewport className={viewportStyles}>
//         <div
//           className={flex({
//             mb: 'l',
//             wrap: 'nowrap',
//             direction: 'row',
//           })}
//         >
//           {projects.map((project) => {
//             return (
//               <div key={project.id} className={cardWrapper}>
//                 <ProjectCard
//                   project={project}
//                   sizes='(max-width: 590px) 90vw, (max-width: 767px) 45vw, 220px'
//                 />
//               </div>
//             );
//           })}
//         </div>
//       </ScrollAreaViewport>
//     </ScrollAreaRoot>
//   );
// };

// const ProjectGridLoadingUI = () => {
//   return (
//     <div
//       className={flex({
//         mb: 'l',
//         wrap: 'nowrap',
//         direction: 'row',
//         overflow: 'hidden',
//       })}
//     >
//       {Array.from({ length: 3 }, (_, i) => {
//         return (
//           <div key={i} className={cardWrapper}>
//             <ProjectCardLoadingUI />
//           </div>
//         );
//       })}
//     </div>
//   );
// };

const cardWrapper = css({
  minW: { base: '90%', bp1: '45%', bp2: '220px' },
  ml: 's',
  _firstOfType: { ml: 'none' },
});

const WritingsSection = () => {
  const writings = sortArrayByDateDesc(allPosts);
  const hasWritings = writings.length > 0;

  if (!hasWritings) return null;

  return (
    <section className={stack({ gap: 'm' })}>
      <div className={flex({ justify: 'space-between', align: 'center' })}>
        <h2 className={css({ textStyle: 'base', lineHeight: 'tight' })}>
          Writing
        </h2>
        <ArrowLink href={PATHS.writing}>view all</ArrowLink>
      </div>
      <ul className={stack({ gap: 'm' })}>
        {writings.map(({ _id, slug, title, date }) => {
          return (
            <li
              className={cx(
                stack({ gap: '3xs' }),
                css({
                  pos: 'relative',
                  _after: {
                    content: '" "',
                    w: 'full',
                    h: 0,
                    borderTop: '1px dashed',
                    borderColor: 'slate8',
                    pos: 'absolute',
                    bottom: 'calc((var(--spacing-m) / 2) * -1)',
                    left: 0,
                  },
                })
              )}
              key={_id}
            >
              <div>
                <Link
                  href={`${PATHS.writing}/${slug}`}
                  className={cx(link(), css({ fontSize: '1' }))}
                >
                  {title}
                </Link>
              </div>
              <time
                className={css({
                  textStyle: 'serif',
                  fontSize: '1',
                })}
              >
                {parseDateToLongDateString(date)}
              </time>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

interface ArrowLinkProps {
  children: ReactNode;
  href: string;
}

const ArrowLink = ({ href, children }: ArrowLinkProps) => {
  return (
    <div className={hstack()}>
      <Link
        href={href}
        className={cx(
          link({
            color: 'secondary',
          }),
          css({ fontSize: '1', lineHeight: 'tight' })
        )}
        style={{ display: 'block' }}
      >
        {children}
      </Link>
      <ArrowRightIcon aria-hidden color={token('colors.slate11')} />
    </div>
  );
};

const ConnectSection = () => {
  const emailFragments = PATHS.email.split(':');
  const githubFragments = PATHS.github.split('/');
  const twitterFragments = PATHS.twitter.split('/');

  return (
    <section className={stack({ gap: 'm' })}>
      <h2 className={css({ textStyle: 'base', lineHeight: 'tight' })}>
        Connect
      </h2>
      <div className={stack({ gap: 'xl' })}>
        <p className={css({ textStyle: 'body' })}>
          I&apos;m not currently looking for new opportunities, but feel free to
          reach out if you&apos;d like. I&apos;m always happy to hear from folks
          and talk shop.
        </p>
        <ul className={stack({ gap: 's' })}>
          <ConnectLinkListItem label='Twitter'>
            <ConnectLink href={PATHS.twitter}>
              @{twitterFragments[twitterFragments.length - 1]}
            </ConnectLink>
          </ConnectLinkListItem>
          <ConnectLinkListItem label='Email'>
            <ConnectLink href={PATHS.email}>
              {emailFragments[emailFragments.length - 1]}
            </ConnectLink>
          </ConnectLinkListItem>
          <ConnectLinkListItem label='Github'>
            <ConnectLink href={PATHS.github}>
              {githubFragments[githubFragments.length - 1]}
            </ConnectLink>
          </ConnectLinkListItem>
          <ConnectLinkListItem label='Resume'>
            <ConnectLink href={PATHS.cv}>{PATHS.cv}</ConnectLink>
          </ConnectLinkListItem>
        </ul>
      </div>
    </section>
  );
};

interface ConnectLinkListItemProps {
  children: ReactNode;
  label: string;
}

const ConnectLinkListItem = ({ label, children }: ConnectLinkListItemProps) => {
  return (
    <li className={grid({ columns: 3, alignItems: 'center', gap: 's' })}>
      <h3
        className={css({
          textStyle: 'base',
          fontSize: '1',
          lineHeight: 'tight',
        })}
      >
        {label}
      </h3>
      <div style={{ gridColumn: '2 / span 2' }}>
        <div>{children}</div>
      </div>
    </li>
  );
};

interface ConnectLinkListProps {
  children: ReactNode;
  href: string;
}

const ConnectLink = ({ children, href }: ConnectLinkListProps) => {
  return (
    <Link
      className={cx(
        link({
          color: 'secondary',
        }),
        css({ display: 'inline-block', lineHeight: 'tight', fontSize: '1' })
      )}
      href={href}
      target='_blank'
    >
      {children}
    </Link>
  );
};
