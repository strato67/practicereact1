import React from "react";
import CarouselDiv from "./CarouselDiv";
import CarouselData from  '../slideInfo.json';

const Carousel = () =>{
  
    return(<>

      <div className="carousel w-full">
        {CarouselData.map((slide)=>{
          return(<CarouselDiv slideInfo={slide} key={slide.id}/>);
        })}

      </div>
  </>);
}

export default Carousel;