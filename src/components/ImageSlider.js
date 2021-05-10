import React from 'react'
function ImageSlider({slides}){
    return (
        <div>
            {slides.map((slide)=>{
                return(
                    <div id="slideContainer">
                                <div id="slider">
            {slide.images.map((slid)=>{
                 return (
                    <input className={slide.radios} type="radio" name="slider" id={slid.Rid} key={slid.ind}></input>
                 )
             })}
             {slide.images.map((slid)=>{

                 return (
                     <label htmlFor={slid.Rid} id={slid.id} key={slid.ind}>
                         <img src={slid.image} alt={slid.alt} width="100%" height="100%"/>
                     </label>
                 )
             })}
         </div>
         <div id="description">
             <h1>{slide.name}</h1>
             <p>{slide.description}</p>
         </div>

                    </div>
                )
            })}
        </div>
)
}
export default ImageSlider
