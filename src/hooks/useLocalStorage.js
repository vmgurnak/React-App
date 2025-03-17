// import { useState, useEffect } from 'react';

export const useLocalStorage = (key, defaultValue) => {
  const [todos, setTodos] = useState(() => {
    return JSON.parse(localStorage.getItem(key)) || defaultValue;
  });
  // Тут повинен бути власний хук для збереження і отримання даних з localStorage
  // Даний хук повинен отримувати key, defaultValue і повертати дані з localStorage,
  // якщо дані були збережені.
  // Якщо в localStorage не були збережені дані з ключем key, то хук повинен повертати defaultValue.
};
