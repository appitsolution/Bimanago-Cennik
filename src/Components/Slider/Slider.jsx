import React, {useState} from 'react';
import './Slider.css'
import LeftSide from '../Modules/LeftSide/LeftSide'

const Slider = () => {
  const [totalPrice, setTotalPrice] = useState(79.99);
  const onTotalPrice = (test) => {
    setTotalPrice(test)
  }

  const [sliderValue, setSliderValue] = useState(13);
  const [counter, setCounter] = useState('26-50')

  const [korePrice, setKorePrice] = useState(79.99);
  const onKorePrice = (kore) => {
    setKorePrice(kore)
  }
  const [coefficient, setCoefficient] = useState(50);
  const onSetCoeficient = (coef) => {
    setCoefficient(coef)
  }

    const onSliderValue = ({target}) => {
      const { value } = target
      setSliderValue(value)
      
      if (value <= 2) {
        setCounter('1-10')
        onTotalPrice(19.00)
        onKorePrice(7.99)
        onSetCoeficient(10)
      } else if (value <= 7) {
        setCounter('10-25')
        onTotalPrice(29.00)
        onKorePrice(39.99)
        onSetCoeficient(25)
      } else if (value <= 13) {
        setCounter('26-50')
        onTotalPrice(79.99)
        onKorePrice(79.99)
        onSetCoeficient(50)
      } else if (value <= 19) {
        setCounter('51-100')
        onTotalPrice(149.99)
        onKorePrice(199.99)
        onSetCoeficient(100)
      } else if (value <= 25) {
        setCounter('101-250')
        onTotalPrice(249.99)
        onKorePrice(299.99)
        onSetCoeficient(250)
      } else if (value <= 31) {
        setCounter('251-500')
        onTotalPrice(449.99)
        onKorePrice(399.99)
        onSetCoeficient(500)
      } else if (value >= 37) {
        setCounter('501+')
        onTotalPrice(999.99)
        onKorePrice(799.99)
        onSetCoeficient(0)
      }      
    }
  

  return (
    <>
      <div className='top__container'>

        <div className="inner__container">
          <h1 className='cennik__caption'>Cennik</h1>

          <div className="slider__container">
            <span className='value__indicator'>1</span>

            <input type="range" min="1" max="37" className="slider" step='6' value={sliderValue} onChange={onSliderValue} />
            
            <span className='value__indicator'>500+</span>
          </div>
          <p className='employee__counter'>Ilość pracowników {counter} osób</p>
        </div>
        
      </div>
      
      <div className="content__box">
        <LeftSide
          count={counter}
          price={totalPrice}
          slide={sliderValue}
          kore={korePrice}
          coef={coefficient}
        />
      </div>
    </>
  );
}

export default Slider;
