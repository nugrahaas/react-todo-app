import { useState } from "react";

const Header = ({ setRefresh }) => {
  const [title, setTitle] = useState("");

  // fungsi untuk menambah data todo melalui API ketika tombol "Add" di klik
  const addTodo = () => {
    const newTodo = { title, done: false };

    if (title.length > 3) {
      fetch("http://localhost:8000/todos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTodo),
      }).then(() => {
        // ketika sukses menambah data, reset form dengan mengeset state title menjadi empty string
        setTitle("");
        setRefresh(true);
      });
    }
  };

  return (
    <div id="todo-header" className="header">
      <h1>Simple Todo App</h1>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button className="add-button" onClick={addTodo}>
        Add
      </button>
    </div>
  );
};

export default Header;
