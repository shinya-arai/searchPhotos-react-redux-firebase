import React from 'react';

import { connect } from 'react-redux';

import Skeleton from 'react-loading-skeleton';

import { ImageWrapper } from '../../styled/Images';

const Images = props => {  
  const { photos } = props;

  return photos.map(({ id, urls, description }) => {
    return (
      <ImageWrapper key={id}>
        {<div className="ui medium images">
          <div className="ui segment photo">
            <img src={urls.regular} alt={description} />
          </div>
        </div> || <Skeleton count={10} />}
      </ImageWrapper>
    );
  });
};

const mapStateToProps = state => {
  return {
    photos: state.photo.photos
  }
}

export default connect(mapStateToProps)(Images);