import { Metadata } from 'next';

import { Footer, Navigation } from '@core/app/_components';
import { Providers } from './_providers';

import { paths as PATHS, author } from '@core/app/_config';

import { css } from '@foundation/css';
import './_styles/index.css';
import {
  basierCircleFont,
  jetbrainsMonoFont,
  untitledSerifFont,
} from './_styles/fonts';

// import { Footer } from './_components/footer/footer';
// import { Analytics } from '@vercel/analytics/react';
// import { Navigation } from './_components/navigation/navigation';

const title = `Portfolio | ${author.name}`;
const description = author.description;

export const metadata: Metadata = {
  metadataBase: new URL(PATHS.base),
  robots: 'follow, index',
  title: {
    template: '%s | Divyanshu Mahajan',
    default: title,
  },
  description,
  openGraph: {
    url: PATHS.base,
    type: 'website',
    locale: 'en_US',
    title,
    description,
  },
  twitter: {
    creator: '@dmahajan980',
    site: '@dmahajan980',
    card: 'summary_large_image',
  },
};

interface Props {
  children: React.ReactNode;
}

const RootLayout = ({ children }: Props) => {
  return (
    <html
      suppressHydrationWarning
      lang='en'
      className={`${basierCircleFont.variable} ${untitledSerifFont.variable} ${jetbrainsMonoFont.variable}`}
    >
      <body>
        <Providers>
          <div className={container}>
            <div className={wrapper}>
              <Navigation />
              <main className={main}>{children}</main>
              <Footer />
            </div>
          </div>
        </Providers>
        {/* <Analytics /> */}
      </body>
    </html>
  );
};

const container = css({
  alignItems: 'center',
  bgColor: 'uiBg',
  display: 'flex',
  flexDir: 'column',
  h: 'full',
  minH: 'screenH',
  px: 's',
  w: 'full',
});

const wrapper = css({
  display: 'grid',
  gridTemplateAreas: `
    'nav'
    'main'
    'footer'
  `,
  gridTemplateColumns: '1fr',
  gridTemplateRows: 'auto 1fr auto',
  h: 'full',
  maxW: 'channel',
  minH: 'screenH',
  pos: 'relative',
  w: 'full',
  zIndex: 'init',
});

const main = css({
  gridArea: 'main',
  w: 'full',
  zIndex: 1,
});

export default RootLayout;
