const title = ` Portfolio | Hunter Jennings`;
const description =
  'Hunter Jennings is a Frontend Developer based in Washington, DC';

const SEO = {
  title,
  description,
  canonical: process.env.NEXT_PUBLIC_URL,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: process.env.NEXT_PUBLIC_URL,
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_URL}/images/social-banner.jpg`,
      },
    ],
    title,
    description,
  },
  twitter: {
    handle: '@jennings_hunter',
    site: '@jennings_hunter',
    cardType: 'summary_large_image',
  },
};

export default SEO;
