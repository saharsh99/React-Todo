import React from 'react';
import './App.css';

class Todo extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      newItem : "",
      list : [],
    }
  }

  addItem(todoValue){
    if(todoValue !== ""){
      const newItem = {
        id: Date.now(),
        value: todoValue,
        isDone: false
      }
      const list = [...this.state.list]
      list.push(newItem)

      this.setState({
        list,
        newItem: ""
      })
    }
  }

  deleteItem(id){
    const list = [...this.state.list]
    const updatedlist = list.filter(item => item.id !== id)
    this.setState({list:updatedlist})
  }

  updateInput(input){
    this.setState({newItem:input})
  }

  render() {
    return(
      <div className="container">
        <h1>Todo List</h1>
        <div>
          Add an Item.....  
          <br/>
          <input type="text"
           placeholder="Write Todo"
           required
           value={this.state.newItem}
           onChange = { (e) => this.updateInput(e.target.value)}
           />
          <button 
          onClick={()=>this.addItem(this.state.newItem)}
          disabled={!this.state.newItem.length}
          >Add</button>
          <div>
          <ul className="un-list" type="none">
            {this.state.list.map(item=>{
              return(

                <li className="set-li" key={item.id}>
                  
                  {item.value+"  "}   
                  <button className="btn" onClick={()=>this.deleteItem(item.id)}>Delete</button>
                </li>

              );
            })}
          </ul>
      
        </div>
        </div>

      </div>
    )
  }
}


function App() {
  return (
    <div className="App">
      <Todo />
      
    </div>
  );
}

export default App;
