import React, { useContext, useState } from 'react';
import { TaskContext } from './TaskProvider';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

const SearchTask = () => {
  const { filteredTasks, searchTasks } = useContext(TaskContext);
  const [searchText, setSearchText] = useState('');

  const handleSearchInputChange = (e) => {
    const text = e.target.value;
    setSearchText(text);
    searchTasks(text); // Trigger search function in TaskProvider
  };

  return (
    <div>
      
      <h4 style={{ textAlign: 'center' }}>Task List</h4>

<div>
  <Table striped bordered hover>
    <thead>
      <tr>
        <th>Sr No</th>
        <th>Title</th>
        <th>Description</th>
        <th>DueDate</th>
        <th>Status</th>
        <th>Actions</th>
      </tr>
    </thead>

    <tbody>
      {filteredTasks.map((element, index) => (
        <tr key={element.id}>
          <td>{index + 1}</td>
          <td>{element.title}</td>
          <td>{element.description}</td>
          <td>{element.dueDate}</td>
          <td>{element.status}</td>

          <td style={{ paddingTop: '10px', paddingBottom: '10px' }}>
            <Button variant="danger" style={{ marginRight: '5px' }} onClick={() => handleDelete(element.id)}>DELETE</Button>
            <Button variant="primary" style={{ marginRight: '5px' }} onClick={() => navigate(`/editTask/${element.id}`)} >EDIT</Button>
            <Button variant="warning"onClick={() => handleStatus(element.id)}>Complete</Button>
          </td>
        </tr>
      ))}
    </tbody>
  </Table>
</div>
    </div>
  );
};

export default SearchTask;
