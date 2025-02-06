import React, { useContext, useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Container from 'react-bootstrap/Container';
import './NavComp.css';
import { useNavigate } from 'react-router-dom';
import { TaskContext } from './TaskProvider';




const NavComp = () => {
const {filteredTasks,filterTasksBy}=useContext(TaskContext);
  const navigate = useNavigate();
  //-----------------------code for search bar------------------
  
    const [ searchQuery, setSearchQuery ] = useState('');
    //----------------------------------------------------------
    const [selectedCategory, setSelectedCategory] = useState(null); // State for selected category
  const [selectedPriority, setSelectedPriority] = useState(null); // State for selected priority
  
    const handleChange = (e) => {
      var lowerCase = e.target.value.toLowerCase();
      setSearchQuery(lowerCase);
      filteredTasks(lowerCase);
    };

  //-----------------CODE FOR FILTERING TASKS-------------------
  // const handleFilterSelect = (filterType) => {
  //   // Implement logic to filter tasks based on filterType
  //   filterTasksBy(filterType);
  // }; 
  //------------------------------------------------------------
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    // Implement logic to filter tasks by category
    filterTasksBy(category)
    // console.log(`Category selected: ${category}`);
  };

  const handlePrioritySelect = (priority) => {
    setSelectedPriority(priority);
    // Implement logic to filter tasks by priority
    filterTasksBy(priority)
    // console.log(`Priority selected: ${priority}`);
  };


  return (
    <Navbar bg="light" expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#home">Task Management App</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Form className="d-flex me-auto">
            <div>
              <InputGroup className="me-2">
                <Form.Control
                  type="text"
                  placeholder="Search Task"
                  aria-label="Search"
                  value={searchQuery}
                  onChange={handleChange}
                />
              </InputGroup>

            </div>
            <DropdownButton
              id="dropdown-category"
              title={selectedCategory ? `Category: ${selectedCategory}` : 'Category'}
              variant="secondary"
              className="ms-2 me-2"
            >
              <Dropdown.Item onClick={() => handleCategorySelect('Work')}>Work</Dropdown.Item>
              <Dropdown.Item onClick={() => handleCategorySelect('Personal')}>Personal</Dropdown.Item>
              <Dropdown.Item onClick={() => handleCategorySelect('Other')}>Other</Dropdown.Item>
            </DropdownButton>
            <DropdownButton
              id="dropdown-priority"
              title={selectedPriority ? `Priority: ${selectedPriority}` : 'Priority'}
              variant="secondary"
              className="ms-2 me-2"
            >
              <Dropdown.Item onClick={() => handlePrioritySelect('Low')}>Low</Dropdown.Item>
              <Dropdown.Item onClick={() => handlePrioritySelect('Medium')}>Medium</Dropdown.Item>
              <Dropdown.Item onClick={() => handlePrioritySelect('High')}>High</Dropdown.Item>
            </DropdownButton>
          </Form>
          <Form className="d-flex">
            <Button variant="primary" className="me-2 addTaskBtn" onClick={() => { navigate('/addTask') }}>
              Add Task
            </Button>
            <Button variant="danger">
              Logout
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavComp;
