import { getOGImage } from '@core/app/_utils';

export const runtime = 'edge';
export const alt =
  'Writing - Thoughts on software, books, life, and any opinions I have at a moment in time.';

export default async function Image() {
  return await getOGImage({
    title: 'Writing',
    sub: 'Thoughts on software, books, life, and any opinions I have at a moment in time.',
  });
}
