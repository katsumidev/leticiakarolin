import styled from "styled-components";

export const Container = styled.div`
  background-color: #202120;
  width: 100%;
  padding: 80px 0;
  color: #F8F4EF;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  h1 {
    text-transform: uppercase;
    font-weight: 500;
  }

  .line {
    width: 80%;
    height: 1px;
    background-color: #F8F4EF;
  }
`;

export const MainRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 70%;
    margin-top: 40px;
    gap: 30px;
`

export const Item = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    h2 {
        font-size: 16pt;
        font-style: italic;
        font-weight: 500;
    }
`
