import { StyledButton } from './Button.styled';
import { ButtonProps } from './Button.types';
import React from 'react';

export const Button = ({ text }: ButtonProps) => {
  return (
    <StyledButton>
      {text}
    </StyledButton>
  )
};
