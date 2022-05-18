import React from 'react';
import './Description.css'
import Forms from '../Forms/Forms';

const Description = () => {
  return (
    <div>
      <h1 className="head__caption">Utwórz konto</h1>

      <div className="main__container">

        <div className="description__field">
          <h1 className="description__subtitle">Bi Manago to rewolucyjna aplikacja, która odmieni sposób, w jaki zarządzasz swoją firmą.</h1>
          <p className="middle__title">Korzystanie z tego oprogramowania jest bardzo proste i intuicyjne, dlatego pierwszym krokiem jest po prostu utworzenie nowego konta.</p>

          <ul className="description__list">
            <li className="list__elem">Bi Manago to proste i intuicyjne zarządzanie firmą.</li>
            <li className="list__elem">Analiza Biznesowa pozwoli Ci na dokładne oszacowanie kierunku rozwoju Twojego przedsiębiorstwa.</li>
            <li className="list__elem">Prosty i intuicyjny interfejs zapewnia łatwe zarządzanie skomplikowanymi i złożonymi procesami.</li>
            <li className="list__elem">Zaawansowana architektura zapewnia możliwość szerokiej personalizacji poszczególnych modułów oprogramowania.</li>
            <li className="list__elem">Integralność Bi Manago pozwala na szczegółową analizę wszystkich najważniejszych danych przedsiębiorstwa.</li>
            <li className="list__elem">Najwyższy poziom bezpieczeństwa zapewnia rzetelną i skuteczną ochronę danych firmowych.</li>
          </ul>
        </div>

        <Forms />
        
      </div>

    </div>
  );
}

export default Description;
