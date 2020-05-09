const initState = {
  projects: [
    {id: '1', title: 'help me find peach', content: 'blah blah blah'},
    {id: '2', title: 'collect all the stars', content: 'blah blah blah'},
    {id: '3', title: 'egg hunt with yoshi', content: 'blah blah blah'}
  ]
}

const projectReducer = (state = initState, action: any) => {
  switch (action.type) {
    case 'CREATE_PROJECT':
      console.log('created project', action);
      break;

    default:
      break
  }
  
  return state
}

export default projectReducer;