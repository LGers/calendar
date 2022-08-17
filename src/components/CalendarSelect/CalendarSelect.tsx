import {
  StyledCalendarSelect,
  WeekDayDates,
  WeekDayNames,
  WeekSelect
} from './CalendarSelect.styled';
import { Button } from '../Button';

export interface CalendarSelectProps {
  week: number[];
  setWeek: (text: string) => void;
}

const weekDayNames = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

export const CalendarSelect = ({ week, setWeek }: CalendarSelectProps) => {
  return (
    <StyledCalendarSelect>
      <WeekDayNames>
        {weekDayNames.map((day, idx) => {
          return <div key={idx + day}>{day}</div>
        })}
      </WeekDayNames>
      <WeekDayDates>
        {week.map((day, idx) => {
          return <div key={idx + day}>{day}</div>
        })}
      </WeekDayDates>
      <WeekSelect>
        <Button text={'<'} onClick={() => setWeek('prev')} />
        <div>August 2022</div>
        <Button text={'>'} onClick={() => setWeek('next')} />
      </WeekSelect>
    </StyledCalendarSelect>
  )
};
