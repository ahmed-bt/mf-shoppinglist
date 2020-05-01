import React from 'react';
import './App.css';
import ListItems from './components/ListItems';
import Header from './components/Header';
import AddItem from './components/AddItem';

class App extends React.Component {
  state = {
    items: [
      { id: 1, name: 'Milk', quantity: 2 },
      { id: 2, name: 'Flour', quantity: 1 },
    ],
  };

  updateList = (newList) => {
    this.setState({
      items: newList,
    });
  };

  addItem = (item) => {
    var list = this.state.items;
    list[item.id] = item;
    this.updateList(list);
  };

  deleteItem = (id) => {
    this.setState((items) => {
      return items.filter((item) => item.id !== id);
    });
  };
  render() {
    return (
      <div className='App'>
        <Header />
        <div className='row'>
          <div className='col-sm-6'>
            <ListItems items={this.state.items} deleteItem={this.deleteItem} />
          </div>
          <div className='col-sm-6'>
            <AddItem addItem={this.addItem} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
