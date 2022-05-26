import React, {useState} from 'react';
import './Slider.css'
import LeftSide from '../Modules/LeftSide/LeftSide'

const Slider = () => {

  const [sliderValue, setSliderValue] = useState(1);
  const [counter, setCounter] = useState('1-10')


  const onSliderValue = ({ target }) => {
    const value = target.value
    if (value <= 2) {
      setCounter('1-10')
    } else if (value <= 7) {
      setCounter('10-25')
    } else if (value <= 13) {
      setCounter('26-50')
    } else if (value <= 19) {
      setCounter('51-100')
    } else if (value <= 25) {
      setCounter('101-250')
    } else if (value <= 31) {
      setCounter('251-500')
    } else if (value >= 37) {
      setCounter('501+')
    }      
    setSliderValue(value)
  }
  
  return (
    <>
      <div className='top__container'>

        <div className="inner__container">
          <h1 className='cennik__caption'>Cennik</h1>

          <div className="slider__container">
            <span className='value__indicator'>1</span>

            <input type="range" min="1" max="37" className="slider" step='6' value={sliderValue}
               onInput={onSliderValue}/>
            
            <span className='value__indicator'>500+</span>
          </div>
          <p className='employee__counter'>Ilość pracowników {counter} osób</p>
        </div>
        
      </div>
      
      <div className="content__box">
        <LeftSide
          count={counter}
          slide={sliderValue}
        />
      </div>
    </>
  );
}

export default Slider;
