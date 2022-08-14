import { StyledHeader } from './Header.styled';
import { Button } from '../Button';

export const Header = () => {
  return (
    <StyledHeader>
      <h1>Interview calendar</h1>
      <Button text={'+'} />
    </StyledHeader>
  )
};
