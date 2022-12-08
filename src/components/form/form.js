import React, { PureComponent } from 'react';

export default class Form extends PureComponent {
  render() {
    return (
    // return jsx syntax for displaying in html
      <>
        <h3>ADD NEW BOOk</h3>
        <form>
          <input id="Title" type="text" placeholder="Book title" />
          <input id="Author" type="text" placeholder="author" />
          <button type="submit">ADD BOOK</button>
        </form>

      </>

    );
  }
}
