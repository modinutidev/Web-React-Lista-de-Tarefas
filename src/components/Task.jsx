import "./Task.css";

export default function Task({ task, checkTask }) {
  return (
    <div className="task">
      <p
        style={{
          textDecoration: task.status === true ? "line-through" : "none",
        }}
      >
        {task.description}
      </p>
      {task.status === false && (
        <button onClick={() => checkTask(task)}>
          <span className="material-symbols-outlined">check</span>
        </button>
      )}
    </div>
  );
}
