import { days } from '../utils/days';
import { months } from '../utils/months';

export const getDay = (timestamp: string) => {
  const dayInt = new Date(timestamp).getDay();
  const day = days[dayInt];
  return day;
};

export const getMonth = (timestamp: string) => {
  const monthInt = new Date(timestamp).getMonth();
  const month = months[monthInt];
  return month;
};

export const getDate = (timestamp: string) => {
  let output: string = '';
  const date = new Date(timestamp).getDate();

  output += String(date);

  if (date > 3 && date < 21) {
    return (output += 'th');
  }

  switch (date % 10) {
    case 1:
      return (output += 'st');
    case 2:
      return (output += 'nd');
    case 3:
      return (output += 'rd');
    default:
      return (output += 'th');
  }
};
