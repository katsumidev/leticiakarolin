import React, { useEffect, useState } from "react";
import {
  Container,
  Background,
  ModalBox,
  LoadingBar,
  ProgressBar,
} from "../styles";
import asset4 from "../../../assets/img/asset4.svg";

function ErrorModal(props) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      props.closeModal();
    }, 5000);
  }, []);

  return (
    <Container>
      <Background onClick={() => props.closeModal()}/>
      <ModalBox>
        <img src={asset4} />
        <h1>Opa, parece que algo deu errado!</h1>
        <br />
        <h3>Houve algum erro de conexão com o nosso sistema, por favor tente novamente mais tarde!</h3>
        <h3>Ou entre em contato diretamente pelo whatsapp.</h3>

        {loading ? (
          <LoadingBar>
            <ProgressBar />
          </LoadingBar>
        ) : null}
      </ModalBox>
    </Container>
  );
}

export default ErrorModal;
