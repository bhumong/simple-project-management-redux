import React from 'react';
import { Redirect, Route } from 'react-router-dom';

function MustLogoutRoute ({component: Component, user, ...rest} : any) {
  return (
    <Route
      {...rest}
      render={(props) => (!user) ? <Component {...props} />: <Redirect to='/' />}
    />
  )
}
export default MustLogoutRoute;