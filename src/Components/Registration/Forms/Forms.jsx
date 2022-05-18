import React from 'react';
import './Forms.css'

const Forms = () => {
  return (
    <>
      <div className="registration__field">

          <div className="firm__data">
            <h1 className="field__caption">Dane firmy</h1>

            <div className="source__container">
              <div className="label__container">
                <span className="label__caption">Nazwa firmy :</span>
                <input placeholder="Nazwa firmy" type="text" className="input__field"/>
              </div>

              <div className="label__container">
                <span className="label__caption">NIP :</span>
                <input placeholder="Numer NIP" type="text" className="input__field"/>
              </div>

              <div className="label__container">
                <span className="label__caption">Nazws :</span>
                <input placeholder="Nazwa konta" type="text" className="input__field"/>
              </div>
            </div>
          </div>

          <div className="administator">
            <h1 className="field__caption">Administrator</h1>

            <div className="source__container">
              <div className="label__container">
                <span className="label__caption">Imię i nazwisko :</span>
                <input placeholder="Imię i nazwisko" type="text" className="input__field"/>
              </div>

              <div className="label__container">
                <span className="label__caption">Adres email :</span>
                <input placeholder="przykład@domena.pl" type="text" className="input__field"/>
              </div>

              <div className="label__container">
                <span className="label__caption">Telefon :</span>
                <input placeholder="+48 123 456 789" type="text" className="input__field"/>
              </div>
            </div>
          </div>

          <div className="bottom__box">
            <div className="check__holder">
              <h1 className="check__caption">Zgody</h1>
              <div className="check__container">
                <input type="checkbox" />
                <span className="check__description"> Akceptuję regulamin usługi wraz z umową powierzenia przetwarzania danych osobowych </span>
              </div>
              <div className="check__container">
                <input type="checkbox" />
                <span className="check__description">  Akceptuję obowiązujący regulamin licencji </span>
              </div>
              <div className="check__container">
                <input type="checkbox" />
                <span className="check__description">  Akceptuję politykę prywatności </span>
              </div>

            </div>

            <div className="check__holder">
              <h1 className="check__caption">Kontakt</h1>
              <div className="check__container">
                <input type="checkbox" />
                <span className="check__description"> Kontakt SMS </span>
              </div>
              <div className="check__container">
                <input type="checkbox" />
                <span className="check__description"> Kontakt Email </span>
              </div>
              <div className="check__container">
                <input type="checkbox" />
                <span className="check__description"> Kontakt telefoniczny </span>
              </div>

            </div>
            <p className="bottom__title">UWAGA, pola oznaczone * lub zielonym obramowaniem są polami obowiązkowymi.</p>
            
            <div className="confirm__button">Utwórz konto</div>
          </div>

        </div>
    </>
  );
}

export default Forms;
