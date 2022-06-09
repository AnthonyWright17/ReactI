import React, { Component } from 'react';
import GroceryList from './Components/GroceryList.jsx';
import './App.css';

class App extends Component {

  state = {
    GroceryList: [
      {
        id: 1,
        itemName: "Banana",
        done: false
      },

      {
        id: 2,
        itemName: "Milk",
        done: false
      }
    ]
  }

  listItemClick = (id) => {
    this.setState({
      GroceryList: this.state.GroceryList.map((item) => {
        if (item.id === id){
          item.done = !item.done
        }
        return item;
      })
    })
  }

  render(){

    return (
      <div className="App">
        <GroceryList GroceryList={this.state.GroceryList} 
        listItemClick={this.listItemClick}/>
      </div>
    );
  }
}

export default App;
