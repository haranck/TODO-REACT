import React, { useState } from "react";

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [ticks, setTicks] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleInputChange = (e) => setNewTask(e.target.value);
  
  const addTask = () => {
    if (newTask.trim()) {
      if (editIndex !== null) {
        const updatedTasks = [...tasks];
        updatedTasks[editIndex] = newTask;
        setTasks(updatedTasks);
        setEditIndex(null);
      } else {
        setTasks([...tasks, newTask]);
        setTicks([...ticks, false]);
      }
      setNewTask("");
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    const updatedTicks = ticks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
    setTicks(updatedTicks);
  };


  const toggleTask = (index) => {
    const updated = [...ticks];
    updated[index] = !updated[index];
    setTicks(updated);
  };

  const editTask = (index) => {
    setNewTask(tasks[index]);
    setEditIndex(index);
  };

  return (
    <div className="todo-container">
      <h1 className="todo-title">📝 To-Do List</h1>
      <div className="todo-input-group">
        <input
          type="text"
          placeholder="Enter a task..."
          value={newTask}
          onChange={handleInputChange}
          className="todo-input"
        />
        <button onClick={addTask} className="todo-add-btn">
          {editIndex !== null ? "Update" : "Add"}
        </button>
      </div>
      <ol className="todo-list">
        {tasks.map((task, index) => (
          <li key={index} className="todo-item">
            <input
              type="checkbox"
              checked={ticks[index]}
              onChange={() => toggleTask(index)}
            />
            <span style={{ textDecoration: ticks[index] ? "line-through" : "none" }}>{task}</span>
            <div className="todo-actions">
              <button onClick={() => deleteTask(index)} className="btn delete">Delete</button>
              <button onClick={() => editTask(index)} className="btn edit">✏️</button>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default TodoList;

