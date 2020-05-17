import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import ProjectDetail from './components/projects/ProjectDetail';
import Signin from './components/auth/Signin';
import Signup from './components/auth/Signup';
import CreateProject from './components/projects/CreateProject';
import './css/index.css';
import { connect } from 'react-redux';
import { checkUser } from './store/actions/authActions';
import AnyInterface from './helpers/interfaces/AnyInterface';

class App extends React.Component <AnyInterface> {
  componentDidMount() {
    this.props.checkUser();
  }
  componentDidUpdate(prevProps: any) {
    this.props.checkUser();
  }
  
  render() {
    return (
      <BrowserRouter>
            <div className="App">
              <Navbar user={this.props.user} />
              <Switch>
                  <Route exact path='/' component={(props: any) => <Dashboard user={props.user}/>} />
                  <Route path='/project/:id' component={(props: any) => <ProjectDetail user={props.user} />} />
                  <Route path='/create' component={(props: any) => <CreateProject user={props.user} />}  />
                  <Route path='/login' component={(props: any) => <Signin user={props.user} />} />
                  <Route path='/signup' component={(props: any) => <Signup user={props.user}/>} />
              </Switch>
            </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    user: state.auth.user 
  }
}
export default connect(mapStateToProps, {checkUser}) (App);
