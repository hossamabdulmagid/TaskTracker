import { Fragment, useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

import './App.css';
import Header from './components/header/Header';
import Tasks from './components/tasks/Tasks';
import AddTask from './components/addtask/AddTask'
const App = () => {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState(
    [
      {
        id: 1,
        text: "Doctors Appointment",
        day: new Date(),
        reminder: true,
      },
      {
        id: 2,
        text: "Meeting At School",
        day: new Date(),
        reminder: true,
      }, {
        id: 3,
        text: "Food Shoping",
        day: new Date(),
        reminder: false,
      }
    ]
  );

  const id = uuidv4(); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'
  console.log(id, `id????????????`)
  const addTask = (task) => {
    console.log(task)
    const newTask = { id, ...task };
    setTasks([...tasks, newTask])
  }
  const deleteTask = id => {
    setTasks(tasks.filter((task) => task.id !== id));

    console.log(id, `text delete`)
  }

  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))
  }
  return (
    <Fragment>
      <div className="container">
        <h4>
          <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
          {showAddTask && <AddTask onAdd={addTask} />
          }          {tasks.length > 0 ?
            <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> :
            'no Tasks To Show!'}
        </h4>
      </div>
    </Fragment>
  );
}

export default App;
