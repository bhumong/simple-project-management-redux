const CombineReducers = (slices : any) => (prevState : any, action : any) =>
  Object.keys(slices).reduce(
    (nextState, nextProp) => ({
      ...nextState,
      [nextProp]: slices[nextProp](prevState[nextProp], action)
    }),
    prevState
  );


export default CombineReducers;