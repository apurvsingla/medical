import styled from 'styled-components';

export const HeaderMain = styled.div`
    width: 100%;
    height: 10vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;  
    background: black;
    position: fixed;
    box-sizing: border-box;
    z-index: 2;
    top: 0;
    @media screen and (max-width: 1008px){
        justify-content: space-between;
    }
`;


