import styled from "styled-components";
import aboutBackground from "../../assets/img/aesthetic_one.jpg";
import personal6 from "../../assets/img/personal6.jpeg";

export const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  width: 100vw;
  justify-content: space-between;
  padding: 100px 0;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const Background = styled.div`
  width: 40%;
  height: 90vh;
  background-image: url(${aboutBackground});
  background-position: center;
  background-size: cover;
  justify-self: flex-end;
  position: relative;

  @media (max-width: 1000px) {
    width: 80%;
    background-image: none;
    justify-self: center;
    align-self: center;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 100px;
}
`;

export const FrontImg = styled.div`
  position: absolute;
  width: 90%;
  height: 90%;
  bottom: -40px;
  left: -20%;
  background-image: url(${personal6});
  background-position: center;
  background-size: cover;
  border: 8px solid #f8f4ef;

  @media (max-width: 1000px) {
    position: relative;
    width: 100%;
    height: 100%;
    left: 0;
    bottom: 0;
    border: none;
  }
`;

export const MainWrapper = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1000px) {
    width: 80%;
    padding: 0;
    margin: 0 auto;
  }
`;

export const TextContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media (max-width: 1000px) {
    width: 100%;
  }

  p {
    font-size: 16pt;
  }
`;
