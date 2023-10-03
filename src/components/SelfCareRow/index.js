import React from 'react';
import { Container, MainRow, Item } from './styles';

function SelfCareRow() {
  return (
    <Container>
        <h1>Minha estratégia para o auto-cuidado</h1>
        <div className='line' />
        <MainRow>
            <Item>
                <p>01</p>
                <h2>Pedir por ajuda quando preciso</h2>
            </Item>
            <Item>
                <p>02</p>
                <h2>Tento cultivar relacionamentos saudáveis.</h2>
            </Item>
            <Item>
                <p>03</p>
                <h2>Me exercito regularmente.</h2>
            </Item>
            <Item>
                <p>04</p>
                <h2>Passear com meus cachorrinhos</h2>
            </Item>
        </MainRow>
    </Container>
  );
}

export default SelfCareRow;