import { insertDotInBigNumber } from '../../utils/utils';
import styles from './CountryItem.module.css';

export default function CountryItem({ country }) {
  if (!country) return null;

  return (
    <div className={styles.card}>
      <div className={styles.leftBar}>
        <img className={styles.flag} src={country.flag} alt={country.name} />
        <a href={`https://en.wikipedia.org/wiki/${country.name}`} target="_blank" rel="noreferrer">
          See on Wikipedia
        </a>

        {country.latlng && (
          <a
            href={`http://maps.google.com/maps?q=${country.latlng[0]},${country.latlng[1]}`}
            target="_blank"
            rel="noreferrer"
          >
            See on Google Maps
          </a>
        )}
      </div>
      <div className={styles.cardBody}>
        <h3>{country.name}</h3>
        <ul>
          <li>
            <strong>Population:</strong> {insertDotInBigNumber(country.population)}
          </li>
          <li>
            <strong>Region:</strong> {country.region}
          </li>
          <li>
            <strong>Capital:</strong> {country.capital}
          </li>
          <li>
            <strong>Native Name:</strong> {country.nativeName}
          </li>
        </ul>
      </div>
    </div>
  );
}
