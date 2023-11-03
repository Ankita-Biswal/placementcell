import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const FooterContainer = styled.footer`
  background-color: #004080;
  color: #fff;
  padding: 2rem 0;
  text-align: center;
`;

const Nav = styled.nav`
  ul {
    list-style: none;
    padding: 0;
    display: flex;
    justify-content: center;
    gap: 20px;
  }

  li {
    a {
      text-decoration: none;
      color: #fff;
      font-weight: bold;
      font-size: 16px;
    }
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
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
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </Nav>
      <p>&copy; 2023 Your University. All rights reserved.</p>
    </FooterContainer>
  );
};

export default Footer;
