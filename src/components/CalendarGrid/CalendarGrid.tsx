import { CalendarTable, Cell, StyledCalendarGrid, Times } from './CalendarGrid.styled';

const arr = new Array(168).fill(null);
const times: number[] = [];
for (let i = 0; i < 24; i++) {
  times.push(i);
}

const onClick = (props: { i: number }) => {
  console.log(props.i)
}
export const CalendarGrid = () => {
  return (
    <StyledCalendarGrid>
      <Times>
        {times.map((t) => {
          return (
            <div>{t + ':00'}</div>
          )
        })}
      </Times>
      <CalendarTable>
        {arr.map((a, i) => {
          return (
            <div key={i}>
              {/*{i}*/}
              <Cell onClick={() => onClick({ i })}/>
            </div>
          )
        })}
      </CalendarTable>
    </StyledCalendarGrid>
  )
};
