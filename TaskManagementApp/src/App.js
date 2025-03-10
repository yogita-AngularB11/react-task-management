
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Login from './TaskManagementApp/Login';
import SignUp from './TaskManagementApp/SignUp';
import AddTask from './TaskManagementApp/AddTask';

import EditTask from './TaskManagementApp/EditTask';
import CompleteTask from './TaskManagementApp/CompleteTask';
import Dashboard from './TaskManagementApp/Dashboard';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TaskProvider from './TaskManagementApp/TaskProvider';
import TaskCard from './TaskManagementApp/TaskCard';


function App() {
  return (
    <>
      <TaskProvider>
        <Router>
          <Routes>
            <Route exact path='/' element={<Login />}></Route>
            <Route exact path='/dashboard' element={<Dashboard />}></Route>
            <Route exact path='/AddTask' element={<AddTask />}></Route>
            <Route exact path='/EditTask/:id' element={<EditTask />}></Route>
            <Route exact path='/CompleteTask' element={<CompleteTask />}></Route>
            <Route exact path='/Login' element={<Login />}></Route>
            <Route exact path='/SignUp' element={<SignUp />}></Route>
            <Route exact path='/TaskCard/:id' element={<TaskCard />}></Route>
          </Routes>
        </Router>
      </TaskProvider>

    </>
  );
}

export default App;
