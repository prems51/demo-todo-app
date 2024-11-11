import React from "react";
import Todo from "./pages/todo";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <div>
      <Toaster position="bottom-right" reverseOrder={false} />
      <Todo />
    </div>
  );
};

export default App;
