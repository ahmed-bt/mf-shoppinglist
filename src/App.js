import React, { useState } from 'react';
import './App.css';
import ListItems from './components/ListItems';
import Header from './components/Header';
import AddItem from './components/AddItem';

const App = () => {
  const [items, setItems] = useState([
    { id: 1, name: 'Milk', description: '', quantity: 2 },
    { id: 2, name: 'Flour', description: '', quantity: 1 },
  ]);

  const addListItem = (item) => {
    setItems(items.concat(item));
  };

  const deleteItem = (id) => {
    setItems((items) => {
      return items.filter((item) => item.id !== id);
    });
  };
  return (
    <div className='App'>
      <Header />
      <div className='row'>
        <div className='col-sm-6'>
          <ListItems items={items} deleteItem={deleteItem} />
        </div>
        <div className='col-sm-6'>
          <AddItem addListItem={addListItem} />
        </div>
      </div>
    </div>
  );
};

export default App;
