import { CalendarTable, Cell, StyledCalendarGrid, Times } from './CalendarGrid.styled';
import { useEffect, useState } from 'react';
import moment from 'moment';
import { CalendarGridProps } from './CalendarGrid.types';

const arr = new Array(168).fill(null);
const times: number[] = [];

for (let i = 0; i < 24; i++) {
  times.push(i);
}

export const CalendarGrid = ({
                               setCurrentCalendarTime,
                               currentWeekEvents,
                               selectedTime,
                               startOfWeek,
                             }: CalendarGridProps) => {
  const [cell, setCell] = useState(-1);

  useEffect(() => {
    if (!selectedTime) setCell(-1);
  }, [selectedTime])

  const handleCellClick = (i: number) => {
    setCurrentCalendarTime(i);
    setCell(i);
  };

  const eventsNum: number[] = currentWeekEvents.map((el) => {
    return moment(el).diff(startOfWeek) / 3600000;
  });

  return (
    <StyledCalendarGrid>
      <Times>
        {times.map((t, idx) => {
          return (
            <div key={idx + t}>{t.toString().padStart(2, '0') + ':00'}</div>
          )
        })}
      </Times>
      <CalendarTable>
        {arr.map((a, i) => {
          return (
            <div key={i}>
              {i}
              <Cell
                onClick={() => handleCellClick(i)}
                selected={i === cell}
                haveEvent={eventsNum.some((el) => el === i)}
              />
            </div>
          )
        })}
      </CalendarTable>
    </StyledCalendarGrid>
  )
};
