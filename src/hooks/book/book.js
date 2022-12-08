import React, { PureComponent } from 'react';

export default class Book extends PureComponent {
  


     remder(){
  return (
    <>
  <div>
    <h2>{this.props.name}</h2>
  <p>{this.props.name}</p>
  </div>
  <div>
    <button>Remove</button>
  </div>
  
  </>
  );
}}