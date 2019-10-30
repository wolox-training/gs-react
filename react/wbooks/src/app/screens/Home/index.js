import React, { useEffect, useReducer } from 'react';
import { Link } from 'react-router-dom';
import { t } from 'i18next';
import { CamelcaseSerializer } from 'cerealizr';

import logoWolox from '../../assets/LogoWolox.png';
import { getBooks } from '../../../services/BookServices';

import actionCreators from './reducer/actions';
import reducer, { initialState } from './reducer/reducer';
import styles from './styles.module.scss';
import Book from './components/Book';

const clearTokens = () => {
  localStorage.setItem('tokenId', '');
};

const camelCaseSerializer = new CamelcaseSerializer();

function Home() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    getBooks().then(response => {
      if (response.ok) {
        dispatch(actionCreators.getBooks(camelCaseSerializer.serialize(response)));
      } else {
        alert(JSON.stringify(t('HOME:errorGetBooks'), null, 2));
      }
    });
  }, []);

  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <img className={styles.woloxImage} src={logoWolox} alt="Wolox" />
        <Link className={styles.logout} to="/" onClick={clearTokens}>
          {t('HOME:logOut')}
        </Link>
      </nav>
      <div className={styles.listOfBooks}>
        {state.books.data.map(book => (
          <Book key={book.id} title={book.title} author={book.author} />
        ))}
      </div>
    </div>
  );
}

export default Home;
