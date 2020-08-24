import * as React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Header from '../Header/Container';
import Section from '../Section/Container';
<<<<<<< HEAD
=======
import { Provider } from 'react-redux';
import store from '../../flux/store';
>>>>>>> 4bf43245435f4a94d1d572dc2080059714299048

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
<<<<<<< HEAD
    <>
=======
    <Provider store={store}>
>>>>>>> 4bf43245435f4a94d1d572dc2080059714299048
      <GlobalStyle />
      <AppContainer>
        <Header />
        <Section />
      </AppContainer>
<<<<<<< HEAD
    </>
=======
    </Provider>
>>>>>>> 4bf43245435f4a94d1d572dc2080059714299048
  );
};

export default App;
