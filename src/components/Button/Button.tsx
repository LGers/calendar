import { StyledButton } from './Button.styled';
import { ButtonProps } from './Button.types';
import React from 'react';

export const Button = ({ text, onClick }: ButtonProps) => {
  const handleClick = (text: string) => {
    if (onClick) {
      onClick();
    }
  }
  return (
    <StyledButton onClick={() => handleClick(text)}>
      {text}
    </StyledButton>
  )
};
