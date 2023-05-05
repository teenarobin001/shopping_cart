import React, { useEffect } from "react";
import {
  nextSlide,
  prevSlide,
  dotSlide,
} from "../../features/slices/SliderSlice";
import { useDispatch, useSelector } from "react-redux";
import { sliderData } from "../../assets/dummyData";

const Slider = () => {
  const slideIndex = useSelector((state) => state.slider.value);  
 
  const dispatch = useDispatch();
 
  const slideLength = sliderData.length;
 

  useEffect(() => {
    
    setTimeout(function(){ 
      dispatch(nextSlide(slideIndex  === slideLength ?  0 : slideIndex + 1)) 
    },10000);

  });

  return (
    <div className="relative pb-3">
      <div>
        {sliderData.map((item, index) => {
          return (
            <div
              key={item.id}
              className={
                parseInt(item.id) === slideIndex
                  ? "opacity-100 duration-700 ease-in-out scale-100"
                  : "opacity-0 duration-700 ease-in-out scale-95"
              }
            >
              <div>
                {parseInt(item.id) === slideIndex &&  ( 
                  <img
                    className="h-[700px] w-full"
                    src={item.img}
                    alt="shoes"
                  /> 
                )}
              </div>
              {/* <div className="text-white font-roboto font-bold">
                {parseInt(item.id) === slideIndex && <p>{item.text}</p>}
              </div> */}
            </div>
          );
        })}
      </div>
      <div className="flex absolute bottom-10 left-[45%]">
        {sliderData.map((item, index) => {
          return (
            <div className="mr-4" key={item.id}>
              <div
                className={
                  index === slideIndex
                    ? "bg-gray-600 border rounded-full p-2  cursor-pointer"
                    : "bg-white border rounded-full p-2 cursor-pointer"
                }
                onClick={() => dispatch(dotSlide(index))}
              ></div>
            </div>
          );
        })}
      </div>
      <button
        className="absolute top-[50%] right-4 p-3 bg-white rounded-full hover:bg-gray-400"
        onClick={() => dispatch(nextSlide(slideIndex + 1))}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>
      <button
        className="absolute top-[50%] left-4 p-3 bg-white rounded-full hover:bg-gray-400"
        onClick={() => dispatch(prevSlide(slideIndex - 1))}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5"
          />
        </svg>
      </button>
    </div>
  );
};

export default Slider;
