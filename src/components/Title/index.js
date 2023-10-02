import React from 'react';
import { Container, TitleWrapper } from './styles';

function Title({title, position}) {
  return (
    <Container>
        <p>{position}</p>
        <TitleWrapper>
            <h1>{title}</h1>
            <div className='line' />
        </TitleWrapper>
    </Container>
  );
}

export default Title;