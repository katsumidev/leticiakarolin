import styled from "styled-components";
import personal1 from "../../assets/img/personal1.jpeg";
import aesthetic2 from "../../assets/img/aesthetic_two.jpg";

export const FullWrapper = styled.div`
    display: flex;
    position: relative;
`

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
`;

export const LeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  gap: 20px;
  margin-top: 7%;
`;

export const MainImg = styled.div`
  height: 700px;
  background-image: url(${personal1});
  background-size: cover;
  margin-top: 30px;
  position: relative;

  &::before {
    content: '';
    width: 100%;
    height: 70%;
    transition: all .2s;
    position: absolute;
    left: -20px;
    bottom: -20px;
    z-index: -1;
    border: 2px solid #000;
  }
`;

export const RightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  max-width: 600px;
  gap: 20px;
`;

export const SecundaryImg = styled.div`
  height: 600px;
  background-image: url(${aesthetic2});
  background-size: cover;
  background-position: bottom;
  margin: 30px 0;
  position: relative;

  &::before {
    content: '';
    width: 100%;
    height: 70%;
    transition: all .2s;
    position: absolute;
    right: -20px;
    top: -20px;
    z-index: -1;
    border: 2px solid #000;
  }
`;

export const TertiaryImg = styled.div`
  height: 300px;
  width: 300px;
  position: absolute;
`;

export const Background = styled.div`
    background-color: #CFB8A2;
    width: 100%;
    height: 45%;
    z-index: -999;
    position: absolute;
    bottom: 0;
`