import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import ProjectDetail from './components/projects/ProjectDetail';
import Signin from './components/auth/Signin';
import Signup from './components/auth/Signup';
import CreateProject from './components/projects/CreateProject';
import './css/index.css';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
            <div className="App">
              <Navbar />
              <Switch>
                  <Route exact path='/' component={Dashboard} />
                  <Route path='/project/:id' component={ProjectDetail} />
                  <Route path='/create' component={CreateProject} />
                  <Route path='/login' component={Signin} />
                  <Route path='/signup' component={Signup} />
              </Switch>
            </div>
      </BrowserRouter>
    );
  }
}

export default App;
