import { Fragment, useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Alert from 'react-bootstrap/Alert'
import Header from './components/header/Header';
import Tasks from './components/tasks/Tasks';
import AddTask from './components/addtask/AddTask'
import { useToast } from "@chakra-ui/react"
import { doGetData, doDeleteTask } from './redux/data/dataAction'
import { connect } from 'react-redux'
import { Rapperd } from './App.styles'
const App = ({ doGetData, StateOfData = [], Loading, doDeleteTask }) => {
  const [showAddTask, setShowAddTask] = useState(false);
  const toast = useToast();
  const [tasks, setTasks] = useState([]);

  const [showData, setShowData] = useState(false);

  useEffect(() => {
    doGetData()
    if (!StateOfData) {
      return;
    }
    console.log(StateOfData, `StateOfData`)

    if (StateOfData.length > 0) {

      setTimeout(() => {
        setTasks([...StateOfData])

      }, 1500);
      setShowData(true);

    } else {
      setTasks([])
    }
  }, [doGetData, StateOfData, StateOfData.length]);


  const id = uuidv4(); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'
  console.log(id, `id????????????`)

  const addTask = (task) => {
    console.log(task)
    const newTask = { id, ...task };
    setTasks([...tasks, newTask])
    toast({
      title: "Task Added.",
      description: `We've Added your task ${id} Successful.`,
      status: "success",
      duration: 9000,
      isClosable: true,
      position: 'top-right'
    });
  }

  const deleteTask = (id, task) => {
    doDeleteTask(id)
    setTasks(tasks.filter((task) => task.id !== id));
    toast({
      title: "Task delete.",
      description: `We've delete your task ${id}.`,
      status: "error",
      duration: 9000,
      isClosable: true,
      position: 'top-right',
    })
    console.log(id, `text delete`)
  }

  const toggleReminder = (id) => {
    setTasks(StateOfData.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))
  }
  return (
    <Fragment>
      <Rapperd className="container-fluid">
        <div className="container">
          <h4>
            <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
            {showAddTask && <AddTask onAdd={addTask} />}
            {showData && tasks.length > 0 ?
              <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
              :
              <>
                <br />
                <br />

                <Alert variant='danger' style={{ borderRadius: '15px' }}>
                  no Tasks To Show!
              </Alert>
              </>
            }
          </h4>
        </div>
      </Rapperd>
    </Fragment >
  );
}
const mapStateToProps = state => ({
  StateOfData: state.data.tasks,
  Loading: state.data.pending
});


const mapDispatchToProps = dispatch => ({
  doGetData: () => dispatch(doGetData()),
  doDeleteTask: (id) => dispatch(doDeleteTask(id))
})
export default connect(mapStateToProps, mapDispatchToProps)(App);
