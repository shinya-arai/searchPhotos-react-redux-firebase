import React from 'react';

const ImageList = ({ photos }) => {
  
  return photos.map(({ id, urls, description }) => {
    console.log(photos);
    return (
      <div key={id} style={{ display: 'flex', alignItems: 'center' }}>
          <div className="ui medium images">
            <div className="ui segment" style={{ margin: '10px', backgroundColor: ' beige' }}>
              <img  src={urls.regular} alt={description} />
            </div>
          </div>
      </div>
    );
  });
};

export default ImageList;