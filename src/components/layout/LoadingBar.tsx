import React, { useContext } from 'react';
import { LoadingContext } from '../../store/contexts/LoadingContext';

function LoadingBar() {
  const {isLoading} = useContext(LoadingContext);
  return isLoading ? (
    <div className="progress orange darken-2" style={{ margin: 0 }}>
      <div className="indeterminate"></div>
    </div>
  ) : (
    <div></div>
  );
}

export default LoadingBar;
