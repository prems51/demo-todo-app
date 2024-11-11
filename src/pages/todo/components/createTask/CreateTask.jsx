import { useContext, useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { TodoContext } from "../../../../TodoContext";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import toast from 'react-hot-toast';
import { v4 as uuidv4 } from 'uuid';

const CreateTask = () => {
  const { newTaskClick, setNewTaskClick } = useContext(TodoContext);
  const { taskCategories, setTaskCategories } = useContext(TodoContext);
  const [title, setTitle] = useState("");
  const [chosenCategory, setChosenCategory] = useState("Work");
  const [selectedDate, setSelectedDate] = useState(null);
  const {TasksList, setTaskList} = useContext(TodoContext);
  

  const handleAddTask = () => {
    if(!title){
        return toast.error("Title is required!")
    }


    setTaskList([...TasksList, {id:uuidv4() ,title:title, category:chosenCategory, date:selectedDate.toLocaleDateString(), isFinished: false}]);

    localStorage.setItem("TaskList", JSON.stringify([...TasksList, {id:uuidv4() ,title:title, category:chosenCategory, date:selectedDate.toLocaleDateString(), isFinished: false}]))
    setNewTaskClick(false)


  }

  return (
    <div className="absolute top-10 bg-[#202020]/90 xl:w-[50vw] md:w-[70vw] w-[100vh]  h-[50vh] flex flex-col mx-auto px-10 py-5 rounded-lg gap-6 ">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Create New Task</h1>
        <span
          onClick={() => setNewTaskClick(false)}
          className="text-xl cursor-pointer"
        >
          <IoMdClose />
        </span>
      </div>

      <input
        required
        type="text"
        placeholder="Write Todo"
        className="rounded-full px-4 py-2 border-none outline-none text-black"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <div>
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          dateFormat="dd/MM/yyyy"
          placeholderText="Select a date"
          className="px-4 py-2 text-black rounded-full outline-none"
        />
      </div>
      <div className="flex items-center justify-start gap-3 w-full overflow-x-hidden">
        {taskCategories.map((categorie, index) => (
          categorie !== 'All' &&
          <div
            key={index}
            onClick={(e) => setChosenCategory(e.target.innerText)}
            className={`${
              chosenCategory === categorie ? "bg-[#f8cd7a] text-black" : ""
            } px-3 py-2 border border-white/60 rounded-full cursor-pointer `}
          >
            {categorie}
          </div>
        ))}
      </div>

      <button className="rounded-full px-4 py-2 bg-blue-500 font-semibold hover:bg-blue-400" onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default CreateTask;
