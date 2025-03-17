import { RiSaveLine } from 'react-icons/ri';
import { MdOutlineCancel } from 'react-icons/md';
import { useState } from 'react';

import style from './EditForm.module.css';

export const EditForm = ({
  currentTodo,
  setCurrentTodo,
  onEdit,
  closeEditForm,
}) => {
  const [text, setText] = useState('');

  const handleChange = e => {
    setText(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onEdit({ ...currentTodo, text });
    closeEditForm();
    setCurrentTodo(null);
    // setText('');
    e.target.reset();
  };
  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <button className={style.submitButton} type="submit">
        <RiSaveLine color="green" size="16px" />
      </button>

      <button
        onClick={() => {
          closeEditForm();
          setCurrentTodo(null);
        }}
        className={style.editButton}
        type="button"
      >
        <MdOutlineCancel color="red" size="16px" />
      </button>

      <input
        value={text}
        onChange={handleChange}
        className={style.input}
        placeholder="What do you want to write?"
        name="text"
        required
        autoFocus
      />
    </form>
  );
};
