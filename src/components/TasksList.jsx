import { useState } from "react";
import Task from "./Task";
import NewTask from "./NewTask";
import "./TasksList.css";

export default function TasksList() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      description: "Estudar JavaScript",
      status: false,
    },
    {
      id: 2,
      description: "Estudar ReactJs",
      status: false,
    },
    {
      id: 3,
      description: "Concluir o projeto Lista de Tarefas",
      status: false,
    },
    {
      id: 4,
      description: "Publicar na Vercel",
      status: false,
    },
  ]);

  function checkTask(task) {
    setTasks((prevTasks) => {
      return prevTasks.map((currentTask) =>
        currentTask.id === task.id
          ? { ...currentTask, status: true }
          : currentTask
      );
    });
  }

  function addTask(descriptionTask) {
    descriptionTask !== "" &&
      setTasks((prevTasks) => [
        ...prevTasks,
        {
          id: Math.floor(Math.random() * 100 + 4),
          description: descriptionTask,
          status: false,
        },
      ]);
  }

  return (
    <>
      <div className="tasksList">
        <NewTask addTask={addTask} />

        <div className="list">
          <h2>Pendentes</h2>
          {tasks.map(
            (task) =>
              // verifica se a tarefa não foi concluida
              task.status === false && (
                <Task key={task.id} task={task} checkTask={checkTask} />
              )
          )}
          <h2>Concluídas</h2>
          {tasks.map(
            (task) =>
              // verifica se a tarefa não foi concluida
              task.status === true && (
                <Task key={task.id} task={task} checkTask={checkTask} />
              )
          )}
        </div>
      </div>
    </>
  );
}
