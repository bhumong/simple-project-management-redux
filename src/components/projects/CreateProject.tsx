import React from 'react';

class CreateProject extends React.Component {
  state = {
    title: '',
    content: '',
  }

  handleChange = (e : any) => {
    this.setState({
      ...this.state,
      [e.target.id] : e.target.value
    });
  }
  handleSubmit = (e : any) => {
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <div className='container'>
          <form onSubmit={this.handleSubmit} className='white'>
            <h5 className='grey-text text-darken-3'>Create Project</h5>
          <div className="input-field" style={{marginTop: '2%'}}>
              <label htmlFor="title">Title</label>
              <input type="text" name="title" id="title" onChange={this.handleChange}/>
            </div>
  
            <div className="input-field">
              <label htmlFor="content">Project Content</label>
              <textarea id="content" name="content" className="materialize-textarea" onChange={this.handleChange}></textarea>
            </div>
  
            <div className="input-field">
              <button className="btn pink lighten-1 z-depth-0 waves-effect waves-dark">
                Create
              </button>
            </div>
  
          </form>
        </div>
  
      </div>
    );
  }

}

export default CreateProject;
