import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = () => {
  return (
    <Nav>
      <NavContainer>
        <Logo to="/">Loan Prototype</Logo>
        <Menu>
          <MenuItem to="/">Login</MenuItem>
          <MenuItem to="/register">Register</MenuItem>
          {/* Add more menu items as needed */}
        </Menu>
      </NavContainer>
    </Nav>
  );
};

const Nav = styled.nav`
  background-color: #75975e; /* Same color as buttons */
  color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Add some shadow for a professional look */
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: auto;
  padding: 10px 20px;
`;

const Logo = styled(Link)`
  font-size: 1.8rem;
  color: #fff;
  text-decoration: none;
  font-weight: bold; /* Make logo bold */
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
`;

const MenuItem = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin-left: 20px;
  font-size: 1.2rem;
  transition: color 0.3s ease;

  &:hover {
    color: #e0e7ff; /* Light hover effect */
  }
`;

export default Navbar;
