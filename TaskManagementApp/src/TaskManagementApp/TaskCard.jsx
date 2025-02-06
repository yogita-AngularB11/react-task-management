import React, { useContext, useEffect, useState } from 'react';
import { TaskContext } from './TaskProvider';
import { useNavigate, useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const TaskCard = ({ onClose }) => {
    const navigate = useNavigate();
    const { id } = useParams();
    const { task } = useContext(TaskContext);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [status, setStatus] = useState('pending');

    useEffect(() => {
        const foundTask = task.find(eachTask => eachTask.id === parseInt(id));
        if (foundTask) {
            setTitle(foundTask.title);
            setDescription(foundTask.description);
            setDueDate(foundTask.dueDate);
            setStatus(foundTask.status);
        }
    }, [task, id]);

    const handleNavigate = () => {
        navigate(`/`);
    };

    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <Card style={{ width: '400px' }}>
                <Card.Header>
                    <Card.Title className="text-center">Task Details</Card.Title>
                </Card.Header>
                <Card.Body>
                    <Card.Text>
                        <strong>Title:</strong> {title}
                    </Card.Text>
                    <Card.Text>
                        <strong>Description:</strong> {description}
                    </Card.Text>
                    <Card.Text>
                        <strong>Due Date:</strong> {dueDate}
                    </Card.Text>
                    <Card.Text>
                        <strong>Status:</strong> {status}
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="text-center">
                    <Button variant="secondary" onClick={handleNavigate}>Close</Button>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default TaskCard;
