import * as React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { RootState } from '@App/store/reducers';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import Header from '../Header/Container';
import Section from '../Section/Container';

interface AppProps {}

interface AppState {}

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

class App extends React.Component<AppProps, AppState> {
  public constructor(props: AppProps) {
    super(props);
  }

  public render() {
    return (
      <>
        <GlobalStyle />
        <AppContainer>
          <Header />
          <Section />
        </AppContainer>
      </>
    );
  }
}

const mapStateToProps = (state: RootState, ownProps: object) => {};

const mapDispatchToProps = (dispatch: Dispatch<RootState>) => {};

export default connect(mapStateToProps, mapDispatchToProps)(App);
