import { RiDeleteBinLine, RiEdit2Fill } from 'react-icons/ri';
import { Text } from 'components';
import { DeleteButton, EditButton, TodoWrapper } from './Todo.styled';
import { useDispatch } from 'react-redux';
import { editTodo, removeTodo } from '../../redux/slice.js';

export const Todo = ({ text, counter, onClick, id }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(removeTodo(id));
  };

  const handleEdit = () => {
    const newText = prompt('Enter new text', text);
    dispatch(editTodo({ id, text: newText }));
  };

  return (
    <>
      <TodoWrapper>
        <Text textAlign="center" marginBottom="20px">
          TODO #{counter}
        </Text>
        <Text>{text}</Text>
        <DeleteButton type="button" onClick={handleDelete}>
          <RiDeleteBinLine size={24} />
        </DeleteButton>
        <EditButton type="button" onClick={handleEdit}>
          <RiEdit2Fill size={24} />
        </EditButton>
      </TodoWrapper>
    </>
  );
};
