import { useContext, useEffect, useState } from "react";
import { TodoContext } from "../../../../TodoContext";

const TodoHeader = () => {
  const { taskCategories, setTaskCategories } = useContext(TodoContext);
  const { selectedCategory, setSelectedCategory } = useContext(TodoContext);
  const { newTaskClick, setNewTaskClick } = useContext(TodoContext);
  // const [chosenCategory, setChosenCategory] = useState("All");

  return (
    <div className="flex flex-col gap-4 sticky top-0 bg-[#0e0e0e]">
      <div className="flex items-center justify-between">
        <div className="text-3xl font-semibold p-3">Todo</div>
        <div
          onClick={() => setNewTaskClick(true)}
          className="text-md font-semibold border border-white/60 px-4 py-2 cursor-pointer rounded-full hover:bg-[#202020]"
        >
          New Task
        </div>
      </div>

      <div className="flex items-center justify-start gap-3 w-full overflow-x-hidden">
        
        {taskCategories.map((categorie, index) => (
          <div
            key={index}
            onClick={(e) => setSelectedCategory(e.target.innerText)}
            className={`${
              selectedCategory === categorie ? "bg-[#f8cd7a] text-black" : ""
            } px-3 py-2 border border-white/60 rounded-full cursor-pointer hover:text-white hover:bg-[#202020] `}
          >
            {categorie}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoHeader;
