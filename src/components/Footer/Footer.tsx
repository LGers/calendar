import { StyledFooter } from './Footer.styled';
import { Button } from '../Button';
import { hasEvent } from '../../utils';
import { FooterProps } from './Footer.types';

export const Footer = ({ currentWeekEvents, selectedTime, deleteEvent }: FooterProps) => {
  return (
    <StyledFooter>
      <Button text={'Today'} />
      {hasEvent(currentWeekEvents, selectedTime) &&
      <Button
        text={'Delete'}
        onClick={deleteEvent}
      />}
    </StyledFooter>
  )
};
