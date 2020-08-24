import * as React from 'react';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
<<<<<<< HEAD
=======
import store from '@App/flux/store';
import { Provider } from 'react-redux';
>>>>>>> 4bf43245435f4a94d1d572dc2080059714299048
import App from '@App/components/App/App';
import configureStore from './flux/store';
import { Provider } from 'react-redux';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
