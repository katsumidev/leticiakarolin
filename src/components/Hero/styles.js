import styled from "styled-components";
import heroBackground from "../../assets/img/hero-background.jpg";

export const Container = styled.div`
  padding: 150px 0;
  width: 100vw;
  position: relative;

  @media (max-width: 1000px) {
    padding: 0px;
  }

  .main-titles {
    display: flex;
    flex-direction: column;
    gap: 25px;

    h1 {
      font-size: 65pt;
      font-family: "LaLuxesScript", sans-serif;
    }

    h3 {
      text-transform: uppercase;
      font-size: 15pt;
      font-weight: 900;
      color: #202120;
    }

    h2 {
      font-size: 35pt;
      max-width: 700px;
    }

    @media (max-width: 1500px) {
      h1 {
        font-size: 55pt;
      }

      h2 {
        font-size: 25pt;
        max-width: 450px;
      }

      h3 {
        font-size: 13pt;
      }
    }

    @media (max-width: 1100px) {
      h2 {
        max-width: 400px;
      }
    }

    @media (max-width: 1000px) {
      text-align: center;
      align-items: center;
      padding-top: 150px;

      h2 {
        max-width: 80%;
      }
    }
  }
`;

export const InImage = styled.div`
  width: 500px;
  height: 350px;
  margin-bottom: 100px;
  margin-top: 50px;
  background-image: url(${(props) => props.src});
  background-position-y: 30%;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const SecundaryPicture = styled.div`
  display: flex;
  justify-content: flex-end;
  display: none;
  position: relative;
  margin-right: -20%;
  margin-top: 100px;

  h1 {
    position: absolute;
    top: 2%;
    left: -20%;
    color: #000;
    font-size: 35pt;
    font-weight: 600;
    font-family: "LaLuxesScript", sans-serif;
    transform: rotate(-5deg);
  }

  @media (max-width: 1000px) {
    display: flex;
  }

  @media (max-width: 700px) {
    width: 70%;
    margin-right: 0;
    margin-left: 50px;
    margin-top: 100px;
    opacity: 0.9;
  }
`;

export const MainPicture = styled.div`
  width: 30%;
  position: relative;
  z-index: 1;
  display: flex;

  .back {
    background-color: #202120;
    width: 100vw;
    height: 115%;
    position: absolute;
    left: -250%;
    z-index: -1;
    bottom: -25px;
  }

  img {
    width: 100%;
    border: 8px solid #f8f4ef;
  }

  @media (max-width: 1500px) {
    height: 100%;

    .back {
      height: 108%;
    }

    img {
      width: 800px;
      height: 800px;
    }
  }

  @media (max-width: 1200px) {
    img {
      width: 125%;
      height: 700px;
    }
  }

  @media (max-width: 1100px) {
    img {
      max-height: 600px;
      margin-top: 25%;
    }
  }

  @media (max-width: 1000px) {
    display: none;
  }
`;

export const PictureWrapper = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 15%;
  margin: 0 100px;
  z-index: 2;
  height: 100vh;

  @media (max-width: 1500px) {
    gap: 15%;
  }

  @media (max-width: 1000px) {
    margin: 0px;
    flex-direction: column;
    justify-content: center;
    height: auto;
  }
`;

export const HeroBackground = styled.div`
  width: 100vw;
  height: 100%;
  position: absolute;
  bottom: 25px;
  left: 0;
  background-image: url(${heroBackground});
  background-position: center;
  background-size: cover;
  opacity: 0.4;
  z-index: -1;

  @media (max-width: 1000px) {
    width: 80%;
  }

  @media (max-width: 650px) {
    width: 90%;
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const LearnBtn = styled.div`
  width: 300px;
  padding: 20px;
  text-transform: uppercase;
  color: #fff;
  background-color: #202120;
  text-align: center;
  font-weight: 500;
  word-spacing: 20px;
  letter-spacing: 5px;
  font-size: 13pt;
  cursor: pointer;

  @media (max-width: 1500px) {
    font-size: 10pt;
    padding: 20px;
    width: 200px;
  }
`;
