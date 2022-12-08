import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class Book extends PureComponent {
  render() {
    const { title, author } = this.props;
    return (
      <>
        <div>
          <h2>{title}</h2>
          <p>{author}</p>
        </div>
        <div>
          <button type="button">Remove</button>
        </div>

      </>
    );
  }
}
Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
