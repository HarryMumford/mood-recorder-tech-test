import Logo from './Logo';
import Title from './Title';
import * as React from 'react';
import styled from 'styled-components';

const logoUrl = require('../../assets/images/logo-birdie.svg');

const Header = () => {
  const HeaderContainer = styled.div`
    background-color: white;
    color: midnightblue;
    height: 20%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  `;
  return (
    <HeaderContainer>
      <Logo src={logoUrl} />
      <Title>Care Tracker</Title>
    </HeaderContainer>
  );
};

export default Header;
