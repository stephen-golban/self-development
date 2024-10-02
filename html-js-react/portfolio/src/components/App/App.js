import React from 'react';
import Upload from "../Upload/Upload";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Admin from '../Admin/Admin';
import Home from './Home';
import { AuthProvider } from '../../firebase/Auth';
import PrivateRoute from '../../PrivateRoute';
import Thanks from '../Email/Thanks';


function App() {

  return (
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/admin" component={Admin}/>
            <PrivateRoute exact path="/upload" component={Upload}/>
            <Route exact path="/thanks" component={Thanks}/>
          </Switch>
        </Router>
      </AuthProvider>
  );
}


export default App;
