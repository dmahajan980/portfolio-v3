import { css } from '@foundation/css';

const blockquote = css({
  borderLeft: '4px solid',
  borderColor: 'slate10',
  borderRadius: 5,
  pl: 'm',
  py: 'xs',
  bgColor: 'slate3',
  mb: 's',
  '& > p': {
    fontSize: '1',
    color: 'text1',
  },
  '& > p:last-of-type': {
    m: 'none',
  },
});

export default blockquote;
