import React from 'react'

function Items({id , title , imagesrc , description}) {
  return (
    <div className="card-component" id={id} >
      <div className="upper-container">
        <div className="image-container">
          <img src={imagesrc} alt=""  className='communities-logo'></img>
        </div>
      </div>
      <div className="lower-container">
        <h3 className="title">{title}</h3>
        <div className='communities-description'>
        <p className='description' style={{ }}>
          {description}
        </p>

        </div>
      </div>
    </div>
  );
}

export default Items