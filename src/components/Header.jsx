import React from 'react';
import styled from 'styled-components';

const Header = () => (
    <Nav>
        <Logo>
          <img src="assets/ManoLogo.png" alt="Logo-Mano" />
        </Logo>
    </Nav>
  );

const Nav = styled.nav`
  padding-top: .5rem;
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  background: white;
  box-shadow: 2px 2px 2px lightgrey;
`;

const Logo = styled.a`
  width: 50%;
  img {
    width: 200px;
    padding: 10px;
  }
`;

export default Header;