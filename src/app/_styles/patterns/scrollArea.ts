import { css } from '@foundation/css';
import { flex } from '@foundation/patterns';

export const SCROLLBAR_SIZE = 10;

export const rootStyles = css({
  h: 'full',
  w: 'full',
  overflow: 'hidden',
});

export const viewportStyles = css({
  h: 'full',
  w: 'full',
  borderRadius: 'inherit',
});

export const barStyles = flex({
  bgColor: 'uiBg',
  userSelect: 'none',
  touchAction: 'none',
  p: 2,
  h: SCROLLBAR_SIZE,
  transition: 'background-color 160ms ease-out',
  '&[data-orientation="horizontal"]': {
    flexDirection: 'column',
  },
  _hover: {
    bgColor: 'slate4',
  },
});

export const thumbStyles = css({
  backgroundColor: 'surface2',
  pos: 'relative',
  flex: '1',
  borderRadius: SCROLLBAR_SIZE,
  _before: {
    content: '',
    pos: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    w: '100%',
    h: '100%',
    minW: 44,
    minH: 44,
  },
});
