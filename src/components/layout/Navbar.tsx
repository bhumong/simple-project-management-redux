import React from 'react';
import { Link } from 'react-router-dom';
import SigninLink from './SigninLink';
import SignoutLink from './SignoutLink';

function Navbar(props: any) {
  const user = props.user ? props.user : null;
  const initial = props.userData?.initals;
  return (
    <nav className='nav-wrapper grey darken-3'>
      <div className='container'>
        <Link to='/' className='brand-logo left'>Mario Plan</Link>
        {!user ? <SignoutLink /> : <SigninLink initial={initial} />}
      </div>
    </nav>
  );
}

export default (Navbar);
