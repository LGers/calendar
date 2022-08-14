import {
  StyledCalendarSelect,
  WeekDayDates,
  WeekDayNames,
  WeekSelect
} from './CalendarSelect.styled';
import { Button } from '../Button';

const weekDayNames = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
const weekDays = ['21', '22', '23', '24', '25', '26', '27'];

export const CalendarSelect = () => {
  return (
    <StyledCalendarSelect>
      <WeekDayNames>
        {weekDayNames.map((day) => {
          return <div>{day}</div>
        })}
      </WeekDayNames>
      <WeekDayDates>
        {weekDays.map((day) => {
          return <div>{day}</div>
        })}
      </WeekDayDates>
      <WeekSelect>
          <Button text={'<'} />
        <div>August 2022</div>
        <Button text={'>'} />
      </WeekSelect>
    </StyledCalendarSelect>
  )
};
