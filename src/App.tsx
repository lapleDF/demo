import React from 'react';
import { Provider } from 'react-redux';
import Course from './components/Courses';
import store from './store/store';

function App() {
  return (
    <Provider store={store}>
      <Course />
    </Provider>
  );
}

export default App;
