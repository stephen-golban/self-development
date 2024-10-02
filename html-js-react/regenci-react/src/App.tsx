import { useState, useEffect } from "react";
import MainLayout from "./Layouts/MainLayout";
import Loader from "./components/Loader/Loader";
import { iRootState } from "./utils/interfaces/store";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { getTemplates } from "./store/actions/templates/templates";
import { removeLocalStorage } from "./utils/localstorage/localStorage";
import {
  handleFetchCurrentUser,
  handleGetToken,
} from "./utils/functions/functions";
import "antd/dist/antd.css";
import "./assets/scss/index.css";

function App() {
  const [activeLoader, setActiveLoader] = useState(true);
  const dispatch = useDispatch();
  const token = useSelector((state: iRootState) => state.token);
  const isLogged = useSelector((state: iRootState) => state.isLogged);

  useEffect(() => handleGetToken(dispatch), [isLogged, dispatch]);

  useEffect(() => handleFetchCurrentUser(dispatch, token), [token, dispatch]);

  useEffect(() => {
    dispatch(getTemplates());
  }, [dispatch]);

  useEffect(() =>
    isLogged ? removeLocalStorage("selected-template") : undefined
  );

  return (
    <>
      {activeLoader ? (
        <Loader setActiveLoader={setActiveLoader} />
      ) : (
        <div className="app">
          <Router>
            <Switch>
              <Route
                path="/"
                render={(props: any) => <MainLayout {...props} />}
              />
            </Switch>
          </Router>
        </div>
      )}
    </>
  );
}

export default App;
