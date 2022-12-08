import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
// import PropType for making sure it is string.isRequired
export default class Book extends PureComponent {
  render() {
    const { title, author } = this.props;
    // using discarding for props
    return (
      // return jsx syntax for displaying in html
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

// use propTypes to receiving only strings for props.
Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
