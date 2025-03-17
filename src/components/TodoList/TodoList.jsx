import { Grid, GridItem, TodoListItem } from '..';

export const TodoList = ({ todos, onDelete, onCurrent, openEditForm }) => {
  return (
    <Grid>
      {todos.map(({ id, text }, index) => (
        <GridItem key={id}>
          <TodoListItem
            text={text}
            index={index}
            onDelete={() => onDelete(id)}
            onCurrent={() => onCurrent(id, text)}
            openEditForm={openEditForm}
          />
        </GridItem>
      ))}
    </Grid>
  );
};
