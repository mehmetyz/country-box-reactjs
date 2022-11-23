import { useEffect, useState } from 'react';
import { getAllCountries } from './api/fetchApi';
import styles from './app.module.css';
import CountryList from './components/CountryList/CountryList';
import SearchBox from './components/SearchBox';

import { searchCountry } from './utils/utils';

function App() {
  const [countries, setCountries] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState('');

  useEffect(() => {
    getAllCountries().then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        if (searchKeyword.length) {
          setCountries(data.filter((country) => searchCountry(searchKeyword, country)));
        } else {
          setCountries(data);
        }
      }
    });
  }, [searchKeyword]);

  return (
    <div className={styles.App}>
      <div className={styles.container}>
        <SearchBox searchKeyword={searchKeyword} setSearchKeyword={setSearchKeyword} />
        {countries.length ? <CountryList countries={countries} /> : <h1>Searching...</h1>}
      </div>
    </div>
  );
}

export default App;
