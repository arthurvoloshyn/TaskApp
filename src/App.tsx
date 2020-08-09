import React from 'react';

import ToDo from './containers/todo/todo';
import Title from './components/title/title';

const App = () => (
  <>
    <Title title="Task App" />
    <ToDo />
  </>
);

export default App;
