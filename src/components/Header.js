import React from 'react';

export const Header = ({ title }) => {
  return (
    <div className='navbar bg-primary'>
      <h1>{title}</h1>
    </div>
  );
};

// add button to add item component
Header.defaultProps = {
  title: 'Shopping List',
  //add icon
};

export default Header;
