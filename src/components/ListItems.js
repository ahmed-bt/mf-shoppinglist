import React from 'react';
import Item from './Item';

export const ListItems = ({ items, deleteItem }) => {
  return (
    <div>
      <ul>
        {items.map((item) => (
          <li className='p-2 bd-highlight' key={item.name}>
            <Item item={item} deleteItem={deleteItem} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListItems;
