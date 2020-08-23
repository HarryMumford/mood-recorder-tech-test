import * as React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Header from '../Header/Container';
import Section from '../Section/Container';

const GlobalStyle = createGlobalStyle`
  body {
    height: 100vh;
    margin: 0;
    > div {
      height: 100%;
    }
  }
`;

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <Header />
        <Section />
      </AppContainer>
    </>
  );
};

export default App;
