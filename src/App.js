import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import ToDo from './containers/todo/todo';
import Title from './components/title/title';

const App = () => (
  <Provider store={store}>
    <Fragment>
      <Title title="Task App" />
      <ToDo />
    </Fragment>
  </Provider>
);

export default App;
