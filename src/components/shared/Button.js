import styled from 'styled-components';

export default styled.button`
    padding: 15px 10px;
    margin: 30px 0;
    background-color: rgba(0, 145, 252, 1);
    color: #fff;
    font-size: calc(12px + 0.5vw);
    text-transform: uppercase;
    border: 2px solid rgba(0, 0, 0, .1);
    border-radius: 3rem;
    transition: .3s transform ease-in-out;
    cursor: pointer;
    :active, :focus{
        outline: none;
    }
    :hover {
        border: 2px solid transparent;
        transform: scale(1.05);
        border-color: rgba(15, 95, 154, 0.6);
        background: rgba(22, 118, 189, 1);
    }
`;