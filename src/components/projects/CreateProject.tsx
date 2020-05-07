import React, { useState, useContext } from 'react';
import { ProjectContext } from '../../store/contexts/PorjectContext';
import { LoadingContext } from '../../store/contexts/LoadingContext';

function CreateProject() {
  const {dispatch} = useContext(ProjectContext);
  const {triggerLoading} = useContext(LoadingContext);
  const [state, setState] = useState({
    title: '', 
    content: '',
  });

  const handleChange = (e : any) => {
    setState({
      ...state,
      [e.target.id] : e.target.value
    });
  }
  const handleSubmit = (e : any) => {
    e.preventDefault();
    dispatch({type: 'ADD', title: state.title, content: state.content, triggerLoading, setState});
  }

  return (
    <div>
      <div className='container'>
        <form onSubmit={handleSubmit} className='white'>
          <h5 className='grey-text text-darken-3'>Create Project</h5>
        <div className="input-field" style={{marginTop: '2%'}}>
            <label htmlFor="title">Title</label>
            <input type="text" name="title" id="title" onChange={handleChange}/>
          </div>

          <div className="input-field">
            <label htmlFor="content">Project Content</label>
            <textarea id="content" name="content" className="materialize-textarea" onChange={handleChange}></textarea>
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

export default CreateProject;
