import { StyledHeader } from './Header.styled';
import { Button } from '../Button';
import { HeaderProps } from './Header.types';

export const Header = ({ addEvent }: HeaderProps) => {
  const handleAddEvent = () => {
    addEvent();
  };

  return (
    <StyledHeader>
      <h1>Interview calendar</h1>
      <Button text={'+'} onClick={handleAddEvent}/>
    </StyledHeader>
  )
};
