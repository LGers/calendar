import moment from 'moment';

export const getWeekDates = (startOfWeek: string): number[] => {
  const weekDates: number[] = [];
  for ( let i = 0; i < 7; i++) {
    weekDates.push(+moment(startOfWeek).add(i, 'day').format('DD'));
  }
  return weekDates;
}
