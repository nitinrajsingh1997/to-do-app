import React from 'react';
import logo from './logo.svg';
import './App.css';
import List from './list.js';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

library.add(faTrash);

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      items:[],
      currentItem:{
        text: "",
        key: ""
      }
    }
    this.handleInput = this.handleInput.bind(this);
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }
  handleInput(e){
    this.setState({
      currentItem:{
        text: e.target.value,
        key: Date.now()
      }
    })
  }
  addItem(e){
    e.preventDefault();
    const newItem = this.state.currentItem;
    console.log(newItem);
    if(newItem.text !== ""){
      const newItems = [...this.state.items, newItem];
      this.setState({
        items: newItems,
        currentItem: {
          text: "",
          key: ""
        }
      })
    }
  }
  deleteItem(key){
    const filteredItems = this.state.items.filter(item => 
      item.key !== key);
      this.setState({
        items: filteredItems
      })
  }
  render(){
    return(
      <div className="App">
        <header>
        <form id="form" onSubmit={this.addItem} >
          <input type="text" placeholder="Enter Text" value={this.state.currentItem.text} onChange={this.handleInput} />
          <button type="submit">Add</button>
        </form>
        </header>
        <List items = {this.state.items} deleteItem = {this.deleteItem} ></List>
      </div>
    );
  }
}

export default App;
