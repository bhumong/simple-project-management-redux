import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
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
import MustLogoutRoute from './components/hoc/MustLogoutRoute';
import MustLoginRoute from './components/hoc/MustLoginRoute';

class App extends React.Component <AnyInterface> {
  componentDidMount() {
    this.props.checkUser();
    if (!this.props.userData && this.props.user) {
      this.props.getUserData(this.props.user);
    }
  }

  componentDidUpdate(prevProps: any) {
    this.props.checkUser();
    if (!this.props.userData && this.props.user) {
      this.props.getUserData(this.props.user);
    }
  }
  
  render() {
    return (
      <BrowserRouter>
            <div className="App">
              <Navbar user={this.props.user} userData={this.props.userData} />
              <Switch>
                  <MustLoginRoute user={this.props.user} exact path='/' component={(props: any) => <Dashboard {...props} user={this.props.user} userData={this.props.userData} />} />
                  <MustLoginRoute user={this.props.user} path='/project/:id' component={(props: any) => <ProjectDetail {...props} user={this.props.user} userData={this.props.userData} />} />
                  <MustLoginRoute user={this.props.user} path='/create' component={(props: any) => <CreateProject {...props} user={this.props.user} userData={this.props.userData} />}  />
                  <MustLogoutRoute user={this.props.user} path='/login' component={(props: any) => <Signin {...props} user={this.props.user} userData={this.props.userData} />} />
                  <MustLogoutRoute user={this.props.user} path='/signup' component={(props: any) => <Signup {...props} user={this.props.user} userData={this.props.userData}/>} />
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
