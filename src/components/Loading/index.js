import React from 'react';

import { LoadingContainer } from '../../styled/Loading';

const Loading = () => {
  return (
    <LoadingContainer className="ui segment">
      <div className="ui active dimmer">
        <div className="ui massive text loader">Loading...</div>
      </div>
      <p></p>
    </LoadingContainer>
  );
};

export default Loading;