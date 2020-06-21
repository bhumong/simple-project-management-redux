import React from 'react';
import { NavLink } from 'react-router-dom';

function SignoutLink(props : any) {
  return (
    <ul className='right'>
      <li><NavLink to='/signup'> Signup </NavLink></li>
      <li><NavLink to='/login'> Login </NavLink></li>
      <li>
        <a href="https://github.com/bhumong/simple-project-management-redux" target="_blank" className="btn btn-floating black lighten-1" aria-label="Download bhumong/simple-project-management-redux on GitHub">
          <img src="/img/github.png" alt="" className="responsive-img circle" style={{ maxWidth: "30px", paddingTop: "6px" }} />
        </a>
      </li>
      <li>
        
      </li>
    </ul>
  );
}

export default SignoutLink;
