import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

const ButtonContainer = styled.button`
  background: white;
  padding: var(--tiny) var(--big);
  outline: none;
  max-width: 50%;
  cursor: pointer;

  color: var(--purple);
  border: 2px solid var(--purple);
  box-shadow: 7px 7px 0 2px var(--purple);
  transition: box-shadow .1s ease-in, transform .1s ease-in;

  &:hover {
    outline: none;
    transform: translate(2px, 10%);
    box-shadow: 6px 6px 0 0 var(--purple);
    transition: box-shadow .1s ease-in, transform .1s ease-in;
  }

  @media(min-width: 768px) {
    max-width: 100%;
  }
`

const Button = (props) => {
  return (
    <ButtonContainer>
      <span className="uppercase">{props.title}</span>
    </ButtonContainer>
  )
}

export default Button;