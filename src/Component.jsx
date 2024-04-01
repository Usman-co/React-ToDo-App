import { useState } from "react";

function Component() {
  const [tasks, setTask] = useState([
    "Keep Fast again ",
    "Eat Break Fast",
    "Make Projects",
    "Write Code now",
  ]);
  const [newTask, setNewTask] = useState();

  function handleAddTask() {
    if (newTask.trim() !== "") {
      setTask((t) => [...t, newTask]);
      setNewTask("");
    }
  }

  function handlenInputTask(event) {
    setNewTask(event.target.value);
  }
  function handleDeleteTask(index) {
    setTask((t) => t.filter((_, i) => i !== index));
  }
  function handleUpTask(index) {
    if (index > 0) {
      const upDateTask = [...tasks];
      [upDateTask[index], upDateTask[index - 1]] = [
        upDateTask[index - 1],
        upDateTask[index],
      ];
      setTask(upDateTask);
    }
  }
  function handleDownTask(index) {
    if (index < tasks.length - 1) {
      const upDateTask = [...tasks];
      [upDateTask[index], upDateTask[index + 1]] = [
        upDateTask[index + 1],
        upDateTask[index],
      ];
      setTask(upDateTask);
    }
  }
  return (
    <div className="To-Do-container">
      <h1> To-Do-List</h1>
      <div>
        <input
          type="text"
          placeholder="Enter task..."
          onChange={handlenInputTask}
          value={newTask}
        />
        <button onClick={handleAddTask} className="add-button">
          Add
        </button>
        <ol>
          {tasks.map((task, index) => (
            <li key={index}>
              {task}
              <button
                onClick={() => handleDeleteTask(index)}
                className="delete-button"
              >
                Delete
              </button>
              <button
                onClick={() => handleUpTask(index)}
                className="move-button"
              >
                ☝️
              </button>
              <button
                onClick={() => handleDownTask(index)}
                className="move-button"
              >
                👇
              </button>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default Component;
