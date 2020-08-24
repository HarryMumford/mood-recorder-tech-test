import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
<<<<<<< HEAD
import configureStore from '@App/flux/store';
=======
import store from '@App/flux/store';
>>>>>>> 4bf43245435f4a94d1d572dc2080059714299048

it('renders without crashing', () => {
  const store = configureStore();
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    div
  );
});
