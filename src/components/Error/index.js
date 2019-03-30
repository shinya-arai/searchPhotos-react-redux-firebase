import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'react-icons-kit';
import { exclamationTriangle } from 'react-icons-kit/fa/exclamationTriangle';

import { ErrorWrapper, ErrorText } from '../../styled/NotFoundPage';

const NotFoundPage = () => { 
  return (
    <ErrorWrapper>
      <ErrorText>404 Not Found</ErrorText>
      <Icon size={100} icon={exclamationTriangle} />
      <Link
        className="ui animated fade button" 
        tabIndex="0" 
        style={{ marginTop: '2rem' }}
        to='/'
      >
        <div className="visible content">
          トップページへ戻る
        </div>
        <div className="hidden content">
          go back!!
        </div>
      </Link>
    </ErrorWrapper>
  );
};

export default NotFoundPage;