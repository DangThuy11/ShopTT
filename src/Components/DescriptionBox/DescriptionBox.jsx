import React from 'react';
import './DescriptionBox.scss';

const DescriptionBox = () => {
  return (
    <div className='description-box'>
        <div className="navigator">
            <div className="nav-box">Description</div>
            <div className="nav-box fade">Review(122)</div>
        </div>
        <div className="description">
                <p>
                    Lorem ipsum dolor sit amet consectetur 
                    adipisicing elit. Nulla mollitia, 
                    tempore alias ut impedit blanditiis veniam 
                    consequatur totam doloribus nihil fugiat. 
                    Beatae eum quae vero 
                    aperiam maiores fugit voluptate voluptatibus.
                </p>
            </div>
    </div>
  )
}

export default DescriptionBox