import { CalendarTable, Cell, StyledCalendarGrid, Times } from './CalendarGrid.styled';

export interface CalendarGridProps {
  setCurrentCalendarTime: (i: number) => void;
}

const arr = new Array(168).fill(null);
const times: number[] = [];

for (let i = 0; i < 24; i++) {
  times.push(i);
}

export const CalendarGrid = ({ setCurrentCalendarTime }: CalendarGridProps) => {
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
              <Cell onClick={() => setCurrentCalendarTime(i)}/>
            </div>
          )
        })}
      </CalendarTable>
    </StyledCalendarGrid>
  )
};
