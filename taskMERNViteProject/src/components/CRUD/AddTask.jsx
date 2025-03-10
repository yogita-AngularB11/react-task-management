import React, { useState, useEffect } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import './AddTask.css';

const AddTask = () => {
    const [categories, setCategories] = useState([{ CategoryId: 0, CategoryName: 'Select Category' }]);
    const [priorities, setPriorities] = useState([{ PriorityId: 0, PriorityName: 'Select Priority' }]);
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            TaskId: '',
            Title: '',
            Description: '',
            Deadline: new Date().toISOString().slice(0, 16),
            CategoryId: '',
            PriorityId: '',
        },
        onSubmit: (task) => {
            axios.post('http://127.0.0.1:5000/add-task', task)
                .then(() => {
                    alert("Task Added Successfully");
                    navigate('/dashboard');
                })
                .catch(error => console.error("Error adding task:", error));
        }
    });

    useEffect(() => {
        axios.get(`http://127.0.0.1:5000/categories`)
            .then(response => setCategories([{ CategoryId: 0, CategoryName: 'Select Category' }, ...response.data]))
            .catch(error => console.error("Error fetching categories:", error));

        axios.get(`http://127.0.0.1:5000/priorities`)
            .then(response => setPriorities([{ PriorityId: 0, PriorityName: 'Select Priority' }, ...response.data]))
            .catch(error => console.error("Error fetching priorities:", error));
    }, []);

    return (
        <Container className="mt-4">
            <Row className="justify-content-center">
                <Col xs={12} md={8} lg={5}>
                    <div className="add-task-container p-4 shadow-lg rounded bg-white">
                        <h2 className="text-center mb-4">Add Task</h2>
                        <Form onSubmit={formik.handleSubmit}>
                            <Form.Group className="mb-3">
                                <Form.Label>Task ID</Form.Label>
                                <Form.Control
                                    type="number"
                                    placeholder="Enter task ID"
                                    name="TaskId"
                                    value={formik.values.TaskId}
                                    onChange={formik.handleChange}
                                    required
                                />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Task Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter task name"
                                    name="TaskName"
                                    value={formik.values.TaskName}
                                    onChange={formik.handleChange}
                                    required
                                />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Description</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={2}
                                    placeholder="Enter task description"
                                    name="Description"
                                    value={formik.values.Description}
                                    onChange={formik.handleChange}
                                    required
                                />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Deadline</Form.Label>
                                <Form.Control
                                    type="datetime-local"
                                    name="Deadline"
                                    value={formik.values.Deadline}
                                    onChange={formik.handleChange}
                                    required
                                />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Category</Form.Label>
                                <Form.Select
                                    name="CategoryId"
                                    value={formik.values.CategoryId}
                                    onChange={formik.handleChange}
                                    required
                                >
                                    {categories.map(category => (
                                        <option key={category.CategoryId} value={category.CategoryId}>
                                            {category.CategoryName}
                                        </option>
                                    ))}
                                </Form.Select>
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Priority</Form.Label>
                                <Form.Select
                                    name="PriorityId"
                                    value={formik.values.PriorityId}
                                    onChange={formik.handleChange}
                                    required
                                >
                                    {priorities.map(priority => (
                                        <option key={priority.PriorityId} value={priority.PriorityId}>
                                            {priority.PriorityName}
                                        </option>
                                    ))}
                                </Form.Select>
                            </Form.Group>

                            <div className="d-flex justify-content-around">
                                <Button variant="primary" type="submit" className="w-25">
                                    Add Task
                                </Button>
                                <Link to='/dashboard' className="w-25">
                                    <Button variant="danger">
                                        Cancel
                                    </Button>
                                </Link>
                            </div>
                        </Form>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default AddTask;
