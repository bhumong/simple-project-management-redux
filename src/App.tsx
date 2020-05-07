import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import ProjectDetail from './components/projects/ProjectDetail';
import Signin from './components/auth/Signin';
import Signup from './components/auth/Signup';
import CreateProject from './components/projects/CreateProject';
import './css/index.css';
import ProjectContextProvider from './store/contexts/PorjectContext';
import LoadingBar from './components/layout/LoadingBar';
import LoadingContextProvider, { LoadingContext } from './store/contexts/LoadingContext';

function App() {
  return (
    <BrowserRouter>
        <LoadingContextProvider>
          <div className="App">
            <LoadingBar />
            <Navbar />
            <Switch>
              <ProjectContextProvider>
                <Route exact path='/' component={Dashboard} />
                <Route path='/project/:id' component={ProjectDetail} />
                <Route path='/create' component={CreateProject} />
              </ProjectContextProvider>
                <Route path='/login' component={Signin} />
                <Route path='/signup' component={Signup} />

            </Switch>
          </div>
        </LoadingContextProvider>

    </BrowserRouter>
  );
}

export default App;
