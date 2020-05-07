import React from 'react';
import { NavLink } from 'react-router-dom';

function SigninLink() {
  return (
    <ul className='right'>
      <li><NavLink to='/create'> New Project </NavLink></li>
      <li><NavLink to='/'> Logout </NavLink></li>
      <li><NavLink to='/' className='btn btn-floating pink lighten-1'> NN </NavLink></li>
    </ul>
  );
}

export default SigninLink;
