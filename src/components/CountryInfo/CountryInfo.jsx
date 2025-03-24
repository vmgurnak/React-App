// {
// flag,
// capital,
// countryName,
// languages = [],
// population,
// }

import { useLocation } from 'react-router-dom';
import { useRef } from 'react';

import { GoBackBtn } from '..';
import styles from './CountryInfo.module.css';

export const CountryInfo = ({
  country: { flag, capital, countryName, languages = [], population },
}) => {
  const location = useLocation();
  const backLinkRef = useRef(location.state || '/');
  return (
    <div className={styles.wrapper}>
      <GoBackBtn backLinkRef={backLinkRef} />
      <div className={styles.flag}>
        <img className={styles.img} src={flag} alt={countryName} />
      </div>

      <div className={styles.box}>
        <h3 className={styles.capital}>
          Capital: <span className={styles.accent}>{capital}</span>
        </h3>

        <h1 className={styles.title}>{countryName}</h1>

        <p className={styles.details}>
          Population: <span className={styles.accent}>{population}</span>
        </p>

        <p className={styles.details}>
          Languages:{' '}
          <span className={styles.accent}>{languages.join(', ')}</span>
        </p>
      </div>
    </div>
  );
};
