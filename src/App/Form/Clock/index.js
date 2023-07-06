import { StyledClock } from './styled';
import { useCurrentDate } from './useCurrentDate';

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
  const date = useCurrentDate();

  return (
    <StyledClock>
      Today is {formatDate(date)}
    </StyledClock>
  );
};
