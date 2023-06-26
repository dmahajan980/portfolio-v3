import { css, cx } from '@foundation/css';

const inlineElementReset = css({
  fontSize: 'inherit',
  color: 'inherit',
  lineHeight: 'inherit',
});

const listItem = css({
  ml: 'none',
  mb: 'xs',
  pl: 'none',
  _lastOfType: {
    mb: 'none',
  },
  '& > ul li:first-of-type, ol li:first-of-type': {
    pt: 'xs',
  },
});

const unorderedList = css({
  listStyleType: 'disc',
  color: 'text1',
  pl: 'm',
  mb: 'm',
  '& ul': {
    pl: 'm',
  },
  '& ol, ul': {
    mb: '2xs',
  },
});

const orderedList = cx(
  unorderedList,
  css({
    listStyleType: 'decimal',
  })
);

export { inlineElementReset, listItem, orderedList, unorderedList };
