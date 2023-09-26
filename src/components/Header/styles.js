import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100px;
  padding: 0 50px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

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

    li {
      cursor: pointer;
      padding: 0px;
      margin: 0px;
      height: fit-content;
    }
  }
`;
