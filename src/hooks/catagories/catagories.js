import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../../redux/catagories/catagories';
import './catagories.css';
// adding Catagories page for use
// importing useSelectore for using the stored data
// import dispatch and redux action for hook

export default function Catagories() {
  // consting the data so we can use it's content
  const status = useSelector((state) => state.cat);

  // consting dispatch to be used in click event
  const dispatch = useDispatch();
  return (
    <div className="status-container">
      <button
        className="status-btn"
        type="button"
        onClick={(e) => {
          e.preventDefault();
          dispatch(checkStatus());
        }}
      >
        Check status

      </button>
      <h1 className="status">{status}</h1>
    </div>
  );
}
