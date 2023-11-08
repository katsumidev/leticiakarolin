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

function InstagramPosts({refs}) {
  return (
    <Container>
      <span ref={refs} />
      <MainTitle>
        <h1>Dicas de Saúde Mental!</h1>
        <div className="line" />
        <h4>
          Siga @leticiakaroline.psi no Instagram para dicas de saúde mental!
        </h4>
      </MainTitle>
      <PostsRow>
        <InstaPostImg src={insta1} onClick={() => window.open("https://www.instagram.com/p/Cwk3cbPu3S8/")} first>
          <h1>Compaixão</h1>
        </InstaPostImg>
        <InstaPostImg src={insta2} onClick={() => window.open("https://www.instagram.com/p/Cxvn39duc_T/")} second>
          <h1>Aprendizado</h1>
        </InstaPostImg>
        <InstaPostImg src={insta3} onClick={() => window.open("https://www.instagram.com/p/CwQvK6uvrUQ/")} thirty>
          <h1>Evolução</h1>
        </InstaPostImg>
      </PostsRow>
    </Container>
  );
}

export default InstagramPosts;
