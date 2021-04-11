import { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
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
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>tasks</Form.Label>
                <Form.Control
                    type='text'
                    placeholder='Add Task'
                    value={text}
                    onChange={(e) => setText(e.target.value)} />

            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Day & Time</Form.Label>
                <Form.Control
                    value={day}
                    onChange={(e) => setDay(e.target.value)}
                    type='text'
                    placeholder='Day And Time' />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="set Reminder" checked={reminder}
                    type='checkbox'
                    value={reminder}
                    onChange={(e) => setReminder(e.currentTarget.checked)} />
            </Form.Group>
            <Button variant="primary" type='submit' value='Save Task' className='btn btn-block'>
                Submit
        </Button>
        </Form>

    )
}

export default AddTask
