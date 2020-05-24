import React from 'react';
import AnyInterface from '../../helpers/interfaces/AnyInterface';
import { connect } from 'react-redux';
import { signUp as actionSignup } from '../../store/actions/authActions';
import { Redirect } from 'react-router-dom';

class Signup extends React.Component <AnyInterface> {
  constructor (props : any) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  state = {
    email: '', 
    password: '',
    firstName: '', 
    lastName: '',
  };

  handleChange(e : any) {
    this.setState({
      ...this.state,
      [e.target.id] : e.target.value
    });
  }
  handleSubmit(e : any) {
    e.preventDefault();
    this.props.actionSignup(this.state);
  }

  render() {
    const {authError} = this.props.auth;
    const {status} = this.props.auth;
    if (status === 'OK') return <Redirect to='/login' />
    return (
      <div className='container'>  
        <form onSubmit={this.handleSubmit} className='white'>
          <h5 className='grey-text text-darken-3'>Sign Up</h5>
         <div className="input-field" style={{marginTop: '2%'}}>
            <label htmlFor="email">Email</label>
            <input type="email" autoComplete="off" name="email" id="email" onChange={this.handleChange}/>
          </div>
  
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" autoComplete="off" name="password" id="password" onChange={this.handleChange}/>
          </div>
  
          <div className="input-field">
            <label htmlFor="firstName">First Name</label>
            <input type="text" autoComplete="off" name="firstName" id="firstName" onChange={this.handleChange}/>
          </div>
  
          <div className="input-field">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" autoComplete="off" name="lastName" id="lastName" onChange={this.handleChange}/>
          </div>
  
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0 waves-effect waves-dark">
              Signup
            </button>
            <div className="red-text center">{authError ? (<p>{authError}</p>) : ''}</div>

          </div>
  
        </form>
      </div>
    );
  }
}
const mapStateToProps = (state: any) => {
  return {
    auth: state.auth
  }  
}
export default connect(mapStateToProps, {actionSignup}) (Signup);
