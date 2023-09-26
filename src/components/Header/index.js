import React from "react";
import { AiFillFacebook, AiFillInstagram, AiFillHeart } from "react-icons/ai";
import { Container } from "./styles";

function Header() {
  return (
    <Container>
      <p className="title">Leticia Psicologia</p>
      <ul>
        <li>Sobre mim</li>
        <li>Serviços</li>
        <li>Informações</li>
        <li>Localização</li>
      </ul>
      <div className="icons">
        <AiFillFacebook size={25} />
        <AiFillInstagram size={25} />
        <AiFillHeart size={25} />
      </div>
    </Container>
  );
}

export default Header;
