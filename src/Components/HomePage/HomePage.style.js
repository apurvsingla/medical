import styled from 'styled-components';


export const HomeComponent = styled.div`
    padding-top: 10vh;
    background-image: url(${props => props.img});
    height: 90vh;
    background-size: cover;
`