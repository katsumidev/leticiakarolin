import React, { useState } from "react";
import { AiFillFacebook, AiFillInstagram, AiFillHeart } from "react-icons/ai";
import { Container } from "./styles";

function Header() {
  const [isFixed, setFixed] = useState(false);

  if (typeof window !== "undefined") {
    function setHeaderFixed() {
      if (window.scrollY >= 1) {
        setFixed(true);
      } else {
        setFixed(false);
      }
    }

    window.addEventListener("scroll", setHeaderFixed);
  }

  return (
    <Container isFixed={isFixed}>
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
