import { useCallback, useEffect, useRef, useState } from "react";
import "./imageSlider.css";

const slidesContainerStyles = {
  display: 'flex',
  height: '100%',
  transition: 'transform ease-out 0.5s',
}

const slidesContainerOverflowStyles = {
  overflow: 'hidden',
  height: '100%',
  borderRadius: '30px'
}

const slides = {}

const ImageSlider = ({ slides, parentWidth }) => {
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeRef = useRef(null);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = useCallback(() => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, slides]);

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  const getSlideStylesWithBackground = (slideIndex) => ({
    backgroundImage: `url(${slides[slideIndex].url})`,
    width: `${parentWidth}px`,
  })

  const getSliderContainerStylesWithWidth = () => ({
    ...slidesContainerStyles,
    width: parentWidth * slides.length,
    transform: `translateX(${-(currentIndex * parentWidth)}px)`
  })

  useEffect(() => {
    if (timeRef.current) {
      clearTimeout(timeRef.current);
    }

    timeRef.current = setTimeout(() => {
      goToNext();
    }, 2000)

    return (() => {
      clearTimeout(timeRef.current)
    })
  }, [goToNext])

  return (
    <div className="slider">
      <div>
        <div onClick={goToPrevious} className="left-arrow">
          ❰
        </div>
        <div onClick={goToNext} className="right-arrow">
          ❱
        </div>
      </div>

      <div className="slides-container-overflow" style={slidesContainerOverflowStyles}>
        <div className="slider-container" style={getSliderContainerStylesWithWidth()}>
          {slides.map((_, slideIndex) => (
            <div 
              className="slide"
              key={slideIndex} 
              style={getSlideStylesWithBackground(slideIndex)} 
            />
          ))}
        </div>
      </div>

      <div className="dot-container">
        {slides.map((_, slideIndex) => (
          <div
            className={`dot ${currentIndex === slideIndex ? "active" : ""}`}
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
          >
            ●
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;