import { useState } from 'react'

const AddTask = ({ onAdd }) => {
    const [text, setText] = useState('');
    const [day, setDay] = useState('');
    const [reminder, setReminder] = useState(false);


    const handleSubmit = (e) => {
        e.preventDefault();


        if (!text) {
            alert(`Get in Toush to add Task....`)
        }


        onAdd({ text, day, reminder })
        setText('')
        setDay('')
        setReminder(false);
    }
    return (
        <form className='add-form' onSubmit={handleSubmit}>
            <div className='form-control'>
                <label>Task</label>
                <input
                    type='text'
                    placeholder='Add Task'
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
            </div>
            <br />
            <div className='form-control'>
                <label>Day & Time</label>
                <input
                    value={day}
                    onChange={(e) => setDay(e.target.value)}
                    type='text'
                    placeholder='Day And Time' />
            </div>
            <br />
            <br />
            <div className='form-control form-control-check'>
                <label>Set Reminder</label>
                <input
                    checked={reminder}
                    type='checkbox'
                    value={reminder}
                    onChange={(e) => setReminder(e.currentTarget.checked)}
                />

            </div>

            <br />
            <input type='submit' value='Save Task' className='btn btn-block' />
        </form>
    )
}

export default AddTask
