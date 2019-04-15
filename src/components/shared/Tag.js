import styled, { css } from 'styled-components';

export default styled.button`
    padding: 10px;
    margin: 1px;
    background-color: #ccc;
    color: #fff;
    font-size: calc(12px + 0.5vw);
    border: none;
    border-radius: 2px;
    transition: .3s transform ease-in-out;
    cursor: pointer;
    :active, :focus{
        outline: none;
    }
    :hover {
        border: 1px solid rgba(15, 95, 154, 0.6);
        transform: scale(1.05);
        background: rgba(22, 118, 189, 1);
    }
    ${props => props.isSelected && css`
        border: 1px solid rgba(15, 95, 154, 0.6);
        background: rgba(22, 118, 189, 1);
    `}
`;