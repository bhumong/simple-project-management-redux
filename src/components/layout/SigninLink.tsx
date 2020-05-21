import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions';

function SigninLink(props : any) {
  return (
    <ul className='right'>
      <li><NavLink to='/create'> New Project </NavLink></li>
      <li><NavLink to='/' onClick={props.signOut}> Logout </NavLink></li>
      <li><NavLink to='/' className='btn btn-floating pink lighten-1'> NN </NavLink></li>
    </ul>
  );
}

export default connect(null, {signOut}) (SigninLink);
