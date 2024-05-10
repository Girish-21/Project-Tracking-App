import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard';
import ProjectDetails from './components/projects/ProjectDetails';
import SignUp from './components/authen/SignUp';
import SignIn from './components/authen/SignIn';
import AddProject from './components/projects/AddProject';
import Navbar from './components/layout/navbar';
import Navbar1 from './components/layout/navbar1';
import ProtectedRoute from './components/ProtectedROute';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className='App'>
            <Switch>
              <Route exact path={['/', '/signup', '/signin']} component={Navbar1} />
              <Route path='/:user_name' component={Navbar} />
            </Switch>
            <Switch>
              {/* Public Routes */}
              <Route exact path='/' component={SignIn} />
              <Route exact path='/signup' component={SignUp} />
              <Route exact path='/signin' component={SignIn} />


              {/* Protected Routes */}
              <ProtectedRoute exact path="/:user_name" component={Dashboard} />
              <ProtectedRoute path="/:user_name/project/:id"component={ProjectDetails} />
              <ProtectedRoute path="/:user_name/addproject" component={AddProject} />
            </Switch>
          </div>
      </BrowserRouter>
    );
  }
}

export default App;
