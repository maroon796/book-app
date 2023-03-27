import React, { useState } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import SearchResult from './SearchResult';
import Wishlist from './Wishlist';
import styles from './Navigation.module.css';

function Navigation() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showSearch, setShowSearch] = useState(true);

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

  const handleLinkClick = (event) => {
    const path = event.currentTarget.pathname;
    if (path === '/wishlist') {
      setShowSearch(false);
    } else if (path === '/') {
      setShowSearch(true);
    }
  };

  return (
    <>
      <nav className={styles.nav}>
        <ul className={styles.nav__list}>
          <li className={styles.nav__item}>
            <Link to="/" className={styles.nav__link} onClick={handleLinkClick}>
              Головна
            </Link>
          </li>
          <li className={styles.nav__item}>
            <Link to="/wishlist" className={styles.nav__link} onClick={handleLinkClick}>
              Список бажаного
            </Link>
          </li>
        </ul>
        {showSearch && (
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
        )}
      </nav>
      <Switch>
        <Route path="/wishlist">
          <Wishlist />
        </Route>
        <Route path="/">
          {searchResults.length > 0 && <SearchResult searchResults={searchResults} />}
        </Route>
      </Switch>
    </>
  );
}

export default Navigation;
