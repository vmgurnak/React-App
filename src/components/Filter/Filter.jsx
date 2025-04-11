import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectText, setText } from '../../redux/filterSlice.js';

const Filter = () => {
  const value = useSelector(selectText);
  const dispatch = useDispatch();

  const onChange = event => {
    dispatch(setText(event.currentTarget.value));
  };

  return (
    <div>
      <input type="text" value={value} onChange={onChange} />
    </div>
  );
};

export default Filter;
