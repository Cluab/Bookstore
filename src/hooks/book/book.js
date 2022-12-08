import React, { PureComponent } from 'react';

export default class Book extends PureComponent {
  remder() {
    return (
      <>
        <div>
          <h2>{this.props.title}</h2>
          <p>{this.props.author}</p>
        </div>
        <div>
          <button>Remove</button>
        </div>

      </>
    );
  }
}
