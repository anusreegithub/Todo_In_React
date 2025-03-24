import { useState } from "react";
import "../App.css";

const AddTask = ({ addTask,allTasks }) => {
  const [value, setValue] = useState("")


  const addItem = () => {
    if (allTasks.some(task => task.title.toLowerCase() === value.toLowerCase())) {
      alert("Task already exists!");
      return; 
    }
    addTask(value)
    setValue("")
  }

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      addItem()
    }
  }

  return (
    <div className="add-task-container">
      <h1>Todo List</h1>
      <div className="add-task-input">
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Add a new task..."
        />
        <button className="add-btn" onClick={addItem}>
          Add
        </button>
      </div>
    </div>
  )
}
export default AddTask;
