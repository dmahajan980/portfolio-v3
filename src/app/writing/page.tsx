import { Metadata } from 'next';
import Link from 'next/link';

import { BackToLink } from '@core/app/_components';

import {
  addYearToPosts,
  groupDatesByYear,
  parseDateToString,
} from '@core/app/_utils';

import { paths as PATHS } from '@core/app/_config';
import { allPosts } from '@content';

import s from './writing.module.css';
import { css, cx } from '@foundation/css';
import { flex, linkBox, linkOverlay, stack } from '@foundation/patterns';

const title = 'Writing';
const description =
  'Thoughts on software, books, life, and any opinions I have at a moment in time.';
const url = new URL(`${PATHS.base}${PATHS.writing}`);

export const metadata: Metadata = {
  title,
  description,
  robots: 'follow, index',
  openGraph: {
    url,
    type: 'website',
    locale: 'en_US',
    title,
    description,
  },
};

const WritingPage = () => {
  const featuredWritings = allPosts.filter(({ featured }) => {
    return featured;
  });
  const hasWritings = allPosts.length > 0;
  const hasFeaturedWritings = allPosts.some((writing) => writing.featured);
  const groupedWritings = groupDatesByYear(addYearToPosts(allPosts));

  return (
    <div className={css({ w: 'full' })}>
      <div className={stack({ gap: 'xl', align: 'flex-start' })}>
        <div>
          <BackToLink href={PATHS.home}>Back to home</BackToLink>
          <h1 className={css({ textStyle: 'heading' })}>Writing</h1>
        </div>
        {hasFeaturedWritings ? (
          <div className={stack({ gap: 'm' })}>
            <h2
              className={css({
                textStyle: 'base',
                fontSize: '2',
                lineHeight: 'tight',
              })}
            >
              Featured
            </h2>
            <ul className={stack({ gap: 's' })}>
              {featuredWritings.map(({ slug, title, description }) => {
                return (
                  <li key={slug}>
                    <div
                      className={linkBox({
                        p: 's',
                        rounded: 'card',
                        bgColor: 'slate3',
                      })}
                    >
                      <Link
                        className={linkOverlay()}
                        href={`${PATHS.writing}/[slug]`}
                        as={`${PATHS.writing}/${slug}`}
                      >
                        <p
                          className={css({
                            textStyle: 'base',
                            fontSize: '1',
                            display: 'inline-block',
                          })}
                        >
                          {title}
                        </p>
                      </Link>
                      <p
                        className={css({
                          pt: '3xs',
                          textStyle: 'base',
                          fontSize: '1',
                          color: 'text2',
                        })}
                      >
                        {description}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        ) : null}
        {hasWritings ? (
          <div className={stack({ gap: 'm', w: 'full' })}>
            <h2
              className={css({
                textStyle: 'base',
                fontSize: '2',
                lineHeight: 'tight',
              })}
            >
              All Writing
            </h2>
            <ul className={stack({ gap: 'm' })}>
              {groupedWritings.map(({ year, posts }) => {
                posts.map(({}) => null);
                return (
                  <li className={css({ pos: 'relative' })} key={year}>
                    <h3
                      className={cx(
                        css({
                          fontSize: '1',
                          color: 'text2',
                          mb: 'xs',
                          transform: 'translateX(%0)',
                          left: '-l',
                        }),
                        s.yearTitle
                      )}
                    >
                      {year}
                    </h3>
                    <ul className={stack({ gap: 'xs' })}>
                      {posts.map(({ slug, title, date }) => {
                        return (
                          <li key={slug}>
                            <div className={linkBox()}>
                              <div
                                className={flex({
                                  direction: 'row',
                                  align: 'baseline',
                                  justify: 'space-between',
                                  gap: 's',
                                })}
                              >
                                <Link
                                  className={linkOverlay()}
                                  href={`${PATHS.writing}/${slug}`}
                                >
                                  <p
                                    className={css({
                                      textStyle: 'base',
                                      fontSize: '1',
                                    })}
                                  >
                                    {title}
                                  </p>
                                </Link>
                                <p
                                  className={css({
                                    textStyle: 'base',
                                    fontSize: '1',
                                    color: 'text2',
                                    display: 'none',
                                    bp2: {
                                      display: 'block',
                                    },
                                  })}
                                >
                                  {parseDateToString(date)}
                                </p>
                              </div>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </li>
                );
              })}
            </ul>
          </div>
        ) : (
          <p className={css({ textStyle: 'base' })}>
            No writings to display (yet!).
          </p>
        )}
      </div>
    </div>
  );
};

export default WritingPage;
