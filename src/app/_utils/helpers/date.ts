import { compareDesc, format, parseISO } from 'date-fns';

import { Post } from '@content';

export const getYearFromDate = (date: string): string => {
  return new Date(date).getFullYear().toString();
};
export const parseDateToString = (date: string): string => {
  return format(parseISO(date), 'yyyy-MM-dd');
};
export const parseDateToLongDateString = (date: string): string => {
  return format(parseISO(date), 'LLLL dd, yyyy ');
};

export const sortArrayByDateDesc = <TArray extends { date: string }[]>(
  arr: TArray
) => {
  if (!Array.isArray(arr)) return [];

  return [...arr].sort(({ date: a }, { date: b }) =>
    compareDesc(new Date(a), new Date(b))
  );
};

type Posts = (Post & { year: string })[];
export const groupDatesByYear = (posts: Posts) => {
  return Object.entries(
    posts.reduce((result, value) => {
      if (result[value.year] === undefined) {
        result[value.year] = [];
      }

      result[value.year]?.push(value);

      return result;
    }, {} as Record<string, Posts>)
  )
    .map(([key, value]) => ({
      year: key,
      posts: value,
    }))
    .reverse();
};

export const addYearToPosts = (posts: Post[]) => {
  return posts.map((writing) => {
    return {
      ...writing,
      year: getYearFromDate(writing.date),
    };
  });
};
