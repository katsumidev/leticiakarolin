import React from "react";
import {
  FullWrapper,
  Container,
  LeftWrapper,
  RightWrapper,
  Background,
  MainImg,
  SecundaryImg,
  TertiaryImg,
} from "./styles";
import Title from "../Title";

function Services({refs}) {
  return (
    <FullWrapper>
        <span ref={refs} />
      <Container>
        <LeftWrapper>
          <h1 className="written-title">Análise Transacional</h1>
          <p>
            A Análise Transacional (AT) é uma abordagem prática e humanista que
            explora a personalidade, desenvolvimento humano, comunicação e
            relacionamentos.
          </p>
          <p>
            Acreditamos que as pessoas têm o potencial para o bem-estar e
            relacionamentos saudáveis, baseados em princípios como a crença de
            que somos inerentemente capazes de nos sentir bem, a importância de
            relações contratuais, autonomia e a capacidade de identificar e
            mudar padrões de pensamento, sentimentos e comunicação.
          </p>
          <p>
            Se busca relacionamentos saudáveis, comunicação eficaz e bem-estar
            pessoal, a AT pode ser o caminho. Vamos começar?
          </p>
          <div className="line" />

          <MainImg />
        </LeftWrapper>
        <RightWrapper>
          <Title title="Meus serviços" position="02" />
          <SecundaryImg />
          <TertiaryImg />
          <h1 className="written-title">Psicoterapia</h1>

          <p>
            A Psicoterapia é uma jornada multifacetada repleta de objetivos e
            recompensas. É uma oportunidade de desenvolver habilidades para
            lidar consigo mesmo e com os outros, promovendo o autoconhecimento e
            desencadeando mudanças em comportamentos disfuncionais.
          </p>

          <p>
            O processo terapêutico é um convite caloroso para explorar o seu
            potencial, ajudando-o a enfrentar traumas, medos, culpas, lutos e
            muitas outras questões que afetam nossa jornada na vida.
          </p>

          <p>
            Meu trabalho é dedicado a indivíduos que desejam embarcar nessa
            profunda jornada de autodescoberta. É uma honra ter a oportunidade
            de conhecer e acompanhar histórias diversas e cheias de significado.
            Vamos começar a sua jornada rumo ao bem-estar e à compreensão de si
            mesmo?
          </p>
          <div className="line" />
        </RightWrapper>
      </Container>
      <Background />
    </FullWrapper>
  );
}

export default Services;
