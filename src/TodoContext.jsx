import { createContext, useState, useEffect } from "react";

export const TodoContext = createContext();

export const ContextProvider = ({ children }) => {
  //states
  const [taskCategories, setTaskCategories] = useState([
    "All",
    "Work",
    "Home",
    "College",
    "Other",
  ]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [newTaskClick, setNewTaskClick] = useState(false);
  const [TasksList, setTaskList] = useState([]);
   
  useEffect(() => {
    let tasks = localStorage.getItem("TaskList");
        if (tasks) {
            setTaskList(JSON.parse(tasks))
        }
  
    
  }, [])
  

  // context object
  const contextValue = {
    taskCategories,
    setTaskCategories,
    selectedCategory,
    setSelectedCategory,
    TasksList,
    setTaskList,
    newTaskClick,
    setNewTaskClick,
  };

  return (
    <TodoContext.Provider value={contextValue}>{children}</TodoContext.Provider>
  );
};
