import React from 'react';
import ImageSlider from './ImageSlider';
import { SliderData } from './ImageSliderData';
const Projects = () => {
    return (
        <div>
             <ImageSlider slides={SliderData[0]}/>
             <ImageSlider slides={SliderData[1]}/>
        </div>
    )
}

export default Projects
