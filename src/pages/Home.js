import React from 'react';
import styled from 'styled-components';

import NikeSneakers from '../assets/images/home_image.png';
import Button from '../components/shared/Button';

const Home = props => {

    return (
        <StyledHome>
            <Image>
                <img src={NikeSneakers} alt="nike sneakers." />
            </Image>
            <Content>
                <h1>Unleash the speed.</h1>
                <p>Better technique for more speed during those long runs. Increased comfort from the extra cushioning. </p>
                <Button>Browse models</Button>
            </Content>
        </StyledHome>
    );
}

export default Home;

const StyledHome = styled.div`
    height: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: flex-start;
    padding-top: 10%;
    transition: ease all .3s;

    @media (max-width: 1500px) {
        margin: 0;
    }
    @media (max-width: 900px) {
        padding: 0;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        margin: 20px;
        transition: ease all .3s;
    }
`;

const Image = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-end;
    margin-right: 10px;

    img {
        width: 80%;
        height: auto;
    }

    @media (max-width: 900px) {
        /* img {
            width: 100%;
        } */
        align-items: center;
    }
`;

const Content = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    padding-top: 5%;

    h1 {
        margin: 20px 0;
    }

    p {
        width: 70%;
    }

    ${Button} {
        width: 300px;
        margin: 30px 0;
    }

    @media (max-width: 900px) {
        width: 100%;
        align-items: center;
        margin: 10px;
        padding: 5px;
    }
`;