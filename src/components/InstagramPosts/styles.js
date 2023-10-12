import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  padding: 100px 0;
  align-items: center;
    margin-bottom: 80px;

  h1 {
    font-size: 45pt;
    font-family: "LaLuxesScript", sans-serif;
  }

  .line {
    width: 60%;
    height: 2px;
    background-color: #202120;
  }
`;

export const MainTitle = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  gap: 20px;

  h4 {
    text-transform: uppercase;
    font-size: 10pt;
  }
`;

export const PostsRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;
  justify-content: center;
  height: 100vh;
  margin-top: 150px;
  position: relative;
`;

export const InstaPostImg = styled.div`
  background-image: url(${(props) => props.src});
  width: 500px;
  height: 500px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  transition: all 0.3s;
  cursor: pointer;
  border: 10px solid #fff;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;

  ${(props) =>
    props.first &&
    css`
      transform: rotate(-5deg);
      margin-right: 20%;

      &:hover {
        transform: translateY(-50px) rotate(-5deg) !important;
      }

      h1 {
        position: absolute;
        bottom: -25%;
        color: #545454;
        left: 10%;
        transform: rotate(5deg);
      }
    `}

  ${(props) =>
    props.second &&
    css`
      position: absolute;
      top: 30px;
      background-position: 0 -120px;

      &:hover {
        top: 0px;
      }

      h1 {
        position: absolute;
        color: #545454;
        text-align: center;
        left: 20%;
        top: -20%;
        transform: rotate(0deg);
      }
    `}

    ${(props) =>
    props.thirty &&
    css`
      right: -90%;
      transform: rotate(7deg);
      top: -10%;

      background-position: 0 -180px;

      &:hover {
        transform: translateY(-50px) rotate(7deg) !important;
      }

      h1 {
        position: absolute;
        bottom: -20%;
        color: #545454;
        right: 10%;
        transform: rotate(-5deg);
      }
    `}
`;
