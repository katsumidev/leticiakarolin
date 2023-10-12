import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100px;
  padding: 0 50px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  background-color: transparent;
  top: 0;
  z-index: 999999;
  transition: all .2s;

  ${(props) => props.isFixed && css`
    height: 80px;
    box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;
    background-color: #fff;
  `}

  .title {
    font-family: "LaLuxesScript", sans-serif !important;
    font-size: 35pt;
    text-transform: none;
    font-weight: 600;
  }

  .icons {
    display: flex;
    flex-direction: row;
    gap: 10px;

    svg {
      cursor: pointer;
    }
  }

  ul {
    display: flex;
    flex-direction: row;
    align-items: center;
    list-style: none;
    gap: 30px;
    text-transform: uppercase;
    font-weight: 900;
    font-family: 'Brandon Bold';

    :hover {
        transform: scale(1.1);
        margin: 0 30px;
      }

    li {
      cursor: pointer;
      padding: 0px;
      margin: 0px;
      height: fit-content;
      transition: all .2s;
    }
  }
`;
