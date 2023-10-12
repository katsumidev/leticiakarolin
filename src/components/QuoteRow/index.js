import React from 'react';
import { Container, ContactBtn } from './styles';

function QuoteRow() {
  return (
    <Container>
        <p>“Um dia, quando olhares para trás, verás que os dias mais belos foram aqueles em que lutaste.”</p>
        <h2>Dr Sigmund Freud</h2>
        <ContactBtn>
          Agendar Consulta
        </ContactBtn>
    </Container>
  );
}

export default QuoteRow;