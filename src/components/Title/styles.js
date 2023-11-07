import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 20px;
    min-width: 100%;

    p {
        font-weight: 700;
        font-size: 12pt;
    }
`;

export const TitleWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    font-weight: 700;
    width: 100%;
    gap: 20px;
    justify-content: space-between;

    h1 {
        text-transform: uppercase;
        font-size: 2.7rem;
        white-space: nowrap;
    }

    .line {
        width: 100%;
        height: 2px;
        background-color: #000;
    }
`