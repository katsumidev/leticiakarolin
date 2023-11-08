import styled from "styled-components";
import personal1 from "../../assets/img/personal1.jpeg";
import aesthetic2 from "../../assets/img/aesthetic_two.jpg";

export const FullWrapper = styled.div`
  display: flex;
  position: relative;
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 120px 0;
  gap: 80px;

  .written-title {
    font-size: 35pt;
    font-family: "LaLuxesScript", sans-serif;
  }

  .line {
    width: 60%;
    height: 1px;
    background-color: #000;
  }

  @media (max-width: 1500px) {
    gap: 20px;
    width: 80%;
    margin: 0 auto;
  }

  @media (max-width: 1000px) {
    flex-direction: column;
    gap: 0px;
  }
`;

export const LeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  gap: 20px;
  margin-top: 7%;

  @media (max-width: 1000px) {
    max-width: 100%;
    font-size: 16pt;
  }
`;

export const MainImg = styled.div`
  height: 700px;
  background-image: url(${personal1});
  background-size: cover;
  margin-top: 30px;
  position: relative;

  &::before {
    content: "";
    width: 100%;
    height: 70%;
    transition: all 0.2s;
    position: absolute;
    left: -20px;
    bottom: -20px;
    z-index: -1;
    border: 2px solid #000;
  }

  @media (max-width: 1500px) {
    height: 500px;
    width: 80%;
  }

  @media (max-width: 1000px) {
    width: 100%;

    &::before {
      left: -10px;
      bottom: -10px;
      height: 95%;
    }
  }
`;

export const RightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  max-width: 600px;
  gap: 20px;

  @media (max-width: 1000px) {
    max-width: 100%;
    font-size: 16pt;
    margin-top: 60%;
  }
`;

export const SecundaryImg = styled.div`
  height: 600px;
  background-image: url(${aesthetic2});
  background-size: cover;
  background-position: bottom;
  margin: 30px 0;
  position: relative;

  @media (max-width: 1500px) {
    height: 500px;
    width: 80%;
  }

  &::before {
    content: "";
    width: 100%;
    height: 70%;
    transition: all 0.2s;
    position: absolute;
    right: -20px;
    top: -20px;
    z-index: -1;
    border: 2px solid #000;
  }

  @media (max-width: 1000px) {
    width: 100%;

    &::before {
      right: -10px;
      top: -10px;
      height: 95%;
    }
  }
`;

export const TertiaryImg = styled.div`
  height: 300px;
  width: 300px;
  position: absolute;
`;

export const Background = styled.div`
  background-color: #cfb8a2;
  width: 100%;
  height: 45%;
  z-index: -999;
  position: absolute;
  bottom: 0;

  @media (max-width: 1000px) {
    height: 30%;
  }
`;
