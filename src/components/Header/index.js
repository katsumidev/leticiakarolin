import React, { useState } from "react";
import { AiFillFacebook, AiFillInstagram, AiFillHeart } from "react-icons/ai";
import { Container, MobileMenu } from "./styles";
import { Pivot as Hamburger } from "hamburger-react";

function Header() {
  const [isFixed, setFixed] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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
    <>
      <Container isOpen={isOpen} isFixed={isFixed}>
        <p className="title">Leticia Karoline</p>
        <p className="logo">lk</p>
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
        <span className="menu">
        <Hamburger toggled={isOpen} toggle={setIsOpen} />
        </span>
      
      </Container>
      {isOpen && (
        <MobileMenu>
          <h1>teste</h1>
          <h1>teste</h1>
          <h1>teste</h1>
          <h1>teste</h1>
          <h1>teste</h1>
        </MobileMenu>
      )}
    </>
  );
}

export default Header;
