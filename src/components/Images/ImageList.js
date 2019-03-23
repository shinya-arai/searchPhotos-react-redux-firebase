import React from 'react';

const ImageList = (props) => {
  const PhotoList = props.photos.map(({id, urls, description}) => {
    return (
      <div key={id}>
        <img src={urls.regular} alt={description} />
      </div>
    );
  });

  return (
    <div>
      {PhotoList}
    </div>
  );


};

export default ImageList;