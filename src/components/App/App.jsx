// import { Component } from 'react';
// import { nanoid } from 'nanoid';

import {
  Container,
  Grid,
  GridItem,
  Header,
  SearchForm,
  Section,
  Text,
  Todo,
} from 'components';
import { useSelector } from 'react-redux';
import { selectTodos } from '../../redux/slice.js';
import Filter from 'components/Filter/Filter.jsx';
import { selectText } from '../../redux/filterSlice.js';

export const App = () => {
  const todos = useSelector(selectTodos);
  const filter = useSelector(selectText);

  const filteredTodos = () =>
    todos.filter(todo =>
      todo.text.toLowerCase().includes(filter.toLowerCase())
    );

  return (
    <>
      <Header />
      <Section>
        <Container>
          <SearchForm />
          <Filter />

          {filteredTodos.length === 0 && (
            <Text textAlign="center">There are no any todos ... </Text>
          )}

          <Grid>
            {filteredTodos.length > 0 &&
              filteredTodos.map((todo, index) => (
                <GridItem key={todo.id}>
                  <Todo id={todo.id} text={todo.text} counter={index + 1} />
                </GridItem>
              ))}
          </Grid>
        </Container>
      </Section>
    </>
  );
};
