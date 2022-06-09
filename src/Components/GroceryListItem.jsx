import React, { Component } from 'react';


export default class GroceryListItem extends Component {

    changeStyle= () => {
      return {
        textDecoration:  this.props.item.done ? 'line-through' : 'none'
      }
    }

  render(){
    const { id, itemName } = this.props.item
    console.log(this.props.item)
    return (
      <li className='list-item' style={this.changeStyle()} onClick={this.props.listItemClick.bind(this, id)}>
        {itemName}
      </li>
    )
  }
}
