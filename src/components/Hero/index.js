import React from "react";

import {
  Container,
  MainPicture,
  PictureWrapper,
  HeroBackground,
} from "./styles";
import mainPic from "../../assets/img/personal5.jpeg";

function Hero() {
  return (
    <Container>
      {/* <HeroBackground /> */}
      <PictureWrapper>

        <MainPicture>
          <img src={mainPic} />
          <div className="back"/>
        </MainPicture>
        <div className="main-titles">
          <h1>Olá, Tudo bem?</h1>
          <h3>Sou uma psicologa e terapeuta</h3>
          <h2>Ajudando familias a se reconciliarem e ajudando milhares de pessoas toda semana!</h2>
        </div>
      </PictureWrapper>
      <div className="main-background">
      </div>
    </Container>
  );
}

export default Hero;
