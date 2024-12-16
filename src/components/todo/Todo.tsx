import React from 'react';

export interface ItemProps {
  text: string | number;
  isCancelled?: boolean;
}

const Item: React.FC<ItemProps> = ({ text, isCancelled }) => {
  return <div>This is an item!</div>;
};

export default Item;
