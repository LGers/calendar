import { StyledFooter } from './Footer.styled';
import { Button } from '../Button';
import { hasEvent } from '../../utils';
import { FooterProps } from './Footer.types';

export const Footer = ({ currentWeekEvents, selectedTime, deleteEvent, setWeek }: FooterProps) => {
  return (
    <StyledFooter>
      <Button text={'Today'} onClick={setWeek}/>
      {hasEvent(currentWeekEvents, selectedTime) &&
      <Button
        text={'Delete'}
        onClick={deleteEvent}
      />}
    </StyledFooter>
  )
};
