import React, { useState } from 'react';
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa';
import{HomeSliderData} from './HomeSliderData' ;
const HomeSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className='Homeslider'>
      <div className='left-arrow' id="RA" onClick={prevSlide}><FaAngleLeft   /></div>
      <div className='right-arrow' onClick={nextSlide} > <FaAngleRight /></div>
      {HomeSliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          > 
           {index === current && (
              <div className="Images">
                  <div align="center">
                  <img src={slide.image1} alt='travel image' className='image1' />
                  </div>
                  <div align="center">
                  <img src={slide.image2} alt='travel image'  className='image2' />
                  </div>
                  <div align="center">
                  <img src={slide.image1} alt='travel image'  className='image1' />
                  </div>
              </div>
            )}
          </div>
        );
      })}
    </section>
  );
};

export default HomeSlider;
