import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Login from './components/pages/Login';
import ProtectedRoute from './components/ProtectedRoute';
import ViewUserDetails from './components/services/userdetails/ViewUserDetails';




function App() {
  return (

      <Router>
      
        <Switch>
          <Route path="/" exact component={Login}/>

          <ProtectedRoute path="/user-details" exact component={ViewUserDetails} />

        </Switch>
      </Router>

  );
}

export default App;
