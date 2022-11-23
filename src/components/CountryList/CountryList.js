import autoAnimate from '@formkit/auto-animate';
import { useEffect, useRef, useState } from 'react';
import CountryItem from '../CountryItem';
import styles from './CountryList.module.css';

export default function CountryList({ countries }) {
  const [page, setPage] = useState(1);
  const parent = useRef(null);

  const handleChangePage = (e) => {
    e.preventDefault();

    if (e.target.id === 'next') {
      setPage(page + 1);
    } else {
      setPage(page - 1);
    }
  };
  useEffect(() => {
    setPage(1);
    parent && autoAnimate(parent.current);
  }, [countries]);

  console.log('page', page);
  return (
    <>
      <ul className={styles.countryList} ref={parent}>
        {countries.slice(page * 20 - 20, page * 20).map((country) => (
          <CountryItem key={country.alpha3Code} country={country} />
        ))}
      </ul>

      <div className={styles.pageNumerator}>
        <button id="previous"  className={styles.button}  onClick={handleChangePage} disabled={page === 1}>
          {' '}
          &lt;{' '}
        </button>
        <button className={styles.button}>
          {page}
        </button>
        <button id="next" className={styles.button}  onClick={handleChangePage} disabled={page === Math.ceil(countries.length / 20)}>
          &gt;
        </button>
      </div>
    </>
  );
}
