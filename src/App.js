import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./components/ducks/store";
import routes from "./routes/routes";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>{routes}</div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
