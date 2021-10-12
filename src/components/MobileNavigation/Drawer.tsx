import { defaultSpringAnimation } from '@/constants/animation';
import { navigationData } from '@/constants/navigation';
import { PATHS } from '@/constants/paths';
import { css } from '@/stitches.config';
import { ReactComponent as CloseIcon } from '@assets/svg/close-icon.svg';
import { motion } from 'framer-motion';
import NextLink from 'next/link';
import { buttonReset } from '../primitives/button';
import { linkFocus } from '../primitives/link';
import { Stack } from '../primitives/Stack';
import { text } from '../primitives/Text';

const drawerContainerVariants = {
  open: {
    x: '0%',
    transition: {
      ...defaultSpringAnimation,
    },
  },
  closed: {
    x: '100%',
    transition: {
      ...defaultSpringAnimation,
    },
  },
};

const container = css({
  minHeight: '$screenH',
  zIndex: 2,
  left: 0,
  top: 0,
  position: 'fixed',
  '&:focus': {
    outline: 'none',
  },
});
const wrapper = css({
  width: '$screenW',
  height: 'var(--vh)',
  backgroundColor: '$surface2',
  position: 'relative',
  d: 'flex',
  flexDirection: 'column',
});
const closeButton = css(buttonReset, linkFocus, {
  height: 24,
  justifySelf: 'end',
  '> svg > *': {
    fill: '$surface1',
  },
});

const controls = css({
  d: 'grid',
  py: '$3',
  px: '$2',
  jc: 'space-between',
  width: '$full',
  gtc: '1fr',
  position: 'relative',
  '&:after': {
    position: 'absolute',
    right: 'var(--space-2)',
    bottom: 0,
    content: "''",
    width: 'calc($full - (var(--space-2) * 2))',
    height: 1,
    backgroundColor: '$surface1',
  },
});

const listItem = css(text, {
  ta: 'right',
});

interface DrawerProps {
  isOpen: boolean;
  closeFn: () => void;
}
export function Drawer({ isOpen, closeFn }: DrawerProps): JSX.Element {
  return (
    <motion.div
      data-drawer
      className={container()}
      tabIndex={-1}
      variants={drawerContainerVariants}
      animate={isOpen ? 'open' : 'closed'}
      initial='closed'
    >
      <div className={wrapper()}>
        <div className={controls()}>
          <button className={closeButton()} onClick={closeFn}>
            <CloseIcon width='24px' />
          </button>
        </div>
        <div
          className={css({
            d: 'flex',
            ai: 'center',
            height: '$full',
            jc: 'flex-end',
            flex: 1,
          })()}
        >
          <Stack gap='2' as='ul' css={{ px: '$2' }}>
            <li className={listItem({ size: '3' })}>
              <NextLink passHref href={PATHS.home}>
                <a
                  onClick={closeFn}
                  className={text({ css: { color: '$text4' } })}
                >
                  home
                </a>
              </NextLink>
            </li>
            {navigationData.map(({ label, path }) => (
              <li key={label} className={listItem({ size: '3' })}>
                <NextLink passHref href={path}>
                  <a
                    onClick={closeFn}
                    className={text({ css: { color: '$text4' } })}
                  >
                    {label}
                  </a>
                </NextLink>
              </li>
            ))}
          </Stack>
        </div>
        <div
          className={css({
            d: 'flex',
            jc: 'center',
            ai: 'center',
            flexDirection: 'column',
            position: 'relative',
            py: '$3',
            '&:before': {
              position: 'absolute',
              right: 'var(--space-2)',
              top: 0,
              content: "''",
              width: 'calc($full - (var(--space-2) * 2))',
              height: 1,
              backgroundColor: '$text3',
            },
          })()}
        >
          <h1
            className={text({
              size: '1',
              css: { color: '$text3', ta: 'center' },
            })}
          >
            CONTACT
          </h1>
          <div
            className={css({
              height: '16px',
              width: '1px',
              backgroundColor: '$text3',
              my: '$1',
            })()}
          />
          <a
            href={PATHS.email}
            className={text({
              size: '1',
              css: { color: '$text3', ta: 'center' },
            })}
          >
            jenningsdhunter@gmail.com
          </a>
        </div>
      </div>
    </motion.div>
  );
}
