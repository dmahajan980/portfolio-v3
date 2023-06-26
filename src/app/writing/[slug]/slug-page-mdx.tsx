'use client';

import Image, { ImageProps } from 'next/image';
import { getMDXComponent } from 'next-contentlayer/hooks';
import { AspectRatio, AspectRatioProps } from '@radix-ui/react-aspect-ratio';
import { MDXComponents } from 'mdx/types';

import { ImageContainer } from '@core/app/_components';

import { mdxElements as MDX_ELEMENTS } from '@core/app/_config';

interface Props {
  code: string;
}

// TODO: #144 temporary due to a bug in contentlayer where it doesn't allow for custom components to render in rsc
export const SlugPageMDX = ({ code }: Props) => {
  const MDXContent = getMDXComponent(code);

  return <MDXContent components={{ ...MDX_ELEMENTS, ...MDX_COMPONENTS }} />;
};

const MDX_COMPONENTS: MDXComponents = {
  AspectRatio: (
    props: AspectRatioProps & React.RefAttributes<HTMLDivElement>
  ) => <AspectRatio {...props} />,
  Image: (props: ImageProps) => <Image {...props} />,
  ImageContainer,
};
