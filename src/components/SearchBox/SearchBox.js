import { memo } from 'react';
import styles from './SearchBox.module.css';

function SearchBox({ searchKeyword, setSearchKeyword }) {
  console.log('Search box is rendering...');

  const handleChange = (e) => {
    setSearchKeyword(e.target.value);
  };

  return (
    <div className={styles.searchArea}>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="Search country..."
          value={searchKeyword}
          onChange={handleChange}
        />
      </form>
    </div>
  );
}   

export default memo(SearchBox);
