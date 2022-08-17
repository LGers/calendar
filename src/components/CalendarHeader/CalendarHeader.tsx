import {
  Day,
  StyledCalendarSelect,
  WeekDayDates,
  WeekDayNames,
  WeekSelect
} from './CalendarHeader.styled';
import { Button } from '../Button';
import moment from 'moment';
import { getWeekDates } from './utils';
import { CalendarHeaderProps } from './CalendarHeader.types';

const weekDayNames = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

export const CalendarHeader = ({ setWeek, startOfWeek }: CalendarHeaderProps) => {
  const weekDates: number[] = getWeekDates(startOfWeek);
  const monthYear = moment(startOfWeek).format('MMMM YYYY')

  return (
    <StyledCalendarSelect>
      <WeekDayNames>
        {weekDayNames.map((day, idx) => {
          return <div key={idx + day}>{day}</div>
        })}
      </WeekDayNames>
      <WeekDayDates>
        {weekDates.map((day, idx) => {
          const today = moment().startOf('day');
          const currentDay = moment(startOfWeek).add(idx, 'day').startOf('day')
          const isToday: boolean = !today.diff(currentDay);
          return <Day isToday={isToday} key={idx + day}>{day}</Day>
        })}
      </WeekDayDates>
      <WeekSelect>
        <Button text={'<'} onClick={() => setWeek('prev')} />
        <div>{monthYear}</div>
        <Button text={'>'} onClick={() => setWeek('next')} />
      </WeekSelect>
    </StyledCalendarSelect>
  )
};
