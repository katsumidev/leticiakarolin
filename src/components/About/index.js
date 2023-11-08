import React from "react";
import {
  Container,
  Background,
  MainWrapper,
  TextContainer,
  FrontImg,
} from "./styles";
import Title from "../Title";

function About({ refs }) {
  return (
    <Container>
      <MainWrapper>
        <TextContainer>
          <span ref={refs} />
          <Title title="Sobre Mim" position="01" />
          <p>
            Olá, sou Leticia Karoline, Psicóloga Clínica (CRP: 04/62318),
            graduada pela Universidade de Uberaba. Ofereço atendimento
            remoto/online para adultos e adolescentes, e minha abordagem central
            é a Análise Transacional.
          </p>

          <p>
            A jornada de autoconhecimento e autodescoberta é um passo importante
            em direção à saúde mental e ao bem-estar. Ao olhar para quem somos e
            para a pessoa que estamos nos tornando, acendemos uma luz que
            ilumina o caminho das nossas relações e nos fornece clareza para
            tomar decisões mais conscientes. Meu objetivo é ajudar você a
            compreender sua história, aprimorar sua maneira de se posicionar na
            vida e fortalecer sua capacidade de fazer escolhas saudáveis. No meu
            espaço virtual, você encontrará mais informações sobre mim e os
            serviços que disponibilizo.
          </p>
          <p>
            Estou aqui para acompanhá-lo em sua jornada de autodescoberta e
            crescimento pessoal. Juntos, podemos trabalhar para alcançar uma
            vida mais saudável e plena. Vamos começar essa jornada juntos?
          </p>
        </TextContainer>
      </MainWrapper>
      <Background>
        <FrontImg />
      </Background>
    </Container>
  );
}

export default About;
