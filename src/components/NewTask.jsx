import { useState } from "react";
import "./NewTask.css";

export default function NewTask({ addTask }) {
  const [descrition, setDescription] = useState("");

  function hendleSubmit(event) {
    event.preventDefault();
    addTask(descrition);
    setDescription("");
  }

  return (
    <div className="newtask">
      <form onSubmit={hendleSubmit}>
        <input
          type="text"
          name="description"
          onChange={(event) => setDescription(event.target.value)}
          value={descrition}
        />
        <button>Adicionar</button>
      </form>
    </div>
  );
}
