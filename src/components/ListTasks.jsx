import React, { useState } from "react";
import "../App.css";

const ListTasks = ({ allTasks, index, removeTask, editTask, updateTask, completeTask, undoTask }) => {
  const [editValue, setEditValue] = useState(allTasks.title);

  const handleUpdate = () => {
    updateTask(index, editValue);
  };



  return (
    <div className="task-item">
      {allTasks.isEditing ? (
        <div className="edit-task">
          <input
            type="text"
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
          />
          <button className="save-btn" onClick={handleUpdate}>
            Save
          </button>
        </div>
      ) : (
        <div className="task-content">
          <span className="task-title">{index + 1}. {allTasks.title}</span>
          <div className="task-actions">
            {!allTasks.completed ? (
              <>
                <button className="edit-btn" onClick={() => editTask(index)}>Edit</button>
                <button className="delete-btn" onClick={() => removeTask(index)}>Delete</button>
                <button className="complete-btn" onClick={() => completeTask(index)}>Done</button>
              </>
            ) : (
              <button className="undo-btn" onClick={() => undoTask(index)}>Undo</button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ListTasks;
