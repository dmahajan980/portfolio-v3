import { getOGImage } from '@core/app/_utils';
import { allPosts } from '@content';

export const runtime = 'edge';
export const alt =
  'Writing - Thoughts on software, books, life, and any opinions I have at a moment in time.';

export default async function Image({ params }: { params: { slug: string } }) {
  const post = allPosts.find((post) => post.slug === params.slug);
  const { title, description } = post!;

  return await getOGImage({
    title: title,
    sub: description,
  });
}
