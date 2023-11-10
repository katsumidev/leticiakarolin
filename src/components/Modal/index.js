import React, { useEffect, useState } from "react";
import {
  Container,
  Background,
  ModalBox,
  LoadingBar,
  ProgressBar,
} from "./styles";
import asset1 from "../../assets/img/asset1.svg";

function Modal(props) {
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
        <img src={asset1} />
        <h1>Muito Obrigada!</h1>
        <h2>Desejo sinceramente que possamos nos encontrar em breve! 🌸 </h2>

        {loading ? (
          <LoadingBar>
            <ProgressBar />
          </LoadingBar>
        ) : null}
      </ModalBox>
    </Container>
  );
}

export default Modal;
