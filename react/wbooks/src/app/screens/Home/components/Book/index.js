import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import logoBook from '../../../../assets/book-cover.png';

import styles from './styles.module.scss';

function Book({ id, title, author }) {
  return (
    <Link style={{ textDecoration: 'none', color: 'black' }} to={`/home/book/${id}`}>
      <div className={styles.bookCover}>
        <img className={styles.bookImage} src={logoBook} alt="Wolox" />
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.author}>{author}</p>
      </div>
    </Link>
  );
}

Book.propTypes = {
  author: PropTypes.string.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func
  }).isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.string
};

export default memo(Book);
