import React from 'react';

import { Provider } from 'react-redux';
import store from "./redux/config";
import IndexApp from "./IndexApp";

export default function App() {
  return (
    <Provider store={store}>
        <IndexApp/>
    </Provider>
  );
}
