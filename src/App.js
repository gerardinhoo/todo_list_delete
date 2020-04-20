import React, {useState} from 'react';
import TodoList from "./components/todoList"
import './App.css';

const App = () => {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  const handleChange = (e) => {
    const newInputText = e.target.value;
    setInputText(newInputText)  
  }

  const addItem = (e) => {
    e.preventDefault();
    setItems((prevItems) => {
      return ([...prevItems, inputText])
    })
    setInputText("")
  }

  const deleteItem = (id) => {
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id
      })
    })
  }


  return (
    <div className="App">
        <div className="container">
        <div className="heading">
          <h1>To-Do List</h1>
        </div>
        <div className="form">
          <input type="text" onChange={handleChange} value={inputText} />
          <button onClick={addItem}>
            <span>Add</span>
          </button>
        </div>
        <div>
       <ul>
         {items.map((item, i) => {
           return <TodoList  key={i}  item={item} id={i} onDelete={deleteItem} />
         })}
       </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
