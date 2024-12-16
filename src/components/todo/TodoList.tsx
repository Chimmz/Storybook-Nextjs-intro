import React from 'react';
import { ItemProps } from './Todo';

interface TodoListProps {
  items: Array<ItemProps>;
}

const TodoList: React.FC = props => {
  return <>A List</>;
};

export default TodoList;
