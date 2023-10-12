import React from "react";
import {
  Container,
  LeftContainer,
  RightContainer,
  Infos,
  MainWrapper,
  Image,
  Input,
  Form,
  DoubleRow,
} from "./styles";
import Title from "../Title";
import { BsWhatsapp, BsInstagram } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import picture4 from "../../assets/img/personal4.jpeg";

function ContactForm() {
  return (
    <Container>
      <LeftContainer>
        <MainWrapper>
          <Title title="Contato" position="03" />
          <Infos>
            <li>
              <BsWhatsapp size={20} />
              (34) 9 9529-7428
            </li>

            <li>
              <BsInstagram size={20} />
              @leticiakaroline.psi
            </li>
            <li>
              <MdEmail size={24} />
              leticiakarolin@hotmail.com
            </li>

            <Image src={picture4} />
          </Infos>
        </MainWrapper>
      </LeftContainer>
      <RightContainer>
        <Form>
          <Input>
            <p>Nome</p>
            <input type="text" placeholder="Seu nome completo" />
          </Input>

          <Input>
            <p>Email</p>
            <input type="text" placeholder="Seu Endereço de Email"/>
          </Input>

          <DoubleRow>
            <Input>
              <p>Telefone</p>
              <input type="text" placeholder="(99) 9 9999-9999" />
            </Input>
            <Input>
              <p>Idade</p>
              <input type="text" placeholder="Entre 12 e 18.."/>
            </Input>
          </DoubleRow>

          <Input>
            <p>Email</p>
            <input type="text" placeholder="Seu Endereço de Email"/>
          </Input>

          <Input>
            <p>Email</p>
            <input type="text" placeholder="Seu Endereço de Email"/>
          </Input>
        </Form>
      </RightContainer>
    </Container>
  );
}

export default ContactForm;
