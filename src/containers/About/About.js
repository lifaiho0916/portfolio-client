import React from 'react';
import FeaturedCard from '../../components/FeaturedCard/FeaturedCard';
import Node from '../../images/node-js-hexagon-wallpaper-preview.jpg'
import code from '../../images/code.jpg'
import ReactLogo from '../../images/react-logo.png'

import './About.css'

function Features() {

  

  return (
    <div className="features-container col-12" id='features-container'>
      <div className='features-wrapper'>
        <div className='row'>
          <h1 className='display-3 text-center col-12'>Features</h1>
        </div>
        <div className='row' style={{ margin: '0 auto', width: '90%' }}>
          {/* {featured.map((item, i) => (
            <FeaturedCard
              {...featured}
              key={i}
              src={item.src}
              alt={item.alt}
              id={item.id}
              text={item.text}
              title={item.title}
              className={item.className}
            />
          ))} */}
        </div>
      </div>
    </div>
  );
}

export default Features;