import React from 'react';

export const AddItem = (props) => {
  return (
    <form onSubmit={console.log('Hi there')} style={{ padding: 20 }}>
      <h3 className='page-header'>Add New Item</h3>
      <div className='form-group'>
        <label htmlFor='itemName'>
          Name <span style={styleRequired}></span>
        </label>
        <input
          type='text'
          className='form-control'
          id='itemName'
          placeholder='Enter name'
          required
          useref='name'
        />
      </div>

      <div className='form-group'>
        <label htmlFor='itemDescription'>Description</label>
        <textarea
          className='form-control'
          name='itemDescription'
          id='itemDescription'
          rows='2'
          placeholder='Enter Description'
          useref='description'
        ></textarea>
      </div>
    </form>
  );
};

const styleRequired = {
  color: '#ffaaaa',
};
export default AddItem;
