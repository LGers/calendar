import { StyledMain } from './Main.styled';
import { CalendarHeader } from '../CalendarHeader';
import { CalendarGrid } from '../CalendarGrid';
import { MainProps } from './Main.types';

export const Main =
  ({
     setWeek,
     setCurrentCalendarTime,
     currentWeekEvents,
     selectedTime,
     startOfWeek
   }: MainProps) => {
    return (
      <StyledMain>
        <CalendarHeader
          setWeek={setWeek}
          startOfWeek={startOfWeek}
        />
        <CalendarGrid
          setCurrentCalendarTime={setCurrentCalendarTime}
          currentWeekEvents={currentWeekEvents}
          selectedTime={selectedTime}
          startOfWeek={startOfWeek}
        />
    </StyledMain>
  )
};
