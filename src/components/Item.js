import React from 'react';

export const Item = ({ item, deleteItem }) => {
  return (
    <div className='panel panel-primary'>
      <div className='panel-heading'>
        {item.quantity} x {item.name}
      </div>
      <p>{item.description} </p>
      <div className='panel-footer'>
        <form className='form-inline' onSubmit={deleteItem}>
          <button type='submit' className='btn btn-default btn-xs'>
            Remove
          </button>
        </form>
      </div>
    </div>
  );
};

export default Item;
