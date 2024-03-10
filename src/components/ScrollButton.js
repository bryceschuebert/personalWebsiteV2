import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';

const StyledLink = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #000000;
  border-radius: 74px;
  color: #000000;
  height: 36px;
  width: 147px;
  text-decoration: none;
  cursor: pointer;
`;

const ScrollButton = ({ to, children }) => {
    return (
      <StyledLink as={Link} to={to} smooth={true} duration={500}>
        {children}
      </StyledLink>
    );
  };
  
export default ScrollButton;

