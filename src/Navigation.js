import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navigation.module.css';

function Navigation() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // отправить http-запрос к API и обработать результаты поиска
  };

  return (
    <nav className={styles.nav}>
      <ul className={styles.nav__list}>
        <li className={styles.nav__item}>
          <Link to="/" className={styles.nav__link}>
            Главная
          </Link>
        </li>
        <li className={styles.nav__item}>
          <Link to="/wishlist" className={styles.nav__link}>
            Список желаемого
          </Link>
        </li>
      </ul>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchTerm}
          onChange={handleChange}
          placeholder="Поиск книг"
          className={styles.nav__searchInput}
        />
        <button type="submit" className={styles.nav__searchButton}>
          Искать
        </button>
      </form>
    </nav>
  );
}

export default Navigation;
