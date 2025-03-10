import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import NavComp from '../NavComponent/NavComp';
import { useCookies } from 'react-cookie';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const [cookies] = useCookies(['UserName']);
  const [tasks, setTasks] = useState([]); 
  const [categories, setCategories] = useState([{ CategoryId: 0, CategoryName: '' }]);
  const [priorities, setPriorities] = useState([{ PriorityId: 0, PriorityName: '' }]);

  useEffect(() => {
    LoadTasks();
    LoadCategories();
    LoadPriorities();
  }, []);

  function LoadTasks() {
    axios.get(`http://127.0.0.1:5000/tasks`)
      .then(response => setTasks(response.data))
      .catch(error => console.error("Error fetching tasks:", error));
  }

  function LoadCategories() {
    axios.get(`http://127.0.0.1:5000/categories`)
      .then(response => setCategories(response.data))
      .catch(error => console.error("Error fetching categories:", error));
  }

  function LoadPriorities() {
    axios.get(`http://127.0.0.1:5000/priorities`)
      .then(response => setPriorities(response.data))
      .catch(error => console.error("Error fetching priorities:", error));
  }

  function getCategoryName(categoryId) {
    const category = categories.find(cat => cat.CategoryId === Number(categoryId)); 
    return category ? category.CategoryName : "Unknown";
  }

  function getPriorityName(priorityId) {
    const priority = priorities.find(pri => pri.PriorityId === Number(priorityId)); 
    return priority ? priority.PriorityName : "Unknown";
  }

  return (
    <>
      <NavComp />
      <div className='d-flex justify-content-between m-2'>
        <span className='fs-4 fw-bold'>Dashboard</span><span> Welcome... {cookies.UserName} !!!</span>
      </div>
      <h4 style={{ textAlign: 'center' }}>Task's List</h4>
      <div className="container mx-auto">
        <Table striped bordered hover>
          <thead style={{ textAlign: 'center' }}>
            <tr>
              <th>Task Id</th>
              <th>Title</th>
              <th>Description</th>
              <th>Deadline</th>
              <th>Category</th>
              <th>Priority</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody style={{ textAlign: 'center' }}>
            {tasks.map((element,index) => (
              <tr key={index}>
                <td>{element.TaskId}</td>
                <td>{element.TaskName}</td>
                <td>{element.Description}</td>
                <td>{new Date(element.Deadline).toLocaleDateString()}</td>
                <td>{getCategoryName(element.CategoryId)}</td>
                <td>{getPriorityName(element.PriorityId)}</td>
                <td style={{ paddingTop: '10px', paddingBottom: '10px' }}>
                  <Link><Button variant="danger" style={{ marginRight: '5px' }}>DELETE</Button></Link>
                  <Link><Button variant="primary" style={{ marginRight: '5px' }}>EDIT</Button></Link>
                  <Link><Button variant="warning" style={{ marginRight: '5px' }}>Complete</Button></Link>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default Dashboard;
