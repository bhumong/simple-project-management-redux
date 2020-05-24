import React from 'react';
import { connect } from 'react-redux';
import { signIn } from '../../store/actions/authActions';
import AnyInterface from '../../helpers/interfaces/AnyInterface';

class Signin extends React.Component <AnyInterface> {
  state = {
    email: '',
    password: '',
  }
  handleChange = (e : any) => {
    this.setState({
      ...this.state,
      [e.target.id] : e.target.value
    });
  }
  handleSubmit = (e : any) => {
    e.preventDefault();
    this.props.signIn(this.state);
  }

  render() {
    const {authError} = this.props;
    return (
      <div className='container'>  
        <form onSubmit={this.handleSubmit} className='white'>
          <h5 className='grey-text text-darken-3'>Sign In</h5>
         <div className="input-field" style={{marginTop: '2%'}}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" autoComplete="off" onChange={this.handleChange}/>
          </div>
  
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" onChange={this.handleChange}/>
          </div>
  
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0 waves-effect waves-dark">
              Login
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
    authError: state.auth.authError
  }
}
export default connect(mapStateToProps, {signIn}) (Signin);
