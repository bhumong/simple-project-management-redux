import React, { createContext, useState } from 'react';
import ContextBasicInterface from '../../helpers/interfaces/ContextBasicInterface';

export const LoadingContext = createContext({} as ContextBasicInterface);

const LoadingContextProvider = (props: any) => {
  const [isLoading, setLoading] = useState(false);

  const triggerLoading =  (loading? : boolean) => {
    console.log(loading);
    if (loading === false || loading === true) {
      setLoading(loading);
    } else {
      setLoading(!isLoading);
    }
  }

  return (
    <LoadingContext.Provider value={{ isLoading, triggerLoading }}>
      {props.children}
    </LoadingContext.Provider>
  );

}

export default LoadingContextProvider;