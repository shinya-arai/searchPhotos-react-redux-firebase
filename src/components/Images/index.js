import React from 'react';
import { ImageWrapper } from '../../styled/Images';

const Images = props => {  
  const { photos } = props;

  return photos.map(({ id, urls, description }) => {
    return (
      <ImageWrapper key={id}>
        <div className="ui medium images">
          <div className="ui segment photo">
            <img src={urls.regular} alt={description} />
          </div>
        </div>
      </ImageWrapper>
    );
  });
};

export default Images;