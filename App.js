import React, {useState} from 'react';
import './App.css';

function App() {

  const[newItem, setNewItem] = useState(""); 
  const[items, setItems] = useState([]); 

  function deleteItem(id) {
    const newArray = items.filter(item => item.id !== id); 
    setItems(newArray); 
  }

  function addItem() {
    if(!newItem) {
      alert("Enter an item.")
    }

    const item = {
      id: Math.floor(Math.random() * 100), 
      value: newItem // we get from input 
    }; 
    setItems(oldList => [...oldList, item]); 

    setNewItem(""); 

    console.log(items)
  }
  return (
    <div className="App">
     <h1>My To Do List</h1>

      <input
      type="text"
      placeholder='Add an item ...'
      value={newItem}
      onChange={e => setNewItem(e.target.value)}
      />

      <button onClick={() => addItem()}>Add</button>
      <ul>
      {items.map(item => {
        return(
          <li key={item.id}>{item.value} <button className='delete-button' onClick={() => deleteItem(item.id)}>X</button></li>
        )
      })}
      </ul>
    </div>
  );
}

export default App;
