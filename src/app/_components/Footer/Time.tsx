'use client';

import { useEffect, useState } from 'react';

import { author } from '@core/app/_config';

import { css } from '@foundation/css';

const Time = () => {
  const now = new Date().getTime();

  const [currentTime, setTime] = useState(() => {
    return {
      pretty: formatPretty(now),
      twentyFour: formatTwentyFour(now),
    };
  });

  useEffect(() => {
    const tick = setInterval(() => {
      const now = new Date().getTime();
      setTime({ pretty: formatPretty(now), twentyFour: formatTwentyFour(now) });
    }, 1000);

    return () => clearInterval(tick);
  }, []);

  return (
    <time
      className={css({ textStyle: 'base', lineHeight: 'tight', fontSize: '1' })}
      dateTime={currentTime.twentyFour}
    >
      {currentTime.pretty}
    </time>
  );
};

const formatPretty = (date: number) => {
  return formatter.format(date);
};
const formatTwentyFour = (date: number) => {
  return formatterTwentyFour.format(date);
};

const formatter = new Intl.DateTimeFormat('en', {
  timeZone: author.timezone,
  timeStyle: 'short',
});

const formatterTwentyFour = new Intl.DateTimeFormat('en', {
  timeZone: author.timezone,
  timeStyle: 'short',
  hour12: false,
});

export default Time;
