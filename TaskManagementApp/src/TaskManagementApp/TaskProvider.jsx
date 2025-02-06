import React, { createContext, useState } from "react";

export const TaskContext = createContext();

const TaskProvider = ({ children }) => {
  const [task, setTask] = useState([]);



  const addTask = (newTask) => {
    setTask([...task, newTask]);
    // console.log("add task called");
  }

  const editTask = (id, editedTask) => {
    setTask(task.map(taskItem => taskItem.id === id ? editedTask : taskItem));
  };

  const deleteTask = (id) => {
    // console.log("delete called");
    setTask(task.filter(taskItem => taskItem.id !== id));
  };

  const updateTaskStatus = (id) => {
    setTask(task.map(taskItem => taskItem.id === id ? { ...taskItem, status: 'completed' } : taskItem));
  }
 
  //-----------code to search-----------------

  const filteredTasks = (searchQuery) => {
    // setTask(task.filter(task =>
    //     task.title.toLowerCase().includes(searchQuery.toLowerCase())
    //    ))
    setTask(task.filter((el) => {
      //if no input the return the original
      if (searchQuery === '') {
        return el;
      }
      //return the item which contains the user input
      else {
        return el.title.toLowerCase().includes(searchQuery)
      }
    }))
  }
  //------------------code for filter by category-------------

  const filterTasksBy = (filterType) => {
    switch (filterType) {
      case 'Work':
        // Implement date-based filtering logic
        setTask(task.filter(taskItem => taskItem.category === 'Work'));
        break;
      case 'Personal':
        // Implement status-based filtering logic
        setTask(task.filter(taskItem => taskItem.category === 'Personal'));
        break;
      case 'Other':
        // Implement status-based filtering logic
        setTask(task.filter(taskItem => taskItem.category === 'Other'));
        break;
      case 'Low':
        // Implement status-based filtering logic
        setTask(task.filter(taskItem => taskItem.priority === 'Low'));
        break;
      case 'Medium':
        // Implement status-based filtering logic
        setTask(task.filter(taskItem => taskItem.priority === 'Medium'));
        break;
      case 'High':
        // Implement status-based filtering logic
        setTask(task.filter(taskItem => taskItem.priority === 'High'));
        break;
      default:
        setTask(task);
        // Reset to all tasks if filterType is not recognized
        break;
    }
  };

  return (
    <>
      <TaskContext.Provider value={{ task, addTask, editTask, deleteTask, updateTaskStatus, filteredTasks, filterTasksBy }}> {/*filterTasksBy*/}
        {children}
      </TaskContext.Provider>
    </>
  )
}

export default TaskProvider

