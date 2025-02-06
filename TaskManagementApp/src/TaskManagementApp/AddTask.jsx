import React, { useContext, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import './AddTask.css';
import { TaskContext } from './TaskProvider';
import { useNavigate } from 'react-router-dom';

const AddTask = ({ onSubmit }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [status, setStatus] = useState('pending');
    const [category, setCategory] = useState('');
    const [priority, setPriority] = useState('');

    const { addTask } = useContext(TaskContext);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const task = { id: Date.now(), title, description, dueDate, status, category, priority };
        addTask(task);
        navigate('/');

        // onSubmit(task);
    };

    return (
        <div className="add-task-container">
            <Container className="add-task-form">
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formTitle">
                        <Form.Label>Title</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter task title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formDescription">
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={2}
                            placeholder="Enter task description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            required
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formDueDate">
                        <Form.Label>Due Date</Form.Label>
                        <Form.Control
                            type="datetime-local"
                            value={dueDate}
                            onChange={(e) => setDueDate(e.target.value)}
                            required
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formStatus">
                        <Form.Label>Status</Form.Label>
                        <Form.Control
                            type="text"
                            value={status}
                            onChange={(e) => setStatus(e.target.value)}
                            required
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formCategory">
                        <Form.Label>Category</Form.Label>
                        <Form.Control
                            as="select"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            required
                        >
                            <option value="">Select category...</option>
                            <option value="Work">Work</option>
                            <option value="Personal">Personal</option>
                            <option value="Other">Other</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formPriority">
                        <Form.Label>Priority</Form.Label>
                        <Form.Control
                            as="select"
                            value={priority}
                            onChange={(e) => setPriority(e.target.value)}
                            required
                        >
                            <option value="">Select priority...</option>
                            <option value="Low">Low</option>
                            <option value="Medium">Medium</option>
                            <option value="High">High</option>
                        </Form.Control>
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Create Task
                    </Button>
                </Form>
            </Container>
        </div>
    );
};

export default AddTask;
