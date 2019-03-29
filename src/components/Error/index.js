import React from 'react';
import { Icon } from 'react-icons-kit';
import { exclamationTriangle } from 'react-icons-kit/fa/exclamationTriangle';

import { ErrorWrapper } from '../../styled/NotFoundPage';

const NotFoundPage = props => { 
  const { history } = props;

  return (
    <ErrorWrapper>
      <Icon size={100} icon={exclamationTriangle} />
      <div 
        className="ui animated fade button" 
        tabIndex="0" 
        style={{ marginTop: '2rem' }}
        onClick={() => history.push('/')}
      >
        <div className="visible content">
          トップページへ戻る
        </div>
        <div className="hidden content">
          go back!!
        </div>
      </div>
    </ErrorWrapper>
  );
};

export default NotFoundPage;