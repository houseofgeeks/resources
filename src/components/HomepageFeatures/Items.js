import React from 'react'

function Items({id , title , imagesrc , description}) {
  return (
    <div className="card" id={id}>
      <div className="upper-container">
        <div className="image-container">
          <img src={imagesrc} alt="" width="100%" height="100%"></img>
        </div>
      </div>
      <div className="lower-container">
        <h3 className="title">{title}</h3>
        <p className='description' style={{ }}>
          {description}
        </p>
      </div>
    </div>
  );
}

export default Items