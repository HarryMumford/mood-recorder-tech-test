import Logo from './Logo';
import Title from './Title';
import * as React from 'react';
import styled from 'styled-components';

const Header = () => {
  const HeaderContainer = styled.div`
    width: 100%;
    height: 100%;
  `;
  return (
    <HeaderContainer>
      <Logo />
      <Title />
    </HeaderContainer>
  );
};

export default Header;
