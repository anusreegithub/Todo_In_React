import React, { useState } from "react";
import ListTasks from "./ListTasks";
import AddTask from "./AddTask";
import "../App.css";
import Search from "./Search";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);

  const addTask = (title) => {
    if (title.trim()) {
      setTasks([...tasks, { title, isEditing: false, completed: false }]);
    }
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const editTask = (index) => {
    setTasks(tasks.map((task, i) =>
      i === index ? { ...task, isEditing: !task.isEditing } : task
    ));
  };

  const updateTask = (index, newTitle) => {
    if (newTitle.trim()) {
      setTasks(tasks.map((task, i) =>
        i === index ? { ...task, title: newTitle, isEditing: false } : task
      ));
    }
  };

  const completeTask = (index) => {
    const completedTask = { ...tasks[index], completed: true };
    setCompletedTasks([...completedTasks, completedTask]);
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const undoTask = (index) => {
    const pendingTask = { ...completedTasks[index], completed: false };
    setTasks([...tasks, pendingTask]);
    setCompletedTasks(completedTasks.filter((_, i) => i !== index));
  };

  return (
    <div className="todo-app">
      <div className="todo-container">
       
        <AddTask addTask={addTask} allTasks={tasks} />

        {/* Pending Tasks */}
        <div className="tasks-container">
          <h5>Pending Tasks</h5>
          {tasks.length === 0 ? (
            <div className="empty-state">No tasks yet. Add one above!</div>
          ) : (
            tasks.map((task, index) => (
              <ListTasks
                key={index}
                allTasks={task}
                index={index}
                removeTask={removeTask}
                editTask={editTask}
                updateTask={updateTask}
                completeTask={completeTask}
              />
            ))
          )}
        </div>

        {/* Completed Tasks */}
        <div className="tasks-container">
          <h5>Completed Tasks</h5>
          {completedTasks.length === 0 ? (
            <div className="empty-state">No completed tasks yet.</div>
          ) : (
            completedTasks.map((task, index) => (
              <ListTasks
                key={index}
                allTasks={task}
                index={index}
                undoTask={undoTask}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default TodoList;
