import React, { useState, useEffect }from 'react';
import './LeftSide.css'
import Rightside from '../RightSide/RightSide';

let indexChecker = 0
let koreToRight = 0
let coefToRight = 0
const LeftSide = ({ count, price, slide, kore, coef}) => {
  const [activeFirstButton, setActiveFirstButton] = useState(true);
  const onActiveFirstButton = () => {
    setActiveFirstButton(!activeFirstButton);
  }

  const [activeSecondButton, setActiveSecondButton] = useState(true);
  const onActiveSecondButton = () => {
    setActiveSecondButton(!activeSecondButton);
  }

 

  const [activeItem, setActiveItem] = useState(0);
  const onActiveItem = (index) => {
    setActiveItem(index);
    indexChecker = index;
  }

  const [changePrice, setChangePrice] = useState(0);
  const onSetPrice = (price) => {
    if (indexChecker === 0) {
      setChangePrice(price * 1);
    }

    if (indexChecker === 1) {

      if (slide >= 13) {
        if (count === '501+') {
          setChangePrice(999.99)
        } else {
          setChangePrice(price+10)
        }
        
      } else {
        if (count === '10-25') {
          setChangePrice(59.99)
        } else {
          setChangePrice(39.99)
        }
      }
    }

    if (indexChecker === 2) {

      if (slide >= 13) {
        if (count === '501+') {
          setChangePrice(999.99)
        } else {
          setChangePrice(price+20)
        }
        
      } else {
        if (count === '10-25') {
          setChangePrice(69.99)
        } else {
          setChangePrice(49.99)
        }
      }
    }
  }

  useEffect(() => {
    onSetPrice(price);
    koreToRight = kore
    coefToRight = coef
  });
  
  const items = ['Lite', 'Manager', 'Expert'];

  return (
    <div className='blocks__container'>

      {/* left__side */}

      <div className="choose__modules">
        <h1 className="main__caption">Wybierz moduły</h1>

          <div className='panel__holder'>
          
            <div className="analiza">
              <h1 className='undercaption'>Analiza Biznesowa</h1>
            
                <div className="title__row">
                  <p className="description">Szybko zapanuj nad finansami Twojego <br /> przedsiębiorstwa.</p>
                  <div className="switcher">
                    <button className = {activeFirstButton ? "position__right" : "position__left"} onClick = {onActiveFirstButton}>
                      <div className="round__switcher"></div>
                    </button>
                  </div>
              
                </div>
                
                <div className="button__holder">
                  <ul className = 'buttons'>
                    {
                      items.map((item, index) =>
                      (<li
                      key={`${item}_${index}`}
                      className= {activeItem === index ? 'active__pick' : 'disabled__pick'}
                      onClick = {() =>  onActiveItem(index)}
                      >   
                      {item}
                      </li>)
                      )
                    }
                 </ul>
        
                </div>
                
              
          </div>
              <div className="korespondencja">
                    <h1 className='undercaption'>Korespondencja</h1>
            
                      <div className="title__row">
                        <p className="description">Twoja korespondencja zawsze dostępna.</p>
                        <div className="switcher">
                          <button className = {activeSecondButton ? "position__right" : "position__left"} onClick = {onActiveSecondButton}>
                            <div className="kore__round__switcher"></div>
                          </button>
                        </div>
              
                </div>
              </div>
          </div>
      </div>

      {/* right side */}

      <Rightside counter={count}
        firstButtonCheck={activeFirstButton}
        secondButtonCheck={activeSecondButton}
        index={indexChecker}
        arr={items}
        rePrice={changePrice}
        lastKore={koreToRight}
        coef={coefToRight}
      />

    </div>
  );
}

export default LeftSide;
