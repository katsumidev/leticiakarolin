import styled from "styled-components";
import aesthetic_3 from "../../assets/img/aesthetic_six.jpg";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin: 100px 0;
  width: 100vw;

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  align-items: center;
  padding: 90px 0;
  position: relative;

  &::before {
    content: "";
    width: 60%;
    background-image: url(${aesthetic_3});
    background-position: center;
    background-size: cover;
    opacity: 0.7;
    z-index: -1;
    height: 113%;
    position: absolute;
    top: 0;
    left: 0;
  }

  @media (max-width: 1000px) {
    width: 80%;

    &::before {
      display: none;
    }
  }
`;

export const RightContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 50%;
  justify-content: flex-start;
  align-items: center;

  @media (max-width: 1000px) {
    width: 80%;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 70%;
  gap: 50px;

  @media (max-width: 1000px) {
    width: 100%;

  }
`;

export const Input = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  p {
    font-weight: 700;
  }

  input {
    padding: 15px 0;
    width: 100%;
    outline: none;
    border: none;
    background-color: transparent;
    border-bottom: 2px solid #000;
  }

  select {
    padding: 15px 0;
    width: 100%;
    outline: none;
    border: none;
    background-color: transparent;
    border-bottom: 2px solid #000;
  }

  textarea {
    padding: 15px 0;
    width: 100%;
    outline: none;
    border: none;
    background-color: transparent;
    border-bottom: 2px solid #000;
    height: 100px;
    max-height: 100px;
    max-width: 100%;
  }
`;

export const DoubleRow = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    width: 100%;
`;

export const MainWrapper = styled.div`
  width: 50%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-right: 0;

  @media (max-width: 1000px) {
    width: 100%;
  }
`;

export const Infos = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  list-style: none;
  gap: 20px;
  margin-top: 20px;
  font-weight: 700;

  li {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    font-size: 13pt;

    svg {
      path {
        color: #202120;
      }
    }
  }
`;

export const Image = styled.div`
  width: 120%;
  height: 70vh;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center;
  margin-top: 20px;

  @media (max-width: 1000px) {
    width: 100%;
  }
`;

export const SendMsgBtn = styled.button`
  font-weight: 900px;
  text-transform: uppercase;
  padding: 20px;
  width: 250px;
  text-align: center;
  letter-spacing: 3px;
  background-color:  #202120;
  color: #fff;
  cursor: pointer;

  img {
    width: 50px;
  }
`