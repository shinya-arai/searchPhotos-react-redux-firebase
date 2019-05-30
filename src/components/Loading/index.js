import React from 'react';

import { LoadingContainer } from '../../styled/Loading';

const Loading = () => {
  return (
    <LoadingContainer>
      <div className="spinner">
        <div className="dot1"></div>
        <div className="dot2"></div>
      </div>
    </LoadingContainer>
  );
};

export default Loading;