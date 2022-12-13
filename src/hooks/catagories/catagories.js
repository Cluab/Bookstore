import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../../redux/catagories/catagories';
// adding Catagories page for use
export default function Catagories() {
  const status = useSelector((state) => state.cat);
  const dispatch = useDispatch();
  return (
    <>
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          dispatch(checkStatus());
        }}
      >
        Check status

      </button>
      <p>{status}</p>
    </>
  );
}
