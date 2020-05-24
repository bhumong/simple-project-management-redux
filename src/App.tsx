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
import { checkUser, getUserData } from './store/actions/authActions';
import AnyInterface from './helpers/interfaces/AnyInterface';

class App extends React.Component <AnyInterface> {
  componentDidMount() {
    if (this.props.initUser) {
      this.props.getUserData(this.props.initUser);
    }
  }
  componentDidUpdate(prevProps: any) {
    if (this.props.initUser) {
      this.props.checkUser();
    }
  }
  
  render() {
    return (
      <BrowserRouter>
            <div className="App">
              <Navbar user={this.props.user} userData={this.props.userData} />
              <Switch>
                  <Route exact path='/' component={(props: any) => <Dashboard {...props} user={this.props.user} userData={this.props.userData} />} />
                  <Route path='/project/:id' component={(props: any) => <ProjectDetail {...props} user={this.props.user} userData={this.props.userData} />} />
                  <Route path='/create' component={(props: any) => <CreateProject {...props} user={this.props.user} userData={this.props.userData} />}  />
                  <Route path='/login' component={(props: any) => <Signin {...props} user={this.props.user} userData={this.props.userData} />} />
                  <Route path='/signup' component={(props: any) => <Signup {...props} user={this.props.user} userData={this.props.userData}/>} />
              </Switch>
            </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    userData: state.auth.userData,
    user: state.auth.user,
  }
}
export default connect(mapStateToProps, {checkUser, getUserData}) (App);
