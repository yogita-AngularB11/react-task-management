// import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/Login/Login'
import Dashboard from './components/Dashboard/Dashboard'
import NavComp from './components/NavComponent/NavComp'
import AddTask from './components/CRUD/AddTask'



function App() {
  return (
    <div className='container-fluid'>
      <BrowserRouter>
        <header className='bg-primary text-white p-2 text-center'>
          <h2>Task Management App</h2>
        </header>

        {/* section part */}
        <section>
          <Routes>
            <Route path='/' element={<Login />}></Route>
            <Route path='dashboard' element={<Dashboard />} />
            <Route path='navbar' element={<NavComp />} />
             <Route exact path='addTask' element={<AddTask />}></Route>
           {/* <Route exact path='/EditTask/:id' element={<EditTask />}></Route>
            <Route exact path='/CompleteTask' element={<CompleteTask />}></Route>
            <Route exact path='/Login' element={<Login />}></Route>
            <Route exact path='/SignUp' element={<SignUp />}></Route>
            <Route exact path='/TaskCard/:id' element={<TaskCard />}></Route> */}
          </Routes>
        </section>
      </BrowserRouter>
    </div>
  )
}

export default App
