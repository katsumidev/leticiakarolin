import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 300px;
    background-color: #d5bdaf;
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 30px;
    z-index: 999;

    p {
        font-weight: 900;
        max-width: 50%;
        font-size: 12pt;
        text-transform: uppercase;
    }

    h2 {
        font-family: 'LaLuxesScript', sans-serif;
        font-size: 50pt;
    }
`;