import React from 'react';
import { Redirect } from 'react-router-dom';

function MustLogin(WrappedComponent : any, redirectTo = '/') {
  return (props : any) => {
    let user = props.user ? props.user : null;
    // if (!user) return <Redirect to={redirectTo} />
    return (
      <WrappedComponent {...props} />
    )
  }
}

export default MustLogin;