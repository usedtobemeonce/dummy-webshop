import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import Logo from '../assets/images/logo.png';
import Context from '../store/context';

export default ({ history }) => {
    const [shoppingCartCount, setShoppingCartCount] = useState(0);
    const { state } = useContext(Context);

    useEffect(() => {
        if (state.shoppingCart) {
            setShoppingCartCount(state.shoppingCart.length);
        }
    }, [state.shoppingCart]);

    const handleLogoClicked = () => {
        history.push('/');
    }

    return (
        <>
            <StyledHeader>
                <img src={Logo} alt="the logo of the app" onClick={handleLogoClicked} />
                <Menu>
                    <NavLink to='/' exact activeClassName="navActive">Home</NavLink>
                    <NavLink to='/models' activeClassName="navActive">Models</NavLink>
                    <NavLink to='/shopping-cart' exact activeClassName="navActive">
                        Shopping cart {shoppingCartCount > 0 && <span className="cart-count"> ({shoppingCartCount})</span>}
                    </NavLink>
                </Menu>
            </StyledHeader>
        </>
    );
}

const StyledHeader = styled.nav`
    height: 67px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 40px;
    line-height: 1.6;
	-webkit-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.3);
	-moz-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.3);
	box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.3);

    img {
        width: auto;
        height: 40px;
        display: block;
        cursor: pointer;
    }

    @media (max-width: 1200px) {
        justify-content: center;
    }
`;

const Menu = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;

    a {
        margin: 0 20px;
    }

    .navActive {
        border-bottom: 3px solid #0091FC;
        transition: all 0.1s ease-in;
    }

    .cart-count {
        font-weight: 700;
        font-size: 1.3rem;
    }

    @media (max-width: 1200px) {
        display: none;
    }
`;