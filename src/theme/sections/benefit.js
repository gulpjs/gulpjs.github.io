import React from 'react';
import styled from 'styled-components';

const BenefitContainer = styled.div`
  background: var(--light-gray);
  box-shadow: 1px 2px 5px 1px #ddd;
  padding: var(--medium);

  @media(min-width: 768px) {
    min-height: 52vh;
    // transition: box-shadow .2s ease-in;

    // &:hover {
    //   box-shadow: 4px 5px 7px 3px #ddd;
    //   transition: box-shadow .2s ease-in;
    // }
  }
`

const Heading = styled.div`
  display: flex;

  img {
    margin-right: var(--tiny);
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