import React from "react";
import {
  Container,
  InstaPostImg,
  MainTitle,
  PostsRow,
  PolaroidBorder,
} from "./styles";
import insta1 from "../../assets/img/insta_1.png";
import insta2 from "../../assets/img/insta_2.png"
import insta3 from "../../assets/img/insta_3.png"

function InstagramPosts() {
  return (
    <Container>
      <MainTitle>
        <h1>Dicas de Saúde Mental!</h1>
        <div className="line" />
        <h4>
          Siga @leticiakaroline.psi no Instagram para dicas de saúde mental!
        </h4>
      </MainTitle>
      <PostsRow>
        <InstaPostImg src={insta1} first>
          <h1>Compaixão</h1>
        </InstaPostImg>
        <InstaPostImg src={insta2} second>
          <h1>Aprendizado</h1>
        </InstaPostImg>
        <InstaPostImg src={insta3} thirty>
          <h1>Evolução</h1>
        </InstaPostImg>
      </PostsRow>
    </Container>
  );
}

export default InstagramPosts;
