import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { FormBtn, InputSearch, SearchFormStyled } from './SearchForm.styled';
import { nanoid } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import { addTodo } from '../../redux/slice';

export const SearchForm = () => {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();

  const handleInput = e => {
    setQuery(e.currentTarget.value);
  };

  const handleSubmit = e => {
    dispatch(addTodo({ id: nanoid(), text: query }));
    e.preventDefault();
    setQuery('');
  };
  return (
    <SearchFormStyled onSubmit={handleSubmit}>
      <FormBtn type="submit">
        <FiSearch size="16px" />
      </FormBtn>
      <InputSearch
        onChange={handleInput}
        placeholder="What do you want to write?"
        name="search"
        required
        value={query}
        autoFocus
      />
    </SearchFormStyled>
  );
};
