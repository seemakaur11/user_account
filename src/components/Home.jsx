import React, { useState } from 'react';
import { SlideData } from './SlideData';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa';

const HomePage = (slides) => {
    const [current, setCurrent ] = useState(0);
    const length = SlideData.length;

    const prevSlider = () =>{
        setCurrent(current === 0 ? length - 1 : current - 1);
    }
    const nextSlider = () =>{
        setCurrent(current === length - 1 ? 0 : current + 1);
    }
    if(!!Array.isArray(slides) || slides.length <= 0){
        return null;    
    } 
    return (
        <section className = "slider">
           <FaArrowAltCircleLeft className = "left_arrow" onClick = { prevSlider } />
            <FaArrowAltCircleRight className = "right_arrow" onClick = { nextSlider }/>
           {SlideData.map((slide,index) => {
               return (
                   <div className = 'slide active'> 
                   {index === current && (<img src= {slide.image} alt="description of image" className="image"/>)}
                   </div>
                   )
            })}
        </section>
    )
}
export default HomePage