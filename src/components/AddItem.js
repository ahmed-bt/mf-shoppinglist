import React, { useState } from 'react';
import uuid from 'node-uuid';

var styleRequired = {
  color: '#ffaaaa',
};

const AddItem = (props) => {
  const [item, setItem] = useState({
    id: uuid.v4(),
    date: new Date(),
    name: '',
    description: '',
    quantity: 0,
  });

  const handleSubmitEvent = (event) => {
    event.preventDefault();
    props.addListItem(item);
  };

  return (
    <form onSubmit={handleSubmitEvent}>
      <h3 className='page-header'>Add New Item</h3>

      <div className='form-group'>
        <label htmlFor='listItemName'>
          Name <span style={styleRequired}>*</span>
        </label>
        <input
          type='text'
          className='form-control'
          id='listItemName'
          placeholder='Enter name'
          required
          onChange={(e) => {
            const val = e.target.value;
            setItem((item) => {
              return { ...item, name: val };
            });
          }}
        />
      </div>

      <div className='form-group'>
        <label htmlFor='listItemDescription'>Description</label>
        <textarea
          className='form-control'
          rows='3'
          id='listItemDescription'
          placeholder='Enter description'
          onChange={(e) => {
            const val = e.target.value;
            setItem((item) => {
              return { ...item, description: val };
            });
          }}
        ></textarea>
      </div>

      <div className='form-group'>
        <label htmlFor='listItemQuantity'>
          Quantity <span style={styleRequired}>*</span>
        </label>
        <div className='row'>
          <div className='col-xs-5 col-sm-6 col-md-4'>
            <input
              type='number'
              min='1'
              max='9999'
              step='1'
              defaultValue='1'
              className='form-control'
              id='listItemQuantity'
              required
              onChange={(e) => {
                const val = e.target.value;
                setItem((item) => {
                  return { ...item, quantity: val };
                });
              }}
            />
          </div>
        </div>
      </div>

      <hr />

      <button type='submit' className='btn btn-primary'>
        Add to list
      </button>
      <button type='reset' className='btn btn-link'>
        Cancel
      </button>
    </form>
  );
};

export default AddItem;
