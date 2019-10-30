import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

import logoBook from '../../../../assets/book-cover.png';

import styles from './styles.module.scss';

function Book({ title, author }) {
  return useMemo(
    () => (
      <div className={styles.bookCover}>
        <img className={styles.bookImage} src={logoBook} alt="Wolox" />
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.author}>{author}</p>
      </div>
    ),
    [author, title]
  );
}

Book.propTypes = {
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default Book;
