import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SearchResult from './SearchResult';
import styles from './Navigation.module.css';

function Navigation() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`http://openlibrary.org/search.json?q=${searchTerm}`);
      const data = await response.json();
      setSearchResults(data.docs);
      setSearchTerm('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <nav className={styles.nav}>
        <ul className={styles.nav__list}>
          <li className={styles.nav__item}>
            <Link to="/" className={styles.nav__link}>
              Головна
            </Link>
          </li>
          <li className={styles.nav__item}>
            <Link to="/wishlist" className={styles.nav__link}>
              Список бажаного
            </Link>
          </li>
        </ul>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={searchTerm}
            onChange={handleChange}
            placeholder="Пошук книг"
            className={styles.nav__searchInput}
          />
          <button type="submit" className={styles.nav__searchButton}>
            Шукати
          </button>
        </form>
      </nav>
      {searchResults.length > 0 && <SearchResult searchResults={searchResults} />}
    </>
  );
}

export default Navigation;
