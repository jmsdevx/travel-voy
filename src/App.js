import React, { useEffect } from "react";
import { Provider } from "react-redux";
import store, { history } from "./components/ducks/store";
import routes from "./routes/routes";
import "./App.scss";
import { ConnectedRouter } from 'connected-react-router';
import Auth from './components/auth/Auth';

function App() {

  useEffect(() => {
  }, []);

  return (
    <Provider store={store}>
      <Auth />
      <ConnectedRouter history={history}>
        <div>{routes}</div>
      </ConnectedRouter>
    </Provider>
  );
}

export default App;
