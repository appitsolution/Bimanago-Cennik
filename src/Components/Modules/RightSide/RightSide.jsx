import React, { useState, useEffect } from 'react';
import './RightSide.css'
import {Link} from 'react-router-dom'

const payment = ['MIESIĘCZNE', 'ROCZNE 20% RABATU']
let indexChecker = 0
let percent = 0
let coefPercent = 0
let korepercent = 0
let anfortotal = 0
let korefortotal = 0
let grabFromProps = 3.20

const RightSide = ({ counter, firstButtonCheck, secondButtonCheck, arr, index, rePrice, lastKore, coef }) => {
  const [activePaymentButton, setActivePaymentButton] = useState(0);
  const onActivePaymentButton = (index) => {
    setActivePaymentButton(index);
    indexChecker = index
  }
  
  const FirstModule = (index) => {
    if (firstButtonCheck === true) {
      return (
        <div className="analiza__item">

          <div className="item__holder">
            <h1 className="cart__header">Analiza Biznesowa / <b>{arr[index]}</b></h1>
            <span>+ {lastPrice.toFixed(2)} PLN {firstMonthHide()}</span>
          </div>
          
        </div>
      )
    }
  }

  const SecondModule = () => {
    if (secondButtonCheck === true) {
      return (
        <div className="korespondencja__item">
          <div className="item__holder">
            <h1 className="cart__header">Korespondencja</h1>
            <span>+ {lastKorePrice.toFixed(2)} PLN {firstMonthHide()}</span>
          </div>
        </div>
      );
    }
  }

  const AintPicked = () => {
    if (firstButtonCheck === false && secondButtonCheck === false) {
      return (
        <div className='module__attention'>
          <p className='unpicked__modules'>Wybierz moguły i pakiety żeby zobaczyc przykładową cene</p>
        </div>
      )
    }
  }
  const [lastPrice, setLastPrice] = useState(0);
  const onSetLastPrice = (rePrice) => {
    if (indexChecker === 0) {
      setLastPrice(rePrice * 1);
    }
    if (indexChecker === 1) {
      percent = (rePrice * 12)
      setLastPrice((percent) - (percent / 5));
    }
  }

  const [lastKorePrice, setLastKorePrice] = useState(0);
  const onSetKorePrice = (lastKore) => {
    if (indexChecker === 0) {
      setLastKorePrice(lastKore * 1);
    }
    if (indexChecker === 1) {
      korepercent = (lastKore * 12)
      setLastKorePrice((korepercent) - (korepercent / 5));
    }
  }

  useEffect(() => {
    onSetLastPrice(rePrice);
    onSetKorePrice(lastKore);
    onSetValue();
    onWorkerCoef();
    grabFromProps = coef;
  });

  const [totalValue, setTotalValue] = useState(159.98)
  const onSetValue = () => {
    anfortotal = lastPrice;
    korefortotal = lastKorePrice;
    if (firstButtonCheck && secondButtonCheck) {
      setTotalValue(anfortotal + korefortotal)
    } else {
      if (firstButtonCheck) {
        setTotalValue(anfortotal)
      }
      if (secondButtonCheck) {
        setTotalValue(korefortotal)
      }
      if (firstButtonCheck === false && secondButtonCheck === false) {
        setTotalValue(0)
      }
    }
  }

  const [workerCoef, setWorkerCoef] = useState(3.20);
  const onWorkerCoef = () => {
    if (indexChecker === 0) {
      if (grabFromProps === 0) {
        setWorkerCoef(0)
      } else {
        setWorkerCoef((totalValue / grabFromProps).toFixed(2))
      }
      } else {
        coefPercent = ((totalValue / grabFromProps) * 12);
        setWorkerCoef((coefPercent) - (coefPercent / 5));
      }
    }
    

  const secondMonthHide = () => {
    if (indexChecker === 0) {
      return (
        <span className='second__month__indicator'>/ 1 m-с</span>
      )
    }
  }

  const firstMonthHide = () => {
    if (indexChecker === 0) {
      return (
        <span className='first__month__indicator'>/ 1 m-с</span>
      )
    }
  }

  return (
    <div>
    <div className="main__window">
      <div className="picked__modules">
        <h1 className='top__caption'>Wybrane moduły</h1>
        {AintPicked()}
        {FirstModule(index)}
        {SecondModule()}
      </div>

      <h1 className='lower__caption'>Rozliczenie</h1>
      <div className="button__payment__block">
        <ul className="button__list">
          {
            payment.map((item, index) =>
              (<li
                key={`${item}_${index}`}
                className= {activePaymentButton === index ? 'active__payment__button' : 'disabled__payment__button'}
                onClick = {() =>  onActivePaymentButton(index)}
                >   
                {item}
                </li>)
              )
          }
        </ul>
        </div>

        <div className="bottom_elements">

          <div className="price__holder">
            <h1 className='total__value'>{totalValue.toFixed(2)} PLN</h1>
            {secondMonthHide()}
          </div>

          <p className="slider__indicator">{counter} pracowników</p>
          <p className='worker__price'>{ workerCoef } PLN / 1 PRACOWNIK MIESIĘCZNIE</p>
        </div>

      </div>
      <div className ='description__container'>
          <span className="description__holder">Ceny netto bez VAT</span>
      </div>
      <Link to='/rejestracja' className="admin__button">
        Zacznij korzystać
      </Link>
    </div>
  );

}

export default RightSide;
