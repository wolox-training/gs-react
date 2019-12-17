import React, { memo, useEffect, useReducer } from 'react';
import PropTypes from 'prop-types';
import { CamelcaseSerializer } from 'cerealizr';
import { t } from 'i18next';
import { Link } from 'react-router-dom';

import bookCover from '../../assets/book-cover.png';
import { getDetailBook } from '../../../services/BookServices';

import reducer, { initialState } from './reducer/reducer';
import actionCreators from './reducer/actions';
import styles from './styles.module.scss';

const camelCaseSerializer = new CamelcaseSerializer();

function DetailOfBook({ match }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    getDetailBook(match.params.id).then(response => {
      if (response.ok) {
        dispatch(actionCreators.getDetailOfBokk(camelCaseSerializer.serialize(response)));
      } else {
        alert(JSON.stringify('error', null, 2));
      }
    });
  }, [match.params.id]);

  return (
    <div className={styles.container}>
      <Link to="/home" className={styles.containerBackButton}>
        <p className={styles.backDescription}>{t('DETAILOFBOOK:back')}</p>
      </Link>
      <div className={styles.bookContainer}>
        <div className={styles.bookImageContainer}>
          <img className={styles.bookImage} src={bookCover} alt="Book Image" />
        </div>
        <div className={styles.detailBookContainer}>
          <div className={styles.titleContainer}>
            <h2 className={styles.bookTitle}>{t('DETAILOFBOOK:title')}</h2>
            <p className={styles.bookGenre}>{t('DETAILOFBOOK:gender')}</p>
          </div>
          <div className={styles.descriptionBookContainer}>
            <h3 className={styles.descriptionBookTitle}>{t('DETAILOFBOOK:author')}</h3>
            <p className={styles.descriptionBook}>{state.books && state.books.data.author}</p>
          </div>
          <div className={styles.descriptionBookContainer}>
            <h3 className={styles.descriptionBookTitle}>{t('DETAILOFBOOK:editorial')}</h3>
            <p className={styles.descriptionBook}>{state.books && state.books.data.publisher}</p>
          </div>
          <div className={styles.descriptionBookContainer}>
            <h3 className={styles.descriptionBookTitle}>{t('DETAILOFBOOK:yearOfPublication')}</h3>
            <p className={styles.descriptionBook}>{state.books && state.books.data.year}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

DetailOfBook.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string
    })
  })
};

export default memo(DetailOfBook);
