import React from "react";
import { Provider } from "react-redux";
import store from "./store/store";
import Home from "./views/Home";

function App() {
  return (
    <Provider store={store}>
      <Home/>
    </Provider>
  );
}

export default App;
