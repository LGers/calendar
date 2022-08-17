import { StyledMain } from './Main.styled';
import { CalendarSelect } from '../CalendarSelect';
import { CalendarGrid } from '../CalendarGrid';

export interface Main{
  week: number[];
  setWeek: (text: string) => void;
  setCurrentCalendarTime: (i: number) => void;
}

export const Main = ({ week, setWeek,setCurrentCalendarTime }: Main) => {
  return (
    <StyledMain>
      <CalendarSelect
        week={week}
        setWeek={setWeek}
      />
      <CalendarGrid
        setCurrentCalendarTime={setCurrentCalendarTime}
      />
    </StyledMain>
  )
};
