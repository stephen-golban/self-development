import App from "./App";
import ReactDOM from "react-dom";
import { store } from "./store/store";
import { Provider } from "react-redux";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
serviceWorkerRegistration.register();
