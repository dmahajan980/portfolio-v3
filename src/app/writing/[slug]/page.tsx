import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import {
  GiscusComments,
  ProseLayout,
  ProseLayoutContent,
  ProseLayoutHeader,
  Separator,
} from '@core/app/_components';
import { SlugPageMDX } from './slug-page-mdx';

import { allPosts } from '@content';
import { paths as PATHS } from '@core/app/_config';
import { parseDateToString } from '@core/app/_utils';

import { css } from '@foundation/css';
import { hstack, stack } from '@foundation/patterns';

export const generateStaticParams = () => {
  return allPosts.map((post) => ({ slug: post.slug }));
};

export const generateMetadata = ({
  params,
}: {
  params: { slug: string };
}): Metadata => {
  const writing = allPosts.find((writing) => writing.slug === params.slug);

  if (!writing) {
    return {};
  }

  const { title, description, date } = writing;

  const url = new URL(`${PATHS.base}${PATHS.writing}/${writing.slug}`);

  return {
    title,
    description,
    openGraph: {
      url,
      type: 'article',
      authors: [PATHS.twitter],
      locale: 'en_US',
      title,
      description,
      publishedTime: date,
    },
  };
};

const Writing = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post.slug === params.slug);

  if (!post) {
    return notFound();
  }

  const { title, description, date, body, readingTime } = post;

  return (
    <ProseLayout>
      <ProseLayoutHeader
        backTo={{
          hasLink: true,
          content: 'Back to writing',
          href: PATHS.writing,
        }}
        headline={title}
        description={description}
      >
        <div
          className={hstack({
            gap: 'xl',
          })}
        >
          <div className={stack({ gap: '3xs' })}>
            <span className={css({ fontSize: '1', color: 'text2' })}>
              Published
            </span>
            <span className={css({ fontSize: '1' })}>
              {parseDateToString(date)}
            </span>
          </div>
          <div className={stack({ gap: '3xs' })}>
            <span className={css({ fontSize: '1', color: 'text2' })}>
              Reading Time
            </span>
            <span className={css({ fontSize: '1' })}>{readingTime}</span>
          </div>
        </div>
      </ProseLayoutHeader>
      <ProseLayoutContent>
        <SlugPageMDX code={body.code} />
        <div>
          <Separator />
          <div>
            <GiscusComments />
          </div>
        </div>
      </ProseLayoutContent>
    </ProseLayout>
  );
};

export default Writing;
