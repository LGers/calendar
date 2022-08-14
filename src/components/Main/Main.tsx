import { StyledMain } from './Main.styled';
import { CalendarSelect } from '../CalendarSelect';
import { CalendarGrid } from '../CalendarGrid';

export const Main = () => {
  return (
    <StyledMain>
      <CalendarSelect />
      <CalendarGrid />
    </StyledMain>
  )
};
