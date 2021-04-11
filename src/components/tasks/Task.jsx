import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { FcAlarmClock } from "react-icons/fc";
import { FiEdit3 } from "react-icons/fi";

const Task = ({ task, onDelete, onToggle }) => {

    return (
        <div className={`task ${task.reminder ? 'reminder text-center conatiner' : ' text-center'}`} onDoubleClick={() => onToggle(task.id)}>
            <h3>
                <FiEdit3 style={{ display: 'inline' }} />{task.text}
                <FaTimes style={{ color: 'red', cursor: 'pointer' }}
                    onClick={() => onDelete(task.id)} />
            </h3>
            <p>
                <FcAlarmClock style={{ display: 'inline' }} /> {task.day.toString()}
            </p>
        </div>
    )
}

export default Task
