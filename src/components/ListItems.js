import React from 'react';
import Item from './Item';

export const ListItems = ({ items }) => {
  return (
    <div>
      <ul>
        {items.map((item) => (
          <li className='p-2 bd-highlight' key={item.id}>
            <Item item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListItems;
