import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Container from 'react-bootstrap/Container';
import './NavComp.css';
import axios from 'axios';
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';


const NavComp = () => {

  const [categories, setCategories] = useState([{ CategoryId: 0, CategoryName: '' }]);
  const [priorities, setPriorities] = useState([{ PriorityId: 0, PriorityName: '' }]);


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

  useEffect(()=>{
    LoadCategories();
    LoadPriorities();
  },[])

  return (
    <Navbar bg="light" expand="lg" className="bg-body-tertiary p-2">
      <Container fluid>
        {/* <Navbar.Brand href="#home">Task Management App</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Form className="d-flex me-auto">

            <div>
              <InputGroup className="me-2">
                <Form.Control
                  type="text"
                  placeholder="Search Task"
                  aria-label="Search"
                />
              </InputGroup>
            </div>

            <DropdownButton
              id="dropdown-category"
              title="Category"
              variant="primary"
              className="ms-2 me-2"
            >
              {/* <Dropdown.Item >Work</Dropdown.Item>
              <Dropdown.Item >Personal</Dropdown.Item>
              <Dropdown.Item >Other</Dropdown.Item> */}
              {
                categories.map(category=>
                  <Dropdown.Item >{category.CategoryName}</Dropdown.Item>
                )
              }
            </DropdownButton>

            <DropdownButton
              id="dropdown-priority"
              title="Priority"
              variant="primary"
              className="ms-2 me-2"
            >
             {
              priorities.map(priority=>
                <Dropdown.Item >{priority.PriorityName}</Dropdown.Item>
              )
             }
            </DropdownButton>
          </Form>
          <Form className="d-flex">
            <Link to='/addTask'><Button variant="primary" className="me-2 addTaskBtn">
              Add Task
            </Button></Link>
            <Link><Button variant="danger">
              Logout
            </Button></Link>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavComp;
