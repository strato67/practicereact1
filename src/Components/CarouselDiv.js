import React from "react";

const CarouselDiv = ({slideInfo}) =>{
    
    return(<>
    <div id={slideInfo.id} className="carousel-item relative w-full" >
      <img src={slideInfo.img} className="w-full" alt="Image background"/>
      <div className="absolute flex justify-between items-center transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href={slideInfo.prev} className="btn btn-circle">{`<`}</a>
        
        <div className="hero w-2/3 bg-neutral bg-opacity-70 rounded-lg">
          <div className="hero-content text-center  text-neutral-content">
            <div className="">
              <h1 className="text-3xl font-bold">{slideInfo.heading}</h1>
              <p className="py-6">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate, tenetur nisi quisquam incidunt ex, laudantium voluptatibus libero et ut.</p>

            </div>
          </div>
        </div>
        <a href={slideInfo.next} className="btn btn-circle">{`>`}</a>
      </div>
    </div>
  </>);
}

export default CarouselDiv;