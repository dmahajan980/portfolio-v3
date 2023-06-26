import localFont from 'next/font/local';

const basierCircleFont = localFont({
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'sans-serif'],
  variable: '--font-sans',
  src: [
    {
      path: '../_assets/fonts/basiercircle-regular-webfont.woff2',
      weight: '400',
    },
    {
      path: '../_assets/fonts/basiercircle-bold-webfont.woff2',
      weight: '700',
    },
  ],
});

const untitledSerifFont = localFont({
  display: 'swap',
  preload: false,
  fallback: ['serif'],
  variable: '--font-serif',
  src: [
    {
      path: '../_assets/fonts/untitled-serif-regular-italic.woff2',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../_assets/fonts/untitled-serif-bold-italic.woff2',
      weight: '700',
      style: 'italic',
    },
  ],
});

const jetbrainsMonoFont = localFont({
  display: 'swap',
  preload: false,
  fallback: ['monospace'],
  variable: '--font-mono',
  src: [
    {
      path: '../_assets/fonts/jetbrainsmono-regular.woff2',
      weight: '400',
    },
  ],
});

export { basierCircleFont, jetbrainsMonoFont, untitledSerifFont };
