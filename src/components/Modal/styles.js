import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  z-index: 99999999999999;
  position: fixed;
  left: 0;
  bottom: 0;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Background = styled.div`
  background-color: rgba(0,0,0,0.7);
  width: 100%;
  height: 100%;
  z-index: -1;
 
`;

export const ModalBox = styled.div`
    background: #fff;
    width: 500px;
    height: 500px;
    z-index: 2;
    position: absolute;
    border-radius: 12px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;

    img {
        max-width: 200px;
        margin-bottom: 50px;
    }

    padding: 0 50px;

    @media (max-width: 600px) {
        width: 90%;
    }
`;


export const LoadingBar = styled.div`
  width: 100%;
  height: 6px;
  background-color: #ccc;
  border-radius: 0.4rem;
  margin-top: 30px;
`;

export const ProgressBar = styled.div`
  height: 100%;
  background-color: #402826;
  animation: progress 5s linear;
  animation-fill-mode: forwards;
  transform-origin: left;
  transform: scaleX(0);
  width: 100%;
  border-radius: 0.4rem;

  @keyframes progress {
    0% {
      transform: scaleX(1);
    }
    100% {
      transform: scaleX(0);
    }
  }
`;