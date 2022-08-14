import { StyledFooter } from './Footer.styled';
import { Button } from '../Button';

export const Footer = () => {
  return (
    <StyledFooter>
      <Button text={'Today'} />
      <Button text={'Delete'} />
    </StyledFooter>
  )
};
