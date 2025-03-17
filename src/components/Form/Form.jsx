import { FiSearch } from 'react-icons/fi';
import style from './Form.module.css';
import { useState } from 'react';

export const Form = ({ onSubmit }) => {
  const [text, setText] = useState('');

  const handleChange = e => {
    setText(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!text.trim()) {
      return alert('Ipnput please your task');
    }
    onSubmit(text.trim());
    setText('');
  };
  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <button className={style.button} type="submit">
        <FiSearch size="16px" />
      </button>

      <input
        value={text}
        onChange={handleChange}
        className={style.input}
        placeholder="What do you want to write?"
        name="search"
        autoComplete="off"
        autoFocus
      />
    </form>
  );
};
