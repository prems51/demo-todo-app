import { useContext } from "react"
import CreateTask from "./components/createTask/CreateTask"
import TaskList from "./components/taskList/TaskList"
import TodoHeader from "./components/todoHeader/TodoHeader"
import { TodoContext } from "../../TodoContext"





const Todo = () => {

  const { newTaskClick, setNewTaskClick } = useContext(TodoContext);
  const {TasksList, setTaskList} = useContext(TodoContext);

  return (
    <div className="xl:w-[50vw] md:w-[70vw] w-[100vh]  h-[100vh] flex flex-col mx-auto px-5 gap-6 relative py-6">
      <TodoHeader />
      {TasksList.length > 0? <TaskList />: <div className="text-md italic text-gray-300">No Task to show. Create new</div>}
      {newTaskClick && <CreateTask />}
      
    </div>
  )
}

export default Todo
