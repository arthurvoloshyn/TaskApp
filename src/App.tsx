import React from 'react';

import ToDo from './containers/todo/todo';
import Title from './components/title/title';

const App: React.FC = () => (
  <>
    <Title title="Task App" />
    <ToDo />
  </>
);

export default App;
