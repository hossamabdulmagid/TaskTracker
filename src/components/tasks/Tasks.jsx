import { useState } from 'react'
import Task from './Task'
const Tasks = ({ tasks, onDelete, onToggle }) => {
    console.log(tasks, `props`)
    //    tasks.push({ id: 9, text: 'hello from sawsaw', day: new Date(), reminder: false })

    return (

        <div>
            {
                tasks.map((task) => (
                    <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle} />
                ))
            }
        </div >
    )
}

export default Tasks;
