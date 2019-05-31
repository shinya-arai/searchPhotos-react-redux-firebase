import React from 'react';

import { connect } from 'react-redux';

import Skeleton from 'react-loading-skeleton';

import { ImageWrapper } from '../../styled/Images';

const Images = props => {  
  const { photos } = props;

  if(!photos.length) {
    return [2, 1, 4, 3, 5, 6, 8, 7].map(key => {
      return (
        <ImageWrapper key={key}>
          <div className="ui medium images">
            <div className="ui segment photo">
            <Skeleton height={key * 100} width={300} />
            </div>
          </div>
        </ImageWrapper>
      );
    })
  }

  return photos.map((photo, i) => {
    const { urls, description } = photo;

     return (
      <ImageWrapper key={i}>
        <div className="ui medium images">
          <div className="ui segment photo">
            <img src={urls.regular} alt={description} />
          </div>
        </div>
      </ImageWrapper>
    );
  });
};

const mapStateToProps = state => {
  return {
    photos: state.photo.photos,
  };
};

export default connect(mapStateToProps)(Images);