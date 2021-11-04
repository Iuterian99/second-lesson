import { useState } from "react";
import "./App.scss";

function App() {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (evt) => {
    if (evt.keyCode === 13) {
      const newTodo = {
        id: todos.at(-1) ? todos.at(-1).id + 1 : 1,
        value: evt.target.value,
      };
      setTodos([...todos, newTodo]);
    }
  };
  return (
    <>
      <input type="text" onKeyUp={handleAddTodo} />
      {todos.length > 0 && (
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              {todo.value}{" "}
              <button
                onClick={() =>
                  setTodos(todos.filter((item) => item.id !== todo.id))
                }
              >
                &times;
              </button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default App;
