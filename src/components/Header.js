import React from 'react';

export const Header = (props) => {
  return (
    <div className='navbar navbar-expand-lg bg-primary'>
      <h1>{props.totalItems} items still to buy</h1>
      <button
        className='btn btn-outline-success my-2 my-sm-0'
        onClick={props.addItem}
      >
        Add item
      </button>
    </div>
  );
};

// add button to add item component
Header.defaultProps = {
  title: 'Shopping List',
  //add icon
};

export default Header;
