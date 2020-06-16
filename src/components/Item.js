import React from 'react';

export const Item = ({ item, deleteItem }) => {
  const testEvent = (item) => () => {
    const event = new CustomEvent('test', { data: item });
    window.dispatchEvent(event);
  };

  return (
    <div className='panel panel-primary'>
      <div className='panel-heading'>
        {item.quantity} x {item.name}
      </div>
      <p>{item.description} </p>
      <div className='panel-footer'>
        <form className='form-inline' onSubmit={deleteItem}>
          <button
            type='submit'
            className='btn btn-default btn-xs'
            onClick={testEvent(item)}
          >
            Remove
          </button>
        </form>
      </div>
    </div>
  );
};

export default Item;
