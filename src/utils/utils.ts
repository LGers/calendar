import moment from "moment";

export const getCurrentWeekDays = (date: Date): number[] => {
  const currentDay = date.getDay();
  const week = [];
  for (let i = 0; i < 7; i++) {
    week.push(+moment(date).add(i - currentDay + 1, 'day').format('DD'));
  }
  return week;
};

export const padToTwo = (num: number) => {
  return num.toString().padStart(2, '0');
}

export const formatDate = (date: Date) => {
  return (
    [
      date.getFullYear(),
      padToTwo(date.getMonth() + 1),
      padToTwo(date.getDate()),
    ].join('-') +
    ' ' +
    [
      padToTwo(date.getHours()),
      padToTwo(date.getMinutes()),
      padToTwo(date.getSeconds()),
    ].join(':')
  );
}

const oneSecond = 1000;
const oneMinute = 60 * oneSecond;
const oneHour = 60 * oneMinute;
const oneDay = 24 * oneHour;
const oneWeek = 7 * oneDay;

export const increaseOneWeek = (date: Date): Date => {
  date.setDate(date.getDate() + 7);
  return date;
};

export const decreaseOneWeek = (date: Date): Date => {
  date.setDate(date.getDate() - 7);
  return date;
};

const formatDateToYMDH = (date: string) => {
  return moment(date).format('YYYY:MM:DD HH')
}

export const hasEvent = (events: string[], selectedTime: string) => {
  const selectedTimeFormat = formatDateToYMDH(selectedTime);
  return events.some((el) => formatDateToYMDH(el) === selectedTimeFormat);
};

export const formatDateToISO = (date: string) => {
  const splitDate = date.split(' ');
  const YMD = splitDate[0].split(':');
  const yearDateMonth = `${YMD[0]}-${YMD[1]}-${YMD[2]}`
  return yearDateMonth + 'T' + splitDate[1] + '+03:00';
};

export const getCurrenWeekEvents = (calendarEvens: string[], currentDate: string) => {
  const startDate = moment(currentDate).startOf('isoWeek').format();
  const endDate = moment(currentDate).endOf('isoWeek').format();
  return calendarEvens.filter((day) => {
    return moment(day) >= moment(startDate) && moment(day) < moment(endDate)
  });
}
