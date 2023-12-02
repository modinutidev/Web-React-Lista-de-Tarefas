import "./Task.css";

export default function Task({ task, checkTask }) {
  return (
    <div className="task">
      <p>{task.description}</p>
      <button onClick={() => checkTask(task)}>Feito</button>
    </div>
  );
}
