import styled from "styled-components";
import aboutBackground from "../../assets/img/aesthetic_one.jpg";
import personal6 from "../../assets/img/personal6.jpeg"

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: 100vh;
  justify-content: space-between;
  margin-top: 80px;
`;

export const Background = styled.div`
  width: 40%;
  height: 90vh;
  background-image: url(${aboutBackground});
  background-position: center;
  background-size: cover;
  justify-self: flex-end;
  position: relative;
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
    border: 8px solid #F8F4EF;
`

export const MainWrapper = styled.div`
  width: 90%;
  height: 90%;
  display: flex;
  align-items: center;
  justify-content: center;

`;

export const TextContainer = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 40px;

 p {
    font-size: 16pt;
  }
`;
