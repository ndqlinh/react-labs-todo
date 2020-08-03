import React from 'react';

function TodoTabs() {
  return (
    <ul className="todo-tabs">
      <li className="tab-item">
        <button className="tab-button active">All</button>
      </li>
      <li className="tab-item">
        <button className="tab-button">Active</button>
      </li>
      <li className="tab-item">
        <button className="tab-button">Done</button>
      </li>
    </ul>
  )
}

export default TodoTabs;
