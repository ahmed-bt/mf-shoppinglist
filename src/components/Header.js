import React from 'react';

export const Header = ({ title, totalItems }) => {
  return (
    <div className='navbar bg-primary'>
      <h1>{totalItems} items still to buy</h1>
    </div>
  );
};

// add button to add item component
Header.defaultProps = {
  title: 'Shopping List',
  //add icon
};

export default Header;
