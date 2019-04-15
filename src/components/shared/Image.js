import React from 'react';
import styled, { keyframes, css } from 'styled-components';

export default ({ src, alt, className, withAnimation, onClick }) => {

    const handleClicked = e => {
        if (onClick) {
            onClick(e);
        }
    }

    return (
        <StyledImage
            className={className}
            withAnimation={withAnimation}
            src={src} alt={alt || "image description"}
            onClick={handleClicked}
        />
    );
}

const slideIn = keyframes`
    0% {
        opacity: 0;
        transform: translateY(50%);
    }
    50% {
        opacity: .5;
        transform: translateY(75%);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
`;

const mobileSlideIn = keyframes`
    0% {
        opacity: 0;
        transform: translateX(-50%);
    }
    100% {
        opacity: 1;
        transform: translateX(0);
    }
`;

const StyledImage = styled.img`
    ${props => props.withAnimation && css`
        animation: ${slideIn} .8s linear;
    `}

    width: 80%;
    height: auto;

    @media (max-width: 900px) {
        ${props => props.withAnimation && css`
            animation: ${mobileSlideIn} .8s linear;
        `}
    }
`;
