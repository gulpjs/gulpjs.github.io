import React from 'react';
import styled from 'styled-components';

const BenefitContainer = styled.div`
  background: var(--light-gray);
  box-shadow: 1px 2px 5px 1px #ddd;
  padding: var(--big) var(--medium);

  @media(min-width: 768px) {
    min-height: 52vh;
    display: flex;
    flex-direction: column;
    justify-content: start;

    p {
      margin: var(--big) 0;
    }
  }
`

const Heading = styled.div`
  display: flex;

  img {
    margin-right: var(--tiny);
  }

  h3 {
    margin: 0;
    display: flex;
    align-self: center;
  }
`
const Benefit = (props) => {
  return (
    <BenefitContainer>
      <Heading>
        <img src={props.icon} alt={props.title} />
        <h3>{props.title}</h3>
      </Heading>
      <p>{props.text}</p>
    </BenefitContainer>
  )
}

export default Benefit;