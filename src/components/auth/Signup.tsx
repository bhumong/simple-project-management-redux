import React from 'react';

class Signup extends React.Component {
  constructor (props : any) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  state = {
    email: '', 
    password: '',
    first_name: '', 
    last_name: '',
  };

  handleChange(e : any) {
    this.setState({
      ...this.state,
      [e.target.id] : e.target.value
    });
  }
  handleSubmit(e : any) {
    e.preventDefault();
  }

  render() {
    return (
      <div className='container'>  
        <form onSubmit={this.handleSubmit} className='white'>
          <h5 className='grey-text text-darken-3'>Sign Up</h5>
         <div className="input-field" style={{marginTop: '2%'}}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" onChange={this.handleChange}/>
          </div>
  
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="text" name="password" id="password" onChange={this.handleChange}/>
          </div>
  
          <div className="input-field">
            <label htmlFor="first_name">First Name</label>
            <input type="text" name="first_name" id="first_name" onChange={this.handleChange}/>
          </div>
  
          <div className="input-field">
            <label htmlFor="last_name">Last Name</label>
            <input type="text" name="last_name" id="last_name" onChange={this.handleChange}/>
          </div>
  
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0 waves-effect waves-dark">
              Signup
            </button>
          </div>
  
        </form>
      </div>
    );
  }
}

export default Signup;
