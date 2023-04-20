import React from "react";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #000033;
  height: 80px;
  padding: 0 50px;
`;

const Logo = styled.a`
  font-size: 2rem;
  font-weight: bold;
  color: #ffffff;
`;

const NavLinks = styled.div`
  display: flex;
`;

const NavLink = styled.a`
  margin: 0 10px;
  font-size: 1.2rem;
  color: #ffffff;
  text-decoration: none;
`;

const Header = () => {
  return (
    <Nav>
      <div class="logo">
        <Logo href="#">Quality healthcare at the most economic prices</Logo>
      </div>
      <div>
        <NavLinks>
          <NavLink href="#">Home</NavLink>
          <NavLink href="#">Shop</NavLink>
          <SearchBar />
          <NavLink href="#">Cart</NavLink>
        </NavLinks>
      </div>
    </Nav>
  );
};

export default Header;
