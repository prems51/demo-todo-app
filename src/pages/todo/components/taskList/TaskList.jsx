import { useContext, useEffect } from "react";
import { TodoContext } from "../../../../TodoContext";
import { GoPencil } from "react-icons/go";
import { MdDelete } from "react-icons/md";
import toast from "react-hot-toast";

const TaskList = () => {
  const { TasksList, setTaskList } = useContext(TodoContext);
  const { selectedCategory, setSelectedCategory } = useContext(TodoContext);

  const filteredTasks =
    selectedCategory === "All"
      ? TasksList
      : TasksList.filter((task) => task.category === selectedCategory);

  const handleTaskFinish = (id) => {
    setTaskList((prevTaskList) => {
      const updatedTaskList = prevTaskList.map((task) =>
        task.id === id ? { ...task, isFinished: !task.isFinished } : task
      );
      return updatedTaskList;
    });
  };

  const handleDeleteTask = (id) =>{
    let arr = TasksList.filter(item => item.id !== id);
    setTaskList(arr);
    localStorage.setItem("TaskList", JSON.stringify(arr));
    toast.success("Task Removed")
  }

  return (
    TasksList && (
      <div className="flex flex-col gap-3">
        {filteredTasks.map((task, index) => (
          <div
            key={index}
            className="w-full flex items-center justify-between group bg-[#202020] rounded-lg p-3"
          >
            <div className="flex items-center justify-center gap-3">
              <span
                onClick={() => handleTaskFinish(task.id)}
                className="text-xl flex items-center justify-center text-blue-600 rounded-full cursor-pointer"
              >
                {task.isFinished ? "✅" : "⭕"}
              </span>
              <span
                className={`${
                  task.isFinished ? "line-through text-gray-400 italic" : ""
                } text-xl`}
              >
                {task.title}
              </span>
            </div>
            <div>
              <div className=" items-center justify-center gap-3 hidden group-hover:flex transition-all duration-300">
                <span onClick={()=> toast.error("Edit Functionality missing")} className="cursor-pointer text-xl">
                  <GoPencil />
                </span>
                <span onClick={()=> handleDeleteTask(task.id)} className="cursor-pointer text-xl">
                  <MdDelete />
                </span>
              </div>
              <div className="text-sm items-center justify-center gap-3 flex group-hover:hidden transition-all duration-300">
                <span className="cursor-pointer text-gray-400 italic">
                  #{task.category}
                </span>
                <span className="cursor-pointer text-gray-400">
                  {task.date}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  );
};

export default TaskList;
