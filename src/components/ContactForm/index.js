import React, { useState, useRef } from "react";
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
  SendMsgBtn,
} from "./styles";
import Title from "../Title";
import { BsWhatsapp, BsInstagram } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import picture4 from "../../assets/img/personal4.jpeg";
import emailjs from "emailjs-com";
import Modal from "../Modal";
import ErrorModal from "../Modal/ErrorModal";
import loading from "../../assets/img/loading3.gif";

function ContactForm({ refs }) {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      emailjs
        .sendForm(
          process.env.REACT_APP_SERVICE_ID,
          process.env.REACT_APP_TEMPLATE_ID,
          form.current,
          process.env.REACT_APP_GENERAL_ID
        )
        .then(
          (result) => {
            setIsModalOpen({ success: !isModalOpen.success, error: false });
            setLoading(false);
          },
          (error) => {
            setIsModalOpen({ success: false, error: !isModalOpen.error });
            setLoading(false);
          }
        )
        .catch((err) => {
          setIsModalOpen({ success: false, error: !isModalOpen.error });
        });
    } catch (err) {
      setIsModalOpen({ success: false, error: !isModalOpen.error });
    }
  };

  const [phone, setPhone] = useState("");

  const handlePhoneChange = (event) => {
    const numericValue = event.target.value.replace(/\D/g, "");
    let formattedValue = "";

    if (numericValue.length > 2) {
      formattedValue += `(${numericValue.slice(0, 2)}) ${numericValue.slice(
        2,
        6
      )}-${numericValue.slice(6, 10)}`;
    } else if (numericValue.length > 0) {
      formattedValue += `(${numericValue.slice(0, 2)}`;
    }

    setPhone(formattedValue);
  };

  const ageRangeOptions = [
    { value: "15-17", label: "De 15 a 17 anos" },
    { value: "18-24", label: "De 18 a 24 anos" },
    { value: "25-34", label: "De 25 a 34 anos" },
    { value: "35+", label: "+ 35 anos" },
  ];

  const [isModalOpen, setIsModalOpen] = useState({
    success: false,
    error: false,
  });

  const [isLoading, setLoading] = useState(false);

  return (
    <Container>
      {isModalOpen.success && (
        <Modal
          closeModal={() => setIsModalOpen({ success: false, error: false })}
        />
      )}
      {isModalOpen.error && (
        <ErrorModal
          closeModal={() => setIsModalOpen({ success: false, error: false })}
        />
      )}

      <span ref={refs} />
      <LeftContainer>
        <MainWrapper>
          <Title title="Contato" position="03" />
          <Infos>
            <li>
              <BsWhatsapp size={20} />
              (34) 9 9128-2466
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
        <Form ref={form} onSubmit={sendEmail}>
          <Input>
            <p>Nome</p>
            <input
              type="text"
              name="username"
              placeholder="Seu nome completo"
            />
          </Input>

          <Input>
            <p>Email</p>
            <input
              type="email"
              name="email"
              required
              placeholder="Seu Endereço de Email"
            />
          </Input>

          <DoubleRow>
            <Input>
              <p>Telefone</p>
              <input
                type="text"
                name="phone"
                placeholder="(34) 9999-9999"
                value={phone}
                onChange={handlePhoneChange}
              />
            </Input>
            <Input>
              <p>Idade</p>
              <select name="ageRange" id="ageRange">
                {ageRangeOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </Input>
          </DoubleRow>

          <Input>
            <p>Qual a cidade e país você mora atualmente?*</p>
            <input
              type="text"
              name="location"
              placeholder="Ex: São Paulo - Brasil"
            />
          </Input>

          <Input>
            <p>Alguma observação sobre sua disponibilidade de horários?</p>
            <textarea name="extra" placeholder="..." />
          </Input>

          <SendMsgBtn type="submit">
            {isLoading ? <img src={loading} /> : "Enviar Mensagem"}
          </SendMsgBtn>
        </Form>
      </RightContainer>
    </Container>
  );
}

export default ContactForm;
