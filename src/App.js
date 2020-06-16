import React, { useState, useEffect } from 'react';
import './styles.css';
import ListItems from './components/ListItems';
import Header from './components/Header';
import AddItem from './components/AddItem';
import axios from 'axios';
const App = () => {
  const [items, setItems] = useState([
    {
      name: 'Baguette',
      description: 'empty',
      quantity: 2,
    },
  ]);

  // const addListItem = (item) => {
  //   setItems(items.concat(item));
  // };

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get('http://localhost:5004/api/shoppinglist');
      setItems(res.data);
    };
    fetchData();
  }, []);

  const addListItem = async (item) => {
    if (!items.includes(item)) {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      try {
        const res = await axios.post(
          'http://localhost:5004/api/shoppinglist',
          item,
          config
        );
        setItems(items.concat(res.data));
      } catch (err) {
        console.log('ERROR ERROR ABORT');
      }
    } else {
      alert('Product already exists');
    }
  };

  const deleteItem = (id) => {
    setItems((items) => {
      return items.filter((item) => item.id !== id);
    });
  };
  return (
    <div className='App'>
      <Header totalItems={items.length} />
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
