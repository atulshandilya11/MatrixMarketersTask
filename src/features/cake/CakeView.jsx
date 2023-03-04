import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ordered, restocked } from './cakeSlice';

export const CakeView = () => {
  const numOfCakes = useSelector((state) => state.cake.numOfCakes);
  const dispatch = useDispatch();
  return (
    <div>
      <h3>
        We have an offer..when you order a cake we will give you a
        free ice cream
      </h3>
      <h2>Number of cakes - {numOfCakes}</h2>
      <div>
        {' '}
        <button onClick={() => dispatch(ordered())}>
          Order Cake
        </button>
        <br />
        <br />
        <button onClick={() => dispatch(restocked(5))}>
          Restock Cakes By 5
        </button>
      </div>
    </div>
  );
};
