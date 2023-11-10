import React, { useState } from "react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillHeart,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { RiWhatsappFill } from "react-icons/ri";
import { Container, MobileMenu } from "./styles";
import { Pivot as Hamburger } from "hamburger-react";
import logo from "../../assets/img/logo.png";

function Header(props) {
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

  const menuItems = [
    { label: "Sobre mim", target: "about" },
    { label: "Serviços", target: "services" },
    { label: "Informações", target: "posts" },
    { label: "Contato", target: "contact" },
  ];

  const handleMenuItemClick = (target) => {
    props.scrollTo(target);
    setIsOpen(false);
  };

  return (
    <>
      <Container isOpen={isOpen} isFixed={isFixed}>
        <p className="title" onClick={() => props.scrollTo("home")}>
          Leticia Karoline
        </p>
        <img
          src={logo}
          className="logo"
          onClick={() => props.scrollTo("home")}
        />
        <ul>
          <li onClick={() => props.scrollTo("about")}>Sobre mim</li>
          <li onClick={() => props.scrollTo("services")}>Serviços</li>
          <li onClick={() => props.scrollTo("posts")}>Informações</li>
          <li onClick={() => props.scrollTo("contact")}>Contato</li>
        </ul>
        <div className="icons">
          <RiWhatsappFill
            onClick={() =>
              window.open(
                "https://wa.me/553491282466?text=Ol%C3%A1!%20Estou%20interessado%20em%20saber%20mais%20sobre%20como%20podemos%20trabalhar%20juntos!"
              )
            }
            size={25}
          />
          <AiFillInstagram
            onClick={() =>
              window.open("https://www.instagram.com/leticiakaroline.psi/")
            }
            size={25}
          />
        </div>
        <span className="menu">
          <Hamburger toggled={isOpen} toggle={setIsOpen} />
        </span>
      </Container>
      {isOpen && (
        <MobileMenu>
          <ul>
            {menuItems.map((menuItem) => (
              <li
                key={menuItem.target}
                onClick={() => handleMenuItemClick(menuItem.target)}
              >
                {menuItem.label}
              </li>
            ))}

            <li className="icons-mobile">
              <RiWhatsappFill
                onClick={() =>
                  window.open(
                    "https://wa.me/553491282466?text=Ol%C3%A1!%20Estou%20interessado%20em%20saber%20mais%20sobre%20como%20podemos%20trabalhar%20juntos!"
                  )
                }
                size={45}
              />
              <AiFillInstagram
                onClick={() =>
                  window.open("https://www.instagram.com/leticiakaroline.psi/")
                }
                size={45}
              />
            </li>
          </ul>
        </MobileMenu>
      )}
    </>
  );
}

export default Header;
