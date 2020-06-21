import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions';

function SigninLink(props : any) {
  let {initial} = props;

  return (
    <ul className='right'>
      <li><NavLink to='/create'> New Project </NavLink></li>
      <li><NavLink to='/' onClick={props.signOut}> Logout </NavLink></li>
      <li><NavLink to='/' className='btn btn-floating pink lighten-1'> {initial} </NavLink></li>
      <li>
          <a href="https://github.com/bhumong/simple-project-management-redux" target="_blank" className="btn btn-floating black lighten-1" aria-label="Download bhumong/simple-project-management-redux on GitHub">
            <img src="/img/github.png" alt="" className="responsive-img circle" style={{ maxWidth: "30px", paddingTop: "6px"}} />
          </a>
      </li>
    </ul>
  );
}

export default connect(null, {signOut}) (SigninLink);
