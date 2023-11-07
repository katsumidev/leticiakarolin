import React from "react";

import {
  Container,
  MainPicture,
  PictureWrapper,
  HeroBackground,
  LearnBtn,
  SecundaryPicture,
  InImage
} from "./styles";
import mainPic from "../../assets/img/personal5.jpeg";
import secundaryPic from "../../assets/img/personal10.jpeg"

function Hero() {
  return (
    <Container>
      <PictureWrapper>
        <MainPicture>
          <img src={mainPic} />
          <div className="back" />
        </MainPicture>
        <div className="main-titles">
          <h1>Olá, Tudo bem?</h1>
          <h3>Sou uma Psicóloga clínica</h3>
          <h2>
            Ajudando pessoas a encontrarem o equilíbrio e o bem-estar por meio
            da psicoterapia.
          </h2>
          <LearnBtn>Saiba Mais</LearnBtn>
        </div>
        <SecundaryPicture>
          <InImage src={secundaryPic} />
          <h1>Vamos trabalhar juntos!</h1>
        </SecundaryPicture>
        <HeroBackground />
      </PictureWrapper>
      <div className="main-background"></div>
    </Container>
  );
}

export default Hero;
