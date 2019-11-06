import React, { memo } from 'react';
import PropTypes from 'prop-types';

import logoBook from '../../assets/book-cover.png';

import styles from './styles.module.scss';

function DetailOfBook({ match }) {
  return (
    <div>
      <h3>IMAGE ID: {match.params.id}</h3>
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
