import React, { useContext } from 'react'
import NavComp from './NavComp'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { TaskContext } from './TaskProvider';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const {task,deleteTask,updateTaskStatus } = useContext(TaskContext)
  const navigate = useNavigate();

  const handleDelete = (id) => {
    deleteTask(id);
};
const handleStatus = (id) => {
console.log(id);
  updateTaskStatus(id); // Call updateTaskStatus with the task id and 'completed' status
};
  return (
    <>
      <NavComp />
      <h4 style={{ textAlign: 'center' }}>Task List</h4>

      <div className="container mx-auto">
        <Table striped bordered hover>
          <thead style={{ textAlign: 'center' }}>
            <tr>
              <th>Sr No</th>
              <th>Title</th>
              <th>Description</th>
              <th>DueDate</th>
              <th>Status</th>
              <th>Category</th>
              <th>Priority</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody style={{ textAlign: 'center' }}>
            {task.map((element, index) => (
              <tr key={element.id}>
                <td>{index + 1}</td>
                <td>{element.title}</td>
                <td>{element.description}</td>
                <td>{element.dueDate}</td>
                <td>{element.status}</td>
                <td>{element.category}</td>
                <td>{element.priority}</td>

                <td style={{ paddingTop: '10px', paddingBottom: '10px' }}>
                  <Button variant="danger" style={{ marginRight: '5px' }}  onClick={() => handleDelete(element.id)}>DELETE</Button>
                  <Button variant="primary" style={{ marginRight: '5px' }} onClick={() => navigate(`/editTask/${element.id}`)} >EDIT</Button>
                  <Button variant="warning" style={{ marginRight: '5px' }} onClick={() => handleStatus(element.id)}>Complete</Button>
                  <Button variant="info" style={{ marginRight: '5px' }}    onClick={() => navigate(`/TaskCard/${element.id}`)}>Details</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  )
}

export default Dashboard
