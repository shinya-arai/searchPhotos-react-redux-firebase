import React from 'react';

const ImageList = ({ photos }) => {
  console.log(photos);
  
  return photos.map(({ id, urls, description }) => {
    return (
      <div key={id} style={{ display: 'flex', alignItems: 'center' }}>
          <div className="ui medium images">
            <div className="ui segment" style={{ margin: '10px', backgroundColor: ' beige', boxShadow: '0 0 10px gray' }}>
              <img  src={urls.regular} alt={description} />
            </div>
          </div>
      </div>
    );
  });
};

export default ImageList;