import React, { Component } from 'react';
import GroceryListItem from './GroceryListItem.jsx';

export default class GroceryList extends Component {
  render(){

    return (

      <div className='grocery-list-container'>
        <h1>Grocery List</h1>
        <ul>
          { this.props.GroceryList.map(
            (item) => (
            <GroceryListItem key={item.id} item={item}
            listItemClick={this.props.listItemClick}/>)
            ) }
        </ul>
      </div>
    );

  }
}

