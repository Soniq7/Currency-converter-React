import { useState, useEffect } from 'react';
import { StyledClock } from './styled';

const formatDate = (date) => 
    date.toLocaleString(undefined, {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  });

export const Clock = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(() => new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <StyledClock>
      Today is {formatDate(date)}
    </StyledClock>
  );
};
