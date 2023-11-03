import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.header`
  background-color: #004080;
  color: #fff;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.img`
  width: 100px;
`;

const UniversityName = styled.h1`
  font-size: 1.5rem;
  margin-left: 40px;
  display: flex; /* Add display: flex */
  align-items: center; /* Vertically center the text */
`;

const Nav = styled.nav`
  ul {
    list-style: none;
    margin-left: 500px;
    padding: 0;
    display: flex;
    gap: 20px;
  }

  li {
    a {
      text-decoration: none;
      margin-left: 45px;
      color: #fff;
      font-weight: bold;
      font-size: 22px;
    }
  }
`;

const LoginButton = styled(Link)`
  background-color: #fff;
  color: #004080;
  padding: 10px 18px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: bold;
  font-size: 22px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #ff6600;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo src="Images/college_logo.png" alt="University Logo" />
      <UniversityName>CUTM PLACEMENT CELL</UniversityName>
      <Nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/programs">Programs</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </Nav>
      <LoginButton to="/login">Login</LoginButton>
    </HeaderContainer>
  );
};

export default Header;
