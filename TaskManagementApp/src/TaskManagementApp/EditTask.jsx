import React, { useContext, useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import './AddTask.css';
import { TaskContext } from './TaskProvider';
import { useNavigate, useParams } from 'react-router-dom';

const EditTask = ({ onSubmit }) => {
  const { id } = useParams();
  const { task,editTask } = useContext(TaskContext)
  const navigate=useNavigate();

  // console.log(id);


  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [status, setStatus] = useState('pending');


  useEffect(()=>{
   const editedTaskValues = task.find(eachTask => eachTask.id === parseInt(id));
    if(editedTaskValues){
      setTitle(editedTaskValues.title)
      setDescription(editedTaskValues.description)
      setDueDate(editedTaskValues.dueDate)
      setStatus(editedTaskValues.status)
     }
  },[task,id])


  

  const handleEdit = (e) => {
    e.preventDefault();
    const editedTask = { id:parseInt(id), title, description, dueDate,status };
    editTask(parseInt(id),editedTask)
    navigate('/')
    // console.log(task);
  };

  return (
    <div className="add-task-container">
      <Container className="add-task-form">
        <h4 style={{ textAlign: 'center' }}>EDIT TASK</h4>

        <Form onSubmit={handleEdit}>
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
              type="date"
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

          <Button variant="primary" type="submit" style={{ alignItems: 'center' }}>
            Edit Task
          </Button>
        </Form>
      </Container>
    </div>
  );
}
export default EditTask