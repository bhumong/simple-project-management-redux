import React, { useState } from 'react';

function Signin() {
  const [state, setState] = useState({email: '', password: ''});

  const handleChange = (e : any) => {
    setState({
      ...state,
      [e.target.id] : e.target.value
    });
  }
  const handleSubmit = (e : any) => {
    e.preventDefault();
  }

  return (
    <div className='container'>  
      <form onSubmit={handleSubmit} className='white'>
        <h5 className='grey-text text-darken-3'>Sign In</h5>
       <div className="input-field" style={{marginTop: '2%'}}>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" onChange={handleChange}/>
        </div>

        <div className="input-field">
          <label htmlFor="password">Password</label>
          <input type="text" name="password" id="password" onChange={handleChange}/>
        </div>

        <div className="input-field">
          <button className="btn pink lighten-1 z-depth-0 waves-effect waves-dark">
            Login
          </button>
        </div>

      </form>
    </div>
  );
}

export default Signin;
