import React from 'react';
import TodoTabs from './todo-tabs';
import TodoItem from './todo-item';

function TodoList() {
  const tasks = [
    { id: 1, name: 'A Modular Approach To Routing With React Router 4', isDone: false },
    { id: 2, name: 'A Modular Approach To Routing With React Router 4', isDone: false },
    { id: 3, name: 'A Modular Approach To Routing With React Router 4', isDone: true },
    { id: 4, name: 'A Modular Approach To Routing With React Router 4', isDone: false },
    { id: 5, name: 'A Modular Approach To Routing With React Router 4', isDone: true }
  ];

  const taskItem = tasks.map((task) => 
    <li className="todo-item" key={task.id}>
      <TodoItem todo={task}></TodoItem>
    </li>
  );

  return (
    <div className="todo-wrapper">
      <TodoTabs></TodoTabs>
      <ul className="todo-list">
        {taskItem}
      </ul>
    </div>
  );
}

export default TodoList;
